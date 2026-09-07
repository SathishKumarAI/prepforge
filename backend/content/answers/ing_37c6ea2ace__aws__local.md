---
qid: ing_37c6ea2ace__aws__local
question: 'Explain: partitioning because it''s a distributed system you'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 396
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:44-05:00'
sources: []
---

**Situation:**  
While leading the ML inference service for our recommendation engine, we hit a “hot‑spot” on a single shard that throttled latency to 400 ms during peak traffic (5k req/s).

**Task:**  
Redesign data partitioning so the system scales linearly and keeps SLA < 200 ms without breaking existing APIs.

**Action:**  
1. **Ownership & Customer Obsession** – I mapped every request path, identified that user‑ID was the sole key causing skew.  
2. **Dive Deep** – Collected 24‑hour traffic logs (≈ 10 M rows) and plotted histogram of request frequency per user.  
3. **Bias for Action / Invent & Simplify** – Adopted *consistent hashing* with virtual nodes, adding a deterministic hash on the user ID + a “region” tag.  
4. **AWS Services** – Migrated to Amazon DynamoDB Global Tables (multi‑AZ) and added an Elasticache Redis layer for hot embeddings.  
5. **Scalability & Cost** – Auto‑scaling read replicas handled 10× traffic; cost rose 15 % but latency dropped to 120 ms, improving conversion by 4 %.  

**Result:**  
Post‑migration, mean inference time fell from 400 ms to 110 ms, and the service sustained 20k req/s with < 1 % error. The initiative earned a “Go‑To” tag in our quarterly OKR review.

> **Bar‑raiser note:** I demonstrated clear ownership, deep data analysis, quantified impact (latency & conversion), and learned that hashing alone isn’t enough—combining it with caching yielded the best trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
