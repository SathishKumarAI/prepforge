import { useCallback, useEffect, useRef, useState } from "react";
import { Highlighter } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "./ui/sonner";
import { useHotkeys } from "../hooks/useHotkeys";
import { useUserCards } from "../hooks/useUserCards";
import {
  cleanHighlight,
  isUsableHighlight,
  MAX_QUESTION,
  MIN_HIGHLIGHT,
  type UserCard,
} from "../lib/userCards";

/**
 * Select a passage anywhere the app renders prose, and turn it into a card.
 *
 * Mounted once, in the shell. The alternative was a copy of this in the Reader,
 * the answer pane, the study card and the vault viewer — four places to keep in
 * step, and three of them would have drifted. What makes text eligible is a
 * `data-cardable` attribute, which `Markdown` sets on everything it renders, so
 * the surfaces opt in by rendering markdown at all.
 *
 * Owns: watching the selection, the floating button, and the compose dialog.
 * Does NOT own: the card shape or ids (`lib/userCards.ts`) or storage
 * (`hooks/useUserCards.ts`).
 */

/** Where the floating button sits relative to the selection, in px. */
const GAP = 8;

interface Pending {
  text: string;
  source?: UserCard["source"];
  x: number;
  y: number;
}

function readSelection(): Pending | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  // `commonAncestorContainer` rather than `anchorNode`: a selection dragged
  // backwards anchors at its END, and a selection that starts in a text node
  // reports that node, which has no `closest`.
  const node = range.commonAncestorContainer;
  const el = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  const cardable = el?.closest("[data-cardable]");
  if (!cardable) return null;
  const text = sel.toString();
  if (!isUsableHighlight(text)) return null;

  // The LAST line of the selection that is actually on screen, not the bounding
  // box: a selection that runs past the fold has a box whose bottom is below the
  // viewport, and anchoring to that pinned the button over whatever sat at the
  // bottom of the page.
  const rects = [...range.getClientRects()];
  const onScreen = rects.filter((r) => r.top >= 0 && r.bottom <= window.innerHeight - 48);
  const rect = onScreen[onScreen.length - 1] ?? rects[0] ?? range.getBoundingClientRect();
  const holder = el?.closest<HTMLElement>("[data-card-source]");
  return {
    text: cleanHighlight(text),
    source: holder?.dataset.cardSource
      ? { title: holder.dataset.cardSource, href: holder.dataset.cardHref || undefined }
      : undefined,
    // Clamped so a selection at the right edge does not put the button
    // off-screen, which is where a 200px-wide button ends up on a phone.
    x: Math.min(Math.max(rect.left, GAP), window.innerWidth - 190),
    y: Math.min(rect.bottom + GAP, window.innerHeight - 48),
  };
}

export function CardFromSelection() {
  const { create } = useUserCards();
  const [pending, setPending] = useState<Pending | null>(null);
  const [composing, setComposing] = useState<Pending | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const questionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Read on mouseup/keyup rather than on `selectionchange`: the latter fires
    // on every character as a drag grows, which would have the button chasing
    // the pointer across the paragraph.
    const check = () => setPending(readSelection());
    document.addEventListener("mouseup", check);
    document.addEventListener("keyup", check);
    return () => {
      document.removeEventListener("mouseup", check);
      document.removeEventListener("keyup", check);
    };
  }, []);

  /**
   * `c` opens the composer for whatever is selected, so the whole feature works
   * without a pointer — a selection made with shift+arrow already raises the
   * button, and before this the only way to reach it was to click it.
   *
   * Enabled only while a selection is live, so `c` is not a global key that
   * swallows a keystroke on every page. `useHotkeys` already refuses to fire
   * inside a text field or while a dialog is open, which is what stops it from
   * typing `c` into the composer it just opened.
   */
  useHotkeys({ c: () => pending && open(pending) }, pending !== null);

  // The button is positioned in viewport coordinates, so it has to go the
  // moment the page moves under it rather than float over unrelated text.
  useEffect(() => {
    if (!pending) return;
    const drop = () => setPending(null);
    window.addEventListener("scroll", drop, true);
    window.addEventListener("resize", drop);
    return () => {
      window.removeEventListener("scroll", drop, true);
      window.removeEventListener("resize", drop);
    };
  }, [pending]);

  const open = useCallback((p: Pending) => {
    setComposing(p);
    setQuestion("");
    setAnswer(p.text);
    setPending(null);
    // Selecting text and then typing into an input leaves the highlight behind
    // the dialog, which reads as a second, competing selection.
    window.getSelection()?.removeAllRanges();
  }, []);

  function save() {
    if (!composing) return;
    const q = question.trim();
    const a = cleanHighlight(answer);
    if (!q || a.length < MIN_HIGHLIGHT) return;
    create({ question: q, answer: a, source: composing.source });
    setComposing(null);
    toast.success("Card made", {
      description: "It joins your recall deck under “My cards”.",
    });
  }

  return (
    <>
      {pending && (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()} // keep the selection alive
          onClick={() => open(pending)}
          style={{ left: pending.x, top: pending.y }}
          className="fixed z-50 inline-flex items-center gap-2 rounded-lg border border-surface1 bg-mantle px-2.5 py-1.5 text-small text-subtext0 shadow-lg hover:text-text"
        >
          <Highlighter aria-hidden className="size-3.5" />
          Make a card
          <kbd className="rounded border border-surface1 bg-crust px-1 font-mono text-micro text-overlay1">
            c
          </kbd>
        </button>
      )}

      <Dialog
        open={composing !== null}
        onOpenChange={(o) => {
          if (!o) setComposing(null);
        }}
      >
        {/* preventDefault, or the dialog's own focus move lands after this one
            and the caret ends up in the answer — which is the field that is
            already filled in. */}
        <DialogContent
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            questionRef.current?.focus();
          }}
        >
          <DialogHeader>
            <DialogTitle>Make a card</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="card-question"
                className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1"
              >
                What should you be asked?
              </label>
              <input
                id="card-question"
                ref={questionRef}
                value={question}
                maxLength={MAX_QUESTION}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") save();
                }}
                placeholder="e.g. Why does gradient clipping stabilise RNN training?"
                className="input"
              />
              {/* The prompt is the part a highlight cannot give you. Recall
                  works on retrieval, and a card whose question is "read this"
                  never asks you to retrieve anything. */}
              <p className="mt-1.5 text-micro text-overlay0">
                The passage is the answer. The question is yours to write — that is the half that
                makes it recall rather than re-reading.
              </p>
            </div>

            <div>
              <label
                htmlFor="card-answer"
                className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1"
              >
                The answer, from your highlight
              </label>
              <textarea
                id="card-answer"
                value={answer}
                rows={5}
                onChange={(e) => setAnswer(e.target.value)}
                className="input min-h-24 resize-y py-2 leading-relaxed"
              />
              {composing?.source && (
                <p className="mt-1.5 truncate text-micro text-overlay0">
                  From {composing.source.title}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 border-t border-surface0 pt-3">
            <Button variant="ghost" onClick={() => setComposing(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={save}
              disabled={!question.trim() || cleanHighlight(answer).length < MIN_HIGHLIGHT}
            >
              Add to my deck
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
