import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { PluggableList } from "unified";
import rehypeSlug from "rehype-slug";

/**
 * A fenced block that names a language — the only thing the highlighter acts on.
 *
 * Deliberately not a parse: this decides whether to spend a network request, and
 * a false positive costs one lazy chunk nobody looks at. A false NEGATIVE would
 * cost a code block its colours, which is why it matches `~~~` as well and does
 * not try to be clever about fences inside fences.
 */
const NAMED_FENCE = /(^|\n)[ \t]*(```|~~~)[ \t]*[a-zA-Z]/;

/**
 * The GitHub-flavoured constructs plain CommonMark does not have: a table row,
 * a task list, strikethrough, a footnote definition, and a bare URL that should
 * become a link.
 *
 * Same judgement as `NAMED_FENCE` above it: this decides whether to spend a
 * download, not whether something is valid markdown. A false positive costs one
 * lazy chunk; a false negative renders a table as a wall of pipe characters,
 * which is what every .md file with a table did before this.
 */
const GFM_SYNTAX =
  /(^[ \t]*\|.*\|[ \t]*$)|(^[ \t]*[-*+] \[[ xX]\])|(~~[^~\n]+~~)|(^[ \t]*\[\^[^\]]+\]:)|(^|\s)https?:\/\//m;

/** Resolved once per session and shared; `null` until then, or if it fails. */
let highlighter: PluggableList[number] | null = null;
let loading: Promise<void> | null = null;

/** Same shape, for remark-gfm. Two independent loads: an answer with a table
 *  and no code should not pull lowlight, and vice versa. */
let gfm: PluggableList[number] | null = null;
let gfmLoading: Promise<void> | null = null;

function loadGfm(): Promise<void> {
  if (!gfmLoading) {
    gfmLoading = import("remark-gfm")
      .then((m) => {
        gfm = m.default;
      })
      .catch(() => {
        // The document renders as CommonMark rather than not at all — a table
        // as pipes is worse than a table, and better than a blank page.
      });
  }
  return gfmLoading;
}

function loadHighlighter(): Promise<void> {
  if (!loading) {
    loading = import("@/lib/rehype-highlight-lite")
      .then((m) => {
        highlighter = m.rehypeHighlightLite;
      })
      .catch(() => {
        // Code renders unhighlighted rather than not at all. Nothing to say to
        // the user about a colour scheme that did not arrive.
      });
  }
  return loading;
}

/**
 * lowlight and its seven grammars are ~119 kB — two thirds of everything this
 * module used to pull — and most answers in the bank contain no code at all.
 * So it arrives only when a fenced block names a language, and only the first
 * time: the module-level `highlighter` means the second code answer of a
 * session renders coloured on its first paint.
 *
 * The cost is that the FIRST such answer paints once uncoloured and once
 * coloured. That is the right way round — text a moment early beats a blank
 * space while a syntax highlighter downloads.
 */
function useHighlighter(needed: boolean): typeof highlighter {
  const [, force] = useState(0);
  useEffect(() => {
    if (!needed || highlighter) return;
    let alive = true;
    void loadHighlighter().then(() => {
      if (alive && highlighter) force((n) => n + 1);
    });
    return () => {
      alive = false;
    };
  }, [needed]);
  return needed ? highlighter : null;
}

/** The loader above, as a hook. Identical to `useHighlighter` because the
 *  problem is identical: an optional plugin that must not be in the first
 *  paint's payload. */
function useGfm(needed: boolean): typeof gfm {
  const [, force] = useState(0);
  useEffect(() => {
    if (!needed || gfm) return;
    let alive = true;
    void loadGfm().then(() => {
      if (alive && gfm) force((n) => n + 1);
    });
    return () => {
      alive = false;
    };
  }, [needed]);
  return needed ? gfm : null;
}

export function Markdown({ children }: { children: string }) {
  const hl = useHighlighter(NAMED_FENCE.test(children));
  const gfmPlugin = useGfm(GFM_SYNTAX.test(children));
  // A new array identity on every render makes react-markdown rebuild its whole
  // processor each time, which on a 900-word answer is not free.
  const plugins = useMemo<PluggableList>(() => (hl ? [rehypeSlug, hl] : [rehypeSlug]), [hl]);
  const remarkPlugins = useMemo<PluggableList>(() => (gfmPlugin ? [gfmPlugin] : []), [gfmPlugin]);
  return (
    // `data-cardable` is the whole opt-in for highlight-to-card: anything
    // rendered as markdown can become a card, and no caller had to learn
    // about the feature. See components/CardFromSelection.tsx.
    <div className="prose-answer" data-cardable>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={plugins}
        components={{ pre: PreWithCopy, table: TableScroll }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

/**
 * A table that scrolls inside its own box.
 *
 * A wide table in a 68ch measure otherwise widens the PAGE, and a horizontally
 * scrolling page makes every other column unreadable at once — the answer, the
 * question list and the nav all shift together. The wrapper is here rather than
 * in CSS because there is no selector for "give this element a parent".
 */
function TableScroll(props: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="table-scroll">
      <table {...props} />
    </div>
  );
}

// Code block with a hover copy button.
function PreWithCopy({ node, ...props }: { node?: unknown } & React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  function copy() {
    const text = ref.current?.innerText ?? "";
    if (!text) return;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="group/code relative">
      <pre ref={ref} {...props} />
      <button
        onClick={copy}
        aria-label="Copy code"
        className="absolute right-2 top-2 rounded-md bg-surface0/80 px-2 py-0.5 font-mono text-[10px] text-subtext0 opacity-0 backdrop-blur transition-opacity hover:text-text group-hover/code:opacity-100"
      >
        {copied ? "✓ copied" : "copy"}
      </button>
    </div>
  );
}
