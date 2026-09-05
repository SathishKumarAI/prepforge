---
qid: ing_8ea356ee1f__eli5__local
question: 'Explain: Estimate the KV-cache footprint for serving a Llama-3-70B-class
  model, and explain what PagedAttention fixes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 226
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:48-05:00'
sources: []
---

Imagine your computer is a giant library that reads a long book (the input text). For each page it reads, the library keeps two copies of the page’s “key” and “value” notes so it can quickly look back later – this is the KV‑cache.  
For a Llama‑3‑70B model, one token (a word piece) needs about 16 KB of key+value memory (2 tensors × 4096‑dimensional vectors). If you serve 1 000 tokens at once, that’s roughly 16 MB per request – and if many users ask for long passages the cache can balloon to gigabytes.  

PagedAttention fixes this by chopping the KV cache into small “pages” (like book chapters) and only loading the pages that are actually needed for a given query. It keeps the same total memory but avoids keeping huge, mostly unused blocks in RAM, letting the model run efficiently on modest GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
