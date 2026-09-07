---
qid: ing_6d1ebbe335__aws__local
question: 'Explain: Implementation — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 447
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:32-05:00'
sources: []
---

**Situation / Task**  
I was hired as a Senior ML Engineer to reduce the cost of feature‑store lookups for our recommendation engine. The team needed a fast, memory‑efficient way to filter out non‑existent user IDs before hitting DynamoDB, which was causing 30 % of our query latency.

**Action**  
I introduced **Bloom Filters** as an in‑memory cache. I designed the filter to be rebuilt nightly from the master ID set stored in S3 (10 M IDs). The filter parameters were tuned for a false‑positive rate <0.1 %. I deployed the service on an **AWS Lambda** layer, triggered by an **EventBridge** rule each night, and published the Bloom bitmap to an **Amazon ElastiCache Redis** cluster with read replicas for high availability.  

During query time, our inference microservice first queries Redis; if the key is absent (definitely not in the set), we skip DynamoDB entirely. If present, we perform a quick lookup. This added only 1 µs latency per request.

**Result**  
After rollout, **query latency dropped from 120 ms to 95 ms** (≈ 21 % improvement) and **DynamoDB read capacity units saved by 40 %**, translating to ~$3k/month in savings. The system remained cost‑effective because the Bloom filter is a single byte per key (~10 MB total), keeping Redis memory usage low.

**Reflection**  
- *Ownership*: I drove end‑to‑end design, from metrics gathering to production rollout.  
- *Dive Deep*: I benchmarked false‑positive rates and tuned hash functions for optimal trade‑offs.  
- *Learning*: Initial attempts with a local cache caused stale data; moving to Redis ensured consistency across pods.  

This experience reinforced my belief that **Customer Obsession** (reducing latency) + **Bias for Action** (rapid prototyping) leads to measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
