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

/** Resolved once per session and shared; `null` until then, or if it fails. */
let highlighter: PluggableList[number] | null = null;
let loading: Promise<void> | null = null;

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

export function Markdown({ children }: { children: string }) {
  const hl = useHighlighter(NAMED_FENCE.test(children));
  // A new array identity on every render makes react-markdown rebuild its whole
  // processor each time, which on a 900-word answer is not free.
  const plugins = useMemo<PluggableList>(() => (hl ? [rehypeSlug, hl] : [rehypeSlug]), [hl]);
  return (
    <div className="prose-answer">
      <ReactMarkdown rehypePlugins={plugins} components={{ pre: PreWithCopy }}>
        {children}
      </ReactMarkdown>
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
