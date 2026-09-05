---
qid: ing_3b58d5516f__eli5__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 190
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:08-05:00'
sources: []
---

Imagine you’re at a huge library where every book is written in a secret language that only the computer can read—each book becomes a point in space, called a *vector*. A **Flat Index (Brute Force)** is like asking the librarian to hand‑pick every single book and compare it one by one with your query. You check each vector against yours, score how similar they are, and keep the best matches.  

*Vector database*: a storage system that keeps all those points in a format ready for quick searching.  
*Brute force*: literally testing every item; no shortcuts or pre‑organized shelves—just straight comparison.  

This method is simple and guarantees you find the exact nearest neighbors, but it gets slow when the library (dataset) grows huge, because you keep scanning every book one after another.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
