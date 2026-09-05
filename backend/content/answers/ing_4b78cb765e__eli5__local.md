---
qid: ing_4b78cb765e__eli5__local
question: 'Explain: Decoder-Only (Most LLMs Today) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 254
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:33-05:00'
sources: []
---

Imagine a giant recipe book that only knows how to finish sentences, not start them. Each page of the book is a **decoder block**: it looks at the words already written and decides what comes next. The book has many such pages stacked one after another; each page adds a little more nuance—like adding seasoning or adjusting texture—so the final sentence feels natural.

In a decoder‑only language model, every layer (the pages) takes the previous word’s hidden representation, runs it through two main operations: **self‑attention** (the book checks all earlier words to see which ones matter most for the next one) and a small feed‑forward network (a quick tweak). The output of each layer is fed into the next, just like passing a rough draft down a chain of editors. Finally, a linear layer turns the last hidden state into scores over every word in the vocabulary, and the model picks the highest‑scoring one as its answer.

So, think of the whole system as an ever‑refining editor that only knows how to *continue* writing, not start from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
