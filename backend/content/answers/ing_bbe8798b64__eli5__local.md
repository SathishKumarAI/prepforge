---
qid: ing_bbe8798b64__eli5__local
question: 'Explain: Consistency Approaches — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 236
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:10-05:00'
sources: []
---

**Think of a library that wants to keep its books up‑to‑date but also let readers find them quickly.**  
Instead of asking every reader to walk all the way to the main shelf (the database) for each book, the library puts a small “mini‑shelf” in front of each reading room—this is *caching*.  

When a reader asks for a book, the system first checks the mini‑shelf.  
* If the book is there, it’s handed out instantly—fast and cheap.  
* If it isn’t, the book is fetched from the main shelf (the authoritative source), copied to the mini‑shelf, and then given to the reader.

In consistency terms, caching keeps a copy of data close to users while ensuring that if the original changes, the cache can be refreshed or invalidated so everyone eventually sees the same, up‑to‑date information.  
So, caching is simply “storing temporary copies nearby to speed access while keeping them consistent with the source.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
