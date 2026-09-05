---
qid: ing_3f2e5c9303__eli5__local
question: 'Explain: Position Encoding Comparison — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 237
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:15:59-05:00'
sources: []
---

Think of an LLM as a long‑term memory book that writes sentences one word at a time, but it can’t “see” where each word sits in the story unless we give it a clue. Position encoding is like putting sticky notes on every page to say “this is page 1, this is page 2,” so the model knows the order.

There are two common sticky‑note styles:

* **Absolute** – each note has its own fixed number (page 3 always gets 3). The book works best when the story length never changes; if we add a new chapter, all notes shift and the book forgets where things were.

* **Relative** – instead of fixed numbers, the note says “three pages after the previous one.” This lets the book read short paragraphs or long epics without re‑labeling everything; it only cares how far apart words are, not their exact spot.

Both styles help the model keep track of word order, but relative encoding gives more flexibility when stories grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
