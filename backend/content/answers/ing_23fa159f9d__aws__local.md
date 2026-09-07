---
qid: ing_23fa159f9d__aws__local
question: 'Explain: The Core Trade-offs — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 450
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:04-05:00'
sources: []
---

**Situation & Impact (Ownership & Deliver Results)**  
I led a team that built a recommendation engine for an e‑commerce platform serving > 1M concurrent users. We had to reduce latency from 250 ms to < 50 ms while keeping cost under $200k/month.

**Task & Strategy (Dive Deep & Bias for Action)**  
The bottleneck was the ML inference model (≈ 30 MB) served by a stateless Lambda behind API Gateway. I evaluated three caching layers:

| Layer | AWS Service | Cache Size | Avg Latency | Cost |
|-------|-------------|------------|-------------|------|
| 1️⃣ In‑memory (Redis) | ElastiCache Redis | 512 GB | 15 ms | $90k |
| 2️⃣ Edge (CDN) | CloudFront + Lambda@Edge | N/A | 12 ms | $25k |
| 3️⃣ Local (CPU cache) | Lambda‑layer + `/tmp` | 50 MB | 8 ms | $10k |

**Action & Result (Invent & Simplify)**  
I combined Edge + In‑memory: CloudFront cached the top 5K most‑requested model outputs; Redis stored the next 200K. This hybrid strategy cut average latency to **7 ms** and reduced Lambda invocations by **78 %**, saving **$120k/month** while keeping a single point of failure in the cache layer (Redis Sentinel for HA).

**Reflection & Learning (Customer Obsession)**  
Post‑deployment, we saw a 12 % lift in conversion rate. A failure on day‑3 revealed that the Redis eviction policy was too aggressive; we switched to `volatile-lru` and added a health‑check probe, eliminating cache misses by 95%. The experiment taught us that *caching is a trade‑off between freshness and speed*—a lesson we now embed in every ML rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
