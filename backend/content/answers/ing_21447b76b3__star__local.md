---
qid: ing_21447b76b3__star__local
question: 'Explain: Caching — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:10-05:00'
sources: []
---

**Situation:**  
I was leading the redesign of our recommendation engine at a mid‑size e‑commerce platform. The model served predictions for ~4 M users per day, but latency had crept up to 350 ms after we added a new personalization layer. Users started seeing slower page loads, and A/B tests showed a 12% drop in click‑through rate.

**Task:**  
I needed to cut inference latency by at least 40 % without increasing GPU usage or compromising model accuracy. The goal was to keep the system cost‑effective while handling peak traffic spikes of up to 20 k requests per second.

**Action:**  
I introduced a multi‑tier caching strategy. First, I added an in‑memory LRU cache (Redis) for the top 1 % of high‑traffic user profiles, storing pre‑computed embedding vectors and model outputs. Second, I implemented a disk‑based write‑through cache using RocksDB to hold the next 5 % of users, keyed by hashed session IDs, reducing repeated GPU inference. Finally, I added an asynchronous “cold start” worker that pre‑populated these caches during off‑peak hours based on forecasted traffic patterns. I tuned cache eviction policies with real‑time monitoring in Grafana and adjusted the hit ratio thresholds to balance memory usage.

**Result:**  
Latency dropped from 350 ms to 190 ms, a 45% improvement, while GPU utilization fell by 25%. The click‑through rate rebounded to its pre‑degradation level, and we saved roughly $3k/month in cloud compute costs. I learned that thoughtful cache layering—combining fast in‑memory storage with durable on‑disk backups—can dramatically accelerate ML inference pipelines without sacrificing accuracy or scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
