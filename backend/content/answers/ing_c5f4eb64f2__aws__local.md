---
qid: ing_c5f4eb64f2__aws__local
question: 'Explain: Stage 3: Add Caching (100K-500K users) — Scalability | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 418
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:41-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of a real‑time recommendation engine that had already served ~80 K users daily (Stage 2). Our latency SLA was <50 ms, but the inference model was hitting EC2 limits and cost ballooned to $12k/month. The goal for Stage 3 was to add caching for 100–500 K concurrent users while keeping costs under $8k/month.

**Action**  
* **Ownership & Dive Deep** – I first profiled the API: ~90 % of requests hit a few top‑10 items.  
* Built a **Redis‑based cache** in Amazon ElastiCache (cluster mode with 2 shards, 4 GiB per node).  
* Deployed a **Lambda@Edge function** behind CloudFront to hit Redis first; on miss it invoked the SageMaker endpoint (warm pool of 4 instances).  
* Added an **SNS topic** that publishes new model artifacts; a Lambda subscriber invalidates affected cache keys.  
* Enabled **Auto Scaling** for ElastiCache and Lambda concurrency, ensuring 99.9 % availability.

**Result**  
Latency dropped from 120 ms to 35 ms (‑70 %). Cache hit ratio climbed to 92 %, cutting SageMaker invocations by 78 %. Monthly spend fell to $6.5k while user capacity grew to 500 K concurrent users—an **80 % increase in scale** with a **40 % cost reduction**.

**Learning & Bar‑raiser cues**  
I validated assumptions through A/B tests, documented cache eviction policies, and iterated on shard sizing based on real traffic. The team now uses this pattern for all downstream ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
