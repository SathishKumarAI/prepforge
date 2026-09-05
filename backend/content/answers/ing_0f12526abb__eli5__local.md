---
qid: ing_0f12526abb__eli5__local
question: 'Explain: Write Strategies — Top 5 Caching Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 272
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:59:23-05:00'
sources: []
---

Think of a machine‑learning model as a chef’s kitchen and the cache as a pantry that holds pre‑made sauces (model inferences).  
1. **Least Recently Used (LRU)** – like a pantry that discards the sauce you haven’t used for the longest time, keeping fresh ingredients handy.  
2. **Least Frequently Used (LFU)** – keeps the sauces that are requested most often, dropping the ones people rarely touch.  
3. **Time‑to‑Live (TTL)** – each sauce gets a “best‑before” date; after that it’s thrown away so you never serve stale predictions.  
4. **First‑In, First‑Out (FIFO)** – simply removes the oldest sauce when space runs out, regardless of popularity.  
5. **Weighted LRU** – gives more shelf space to sauces that cost more to re‑cook (complex models), so expensive predictions stay cached longer.  

These strategies let you keep the most useful model outputs ready while freeing memory for new requests, just like a smart pantry keeps your kitchen running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
