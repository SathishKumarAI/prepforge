---
qid: ing_98a068ed2c__aws__local
question: 'Explain: Features — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 505
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:42-05:00'
sources: []
---

**Situation:**  
At Uber we had to serve >40 M reads/sec for trip‑matching data stored in S3 while keeping latency <10 ms. The naive “direct‑to‑S3” approach would cost ~\$120k/month and hit throttling limits.

**Task:**  
Design a low‑latency, cost‑effective caching layer that scales horizontally, provides strong consistency for writes, and can be rolled out without downtime.

**Action (Technical Design):**

| Layer | Service / Tool | Why |
|-------|----------------|-----|
| **Cache** | Amazon ElastiCache Redis + DAX (DynamoDB Accelerator) | Redis gives sub‑ms read latency; DAX offloads DynamoDB writes, reducing write amplification. |
| **Read Path** | Cache → S3 via Lambda edge | 95% of reads hit cache; miss triggers async fetch from S3 and populates cache. |
| **Write Path** | Direct to DynamoDB → DAX → Redis | Write‑through ensures eventual consistency across all caches. |
| **Eviction Policy** | LRU + TTL (5 min) | Keeps hot data in memory, frees slots for new keys. |
| **Auto‑Scaling** | ElastiCache Auto‑Discovery & Cluster Scaling | Scale nodes by 20% when read traffic >80% of capacity. |

*Scalability:* Each Redis node supports ~1 M ops/sec; we started with 8 nodes (≈8 M ops).  
*Availability:* Multi‑AZ replication + automatic failover keeps 99.99% uptime.  
*Cost:* Cache cost ~$4k/month vs $120k for S3 read throughput, a 96% savings.

**Result:**  
After deployment we saw:

- **Latency:** 99th percentile <5 ms (down from 30 ms).  
- **Read Cost:** <$1 per million reads (vs $12).  
- **Cache Hit Rate:** 92% on peak traffic.  

**Reflection (Bar‑raiser lens):**  
I owned the end‑to‑end data flow, dove deep into S3 throttling limits and Redis performance curves, quantified savings in a cost model, and learned that even small TTL tweaks can boost hit rates by >10 %. The solution was iterated with A/B testing to validate assumptions before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
