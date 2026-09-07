---
qid: ing_f2db1ff68a__aws__local
question: 'Explain: Key Parts — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 500
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:50-05:00'
sources: []
---

**Situation – Task**  
At my previous role I built a recommendation pipeline that served 2 M users daily. The model inference latency was the biggest blocker; we needed sub‑200 ms responses to keep engagement above 70 %.  

**Action – Design**  
I introduced a multi‑tier cache strategy:  

| Tier | Service | Use case | Cost & Scale |
|------|---------|----------|--------------|
| **1️⃣ In‑memory (Redis)** | Amazon ElastiCache for Redis | Store the top 10 k most‑requested item vectors; TTL 30 s. | 0.5 GB * 2 nodes ≈ $70/mo, 99.9 % availability. |
| **2️⃣ Edge cache** | CloudFront + Lambda@Edge | Pre‑serialize model output for static user segments; warm on first hit. | Global edge cost ~ $0.05/1M requests. |
| **3️⃣ Persistent store** | S3 + Athena | Full item catalog and cold data. | $23/GB/month, query via Athena for cache misses. |

The pipeline follows: request → Redis lookup → CloudFront (if miss) → SageMaker endpoint → write back to Redis. I added a *Cache‑Aside* policy that writes back only when the model score changes >5 %.  

**Result – Impact**  
- Latency dropped from 350 ms to **120 ms** (35 % improvement).  
- Hit rate rose from 48 % to **92 %**, cutting SageMaker invocations by **68 %** and saving ~$18k/yr.  
- A/B test showed a **3 % lift in click‑through** attributed to faster responses.

**Reflection – Learning**  
I initially over‑provisioned Redis (1 TB) which inflated costs; after profiling traffic I re‑balanced TTLs, achieving the same performance with 40 % fewer resources.  

> *Leadership Principles:* **Customer Obsession** – delivering instant recommendations; **Ownership & Dive Deep** – iteratively tuning cache tiers based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
