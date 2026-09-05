---
qid: ing_aadbb79271__eli5__local
question: 'Explain: Key ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 210
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:54-05:00'
sources: []
---

**Paged attention in vLLM – a “library‑book” shortcut**

Imagine a huge library where every book is split into many pages. A reader (the model) usually wants to flip through the whole book, but that’s slow and needs a lot of memory. Paged attention lets the reader keep only a handful of pages open at once—just the ones needed for the current question.

When vLLM processes a prompt, it loads one “page” of key‑value pairs into fast RAM, uses them to answer part of the query, then swaps in the next page. Because each page is small, the model can handle far larger books (longer contexts) without running out of memory or slowing down.

So paged attention is like a smart librarian who keeps only the relevant pages handy, swapping them in and out as needed, letting you read an enormous book quickly and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
