---
qid: ing_59a80e8a75__aws__local
question: 'Explain: Explanation Caching — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 480
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:32-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a recommendation engine that served 1 M users daily. The latency on the “Why this item?” explanation API was 350 ms, causing a 12 % drop in click‑through rate (CTR). I owned the performance degradation and needed to reduce the response time below 80 ms without compromising accuracy.

**Action**  
I first *dive deep* into request traces: most of the cost came from recomputing explanation vectors on every hit. I designed a **hybrid cache**:

| Layer | Service | Rationale |
|-------|---------|-----------|
| In‑memory per shard | **Amazon ElastiCache Redis** (clustered, 256 GB) | Sub‑ms lookups for the most frequent explanations. |
| Persistent store | **DynamoDB Global Tables** | Durable fallback with <10 ms latency and multi‑region replication. |
| Compute | **AWS Lambda@Edge + SageMaker Runtime** | Generates new explanations on cache miss, keeping model updates in sync. |

The cache key was a hash of user ID + item ID + feature set version. I added a background job (Glue + Step Functions) to pre‑warm the Redis cache every 30 min for top 5 % of items.

**Result**  
Response time dropped from 350 ms to **65 ms** (≈ 80 % reduction). CTR increased by **4.2 pp** (from 6.1 % to 10.3 %), translating to an additional $1.8 M in monthly revenue. The solution cost only 12 % more than the baseline but delivered a measurable business impact.

**Reflection**  
I learned that *ownership* means iterating on both code and architecture, while *bias for action* requires rapid prototyping of caching layers. This bar‑raiser will look for clear ownership signals, deep metric analysis, and evidence of learning from failure—exactly what this story demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
