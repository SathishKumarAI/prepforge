---
qid: ing_27d86a157d__aws__local
question: 'Explain: Key Features of Redis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 510
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:52-05:00'
sources: []
---

**Situation & Task**

When I joined a fintech startup in 2022, we had to build a real‑time fraud‑detection engine that scored every transaction within milliseconds. The team chose **Redis** as our in‑memory datastore because of its speed and flexibility.

**Action – Key Features & Design**

| Feature | Why it mattered | AWS services used |
|---------|-----------------|-------------------|
| **Data structures (hashes, sorted sets, bitmaps)** | Allowed us to store per‑user counters, sliding windows, and binary flags in a single keyspace. | Amazon ElastiCache for Redis (cluster mode) |
| **Pub/Sub & Streams** | Enabled event‑driven scoring: each transaction published a message that workers consumed in parallel. | AWS Lambda + SQS integration |
| **Persistence (RDB/AOF)** | Guaranteed durability of critical fraud rules even after node restarts, without sacrificing latency. | ElastiCache persistence settings |
| **Lua scripting** | Performed atomic updates on counters and bitmaps, eliminating race conditions in high‑concurrency scenarios. | Built into Redis cluster |
| **Eviction policies (ALLKEYS-LRU)** | Managed memory footprint automatically, ensuring that stale data never bloated the cache. | Configured via ElastiCache parameters |

I architected a **cluster‑mode** deployment with read replicas for scaling read traffic, and leveraged **Auto Scaling** to add shards during peak hours. Cost was kept in check by sizing nodes based on real usage metrics (average 1 GB RAM per shard) and terminating idle replicas overnight.

**Result**

- Reduced transaction latency from **250 ms** to **12 ms** (+95% improvement).  
- Achieved **99.99% availability** over a 6‑month period, with zero data loss during node failures.  
- Cut operational cost by **18%** compared to a pure DynamoDB implementation.

**Learning**

I discovered that blindly scaling nodes without considering eviction policies led to memory thrashing; after adding LRU and fine‑tuning the `maxmemory-policy`, performance stabilized.

---

> **Leadership Principles Highlighted**  
> *Customer Obsession* – delivering sub‑10 ms latency directly improved user experience.  
> *Dive Deep & Ownership* – I owned the end‑to‑end design, from data modeling to cost optimization, and iterated based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
