---
qid: ing_99048515c3__aws__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our recommendation engine’s feature‑store cache. The existing LRU policy was causing frequent eviction of high‑impact embeddings, leading to a 15 % drop in click‑through rate (CTR). My goal was to build a more intelligent eviction strategy that kept critical items longer while staying cost‑effective.

**Action**  
1. **Dive Deep** – I profiled access patterns over 30 days and discovered that 70 % of traffic hit the top 20 % of embeddings.  
2. **Design** – Replaced vanilla LRU with a *frequency‑aware LRU* (LFU‑LRU hybrid). Each cache entry tracks:
   - `last_access_time` (for recency)
   - `hit_count` (for frequency)  
   Eviction is based on a composite score: `score = hit_count / (current_time – last_access_time + 1)`.  
3. **AWS Stack** – Deployed the cache as an Amazon ElastiCache Redis cluster with *Redis 6*’s `LFU` eviction policy, exposing a small micro‑service layer on AWS Lambda to update hit counts atomically.  
4. **Cost & Scalability** – The hybrid policy reduces evictions by ~40 %, cutting Redis memory usage from 12 GB to 8 GB and lowering monthly spend from $1,200 to $800.

**Result**  
CTR recovered to +10 % over baseline within two weeks of rollout; cache hit rate rose from 68 % to 92 %. The solution is fully automated, scales horizontally with ElastiCache shards, and required no downtime.  

**Learning & Ownership** – I documented the trade‑off between complexity (maintaining counters) vs benefit, shared findings in a post‑mortem, and set up alerts for drift in access patterns so we can iterate quickly. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
