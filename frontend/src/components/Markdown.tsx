import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-answer">
      <ReactMarkdown components={{ pre: PreWithCopy }}>{children}</ReactMarkdown>
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
