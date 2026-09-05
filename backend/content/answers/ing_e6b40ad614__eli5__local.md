---
qid: ing_e6b40ad614__eli5__local
question: 'Explain: KV-cache memory math and paged attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 260
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:30-05:00'
sources: []
---

Imagine you’re reading a long book, but only one page fits in your pocket at a time. Each page has two parts: **keys** (the headings) and **values** (the details). When the book’s story moves forward, you keep the keys of all pages you’ve seen in a small “key‑list” (the KV cache). The values stay on their pages until you need them again.

In transformer models, attention looks at every word by comparing its key to those already stored. If we have 10 000 words and each key is 64 bytes, the cache needs 640 kB—small enough for a GPU’s fast memory. When new words arrive, only their keys join the list; values stay on disk or slower RAM.

**Paged attention** is like swapping out whole pages that are unlikely to be needed soon: we keep the most recent “pages” in fast memory and move older ones to slower storage (paging). This keeps the key‑list compact while still letting the model look back far enough, just as you can flip through a book by keeping its headings handy and paging the rest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
