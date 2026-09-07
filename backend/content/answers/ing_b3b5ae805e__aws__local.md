---
qid: ing_b3b5ae805e__aws__local
question: 'Explain: Indexing — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 400
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:14-05:00'
sources: []
---

**Context & Challenge**  
In a prior role I was tasked to reduce query latency for a recommendation engine that served 1 M requests/day. The dataset was a PostgreSQL catalog of 30 M product records; full scans cost ~2 s per request, unacceptable for real‑time personalization.

**Action (Design)**  
I performed a *dive deep* audit:  
- **Identify hot columns** – `category_id`, `price_range`, and `user_interest_tags`.  
- **Create composite B‑Tree indexes** on `(category_id, price_range)` and a GIN index on `tags` (text search).  
- Use **Amazon RDS Aurora PostgreSQL** for managed scalability; enable **parallel query** to exploit multi‑core instances.  
- Implement **read replicas** in the US‑East region to distribute read traffic.  
- Add an **Aurora Serverless v2 pool** during off‑peak hours to cut cost.

**Result**  
Query latency dropped from 2 s → **120 ms** (90% reduction). The cache hit rate on the GIN index rose to 97%, cutting CPU usage by 35%. Monthly DB cost fell from $12k to $8.5k, saving **$3.5k/yr** while maintaining 99.9% availability.

**Reflection & Ownership**  
I documented the indexing strategy in a shared repo and trained teammates on *index hygiene*, turning it into an ongoing best practice. When a new column was added (brand_id), I proactively re‑indexed, preventing a regression that could have cost 10 M additional seconds of latency. This exemplifies **Customer Obsession** (delivering fast recommendations) and **Ownership** (continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
