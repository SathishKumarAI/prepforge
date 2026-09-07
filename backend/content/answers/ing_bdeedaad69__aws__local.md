---
qid: ing_bdeedaad69__aws__local
question: 'Explain: In Memory Database - Redis — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 608
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:44-05:00'
sources: []
---

**Situation & Task**

When I joined a fintech startup, our credit‑risk engine had to score 2 M loan applications per day with <10 ms latency. The existing relational stack (PostgreSQL + in‑memory cache) hit CPU limits and incurred >$1k/day in read amplification. My goal: replace the slow, costly tier with an **in‑memory database** that could serve real‑time ML predictions at scale.

**Action**

I scoped requirements:

| Requirement | Why it mattered |
|-------------|-----------------|
| **Sub‑10 ms latency** | API SLA for mobile app |
| **≥2 M reads/sec** | Daily throughput |
| **High availability (≤0.1% downtime)** | Financial regulation |
| **Cost ≤$500/month** | Budget constraint |

I chose **Amazon ElastiCache for Redis** because it delivers sub‑millisecond read latency, supports clustering, and integrates natively with IAM/Security Groups.

Design steps:

1. **Data model** – Key: `loan:{app_id}` → Hash of feature vector (float32).  
2. **Cluster topology** – 3 shards, each with 2 replicas (primary + replica) to satisfy durability & read‑scaling.  
3. **Cache warming** – Use Kinesis Data Streams to push new predictions into Redis as they’re computed by the GPU cluster; this keeps cache warm without polling.  
4. **Eviction policy** – `volatile-lru` with TTL of 24 h to keep only recent scores, preventing stale data from inflating memory.  

**Result**

- Read latency dropped from **35 ms → 8 ms** (Δ 27 ms).  
- Throughput scaled to **3.5 M reads/sec** without CPU throttling.  
- Monthly cost reduced from **$1,200 → $420** (≈ 65 % savings).  
- SLA compliance improved: uptime 99.998 % vs 99.92 %.

**Reflection & Learning**

I initially underestimated the memory footprint of float32 vectors and overshot the node size by ~30 %. A quick “dive deep” into `INFO MEMORY` stats revealed hidden overhead; I re‑engineered the serialization to `msgpack`, cutting memory usage by 18 % and eliminating the over‑provisioning cost.

---

**Leadership Principles**

- **Ownership:** Took full responsibility for end‑to‑end performance, from profiling to deployment.  
- **Dive Deep:** Used Redis diagnostics to identify hidden overhead; iterated on data encoding.  
- **Bias for Action:** Deployed a prototype in 48 h and rolled out cluster changes within the same sprint.  

This solution showcases how a focused system design, anchored in AWS services, can deliver measurable business impact while staying true to Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
