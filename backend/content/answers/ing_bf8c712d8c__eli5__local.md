---
qid: ing_bf8c712d8c__eli5__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 218
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:34-05:00'
sources: []
---

Imagine a library where each book is a *key–value pair* that the AI uses while reading.  
When two readers (different parts of the model) need the same section, they don’t copy the whole book; instead, they both point to the original pages—this is **cache sharing**.  

If one reader wants to annotate a page (modify it), we use **copy‑on‑write**: a fresh copy of that page is made for just that reader, while the others keep pointing at the untouched page. This keeps memory usage low and prevents accidental changes.

In practice, the model stores *key* vectors (the “pages”) and *value* vectors (the “annotations”). By paging these vectors into shared memory and copying only when a change is needed, the AI can perform attention over many tokens efficiently—just like multiple readers sharing a library’s books without duplicating everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
