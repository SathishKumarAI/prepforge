import { createLowlight } from "lowlight";
import python from "highlight.js/lib/languages/python";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import sql from "highlight.js/lib/languages/sql";
import yaml from "highlight.js/lib/languages/yaml";
import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

// A lightweight replacement for rehype-highlight: it registers ONLY the grammars
// an ML/DS interview app needs, so the bundle stays lean (the stock preset pulls
// ~37 languages). Highlights fenced code blocks whose class is `language-<x>`.
const lowlight = createLowlight({ python, javascript, typescript, bash, json, sql, yaml });
// common aliases so ```js / ```ts / ```sh / ```shell all resolve
lowlight.registerAlias({ javascript: ["js"], typescript: ["ts"], bash: ["sh", "shell"] });

function langOf(node: Element): string | null {
  const cls = node.properties?.className;
  const list = Array.isArray(cls) ? cls.map(String) : [];
  for (const c of list) if (c.startsWith("language-")) return c.slice(9);
  return null;
}

function textOf(node: Element): string {
  let out = "";
  visit(node, "text", (t: { value: string }) => {
    out += t.value;
  });
  return out;
}

export function rehypeHighlightLite() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, _i, parent) => {
      if (node.tagName !== "code" || !parent || (parent as Element).tagName !== "pre") return;
      const lang = langOf(node);
      if (!lang || !lowlight.registered(lang)) return;
      try {
        const result = lowlight.highlight(lang, textOf(node));
        node.properties = { ...node.properties, className: ["hljs", `language-${lang}`] };
        node.children = result.children as typeof node.children;
      } catch {
        /* unknown grammar — leave the code block untouched */
      }
    });
  };
}
