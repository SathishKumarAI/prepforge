---
qid: ing_8cf69d6a82__eli5__local
question: 'Explain: How PagedAttention Works (vLLM) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 245
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:00-05:00'
sources: []
---

Imagine a huge library where every book is split into pages that can be pulled out quickly.  
In the same way, **PagedAttention** treats the gigantic matrix of “keys” and “values” (the data the model looks at) as a collection of small page‑sized blocks stored in GPU memory. When the model needs to focus on part of the text, it fetches only the relevant pages instead of loading the whole library.

1. **Page cache** – The GPU keeps a cache of recently used pages (just like a librarian keeps popular books on a desk).  
2. **Index lookup** – For each query token, the system looks up which page contains its matching key‑value pair.  
3. **On‑the‑fly loading** – If the needed page isn’t in the cache, it is swapped in from slower memory; meanwhile other queries wait or use cached pages.

Because only a handful of pages are touched at any time, the model can handle far larger contexts with less memory, just as a librarian can read through an enormous book collection by pulling out one page at a time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
