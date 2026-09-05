---
qid: ing_2417c938ed__eli5__local
question: 'Explain: Paged Attention ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 207
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:33:36-05:00'
sources: []
---

**Paged attention** is a trick that lets huge language models work on tiny GPUs, just like a librarian who can read a massive book without having the whole thing on a single shelf.

Imagine you have a giant novel (the model’s “memory”) but only a small desk (your GPU) to read from. Instead of bringing the entire book onto the desk, the librarian keeps most pages in a large storage room and pulls out only the few chapters needed for each question.  
In technical terms, *paged attention* stores the model’s key‑value pairs on slower, cheap memory and loads just the necessary “pages” into fast GPU RAM when computing attention. This saves memory and lets the model handle longer contexts than would fit otherwise.

So, paged attention is like a smart librarian who fetches only what you need from a huge library, keeping your workspace light and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
