---
qid: ing_583a6dd788__star__local
question: 'Explain: Type of Data Store — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:55-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the analytics dashboard for a video‑streaming platform that had hit a traffic spike during a live event. The existing counter service, built on a single Redis instance, couldn’t keep up and started dropping increments, leading to inaccurate view counts.

**Task**  
I needed to build a highly available distributed counter system that could handle millions of concurrent updates per second while guaranteeing eventual consistency for the dashboard.

**Action**  
I chose a sharded **Apache Cassandra** cluster as the underlying store because it offers linear scalability and tunable consistency. I partitioned counters by user ID hash and used lightweight transactions (LWT) to guard against lost increments on hot keys. For high‑throughput bursts, I introduced an in‑memory **Hazelcast** cache layer that aggregates writes locally before flushing to Cassandra every 100 ms, reducing write amplification. I also implemented a background compaction job that merges duplicate counter entries and exposed a REST API for read latency under 50 ms.

**Result**  
The new system handled 4× the peak traffic without any data loss, bringing view count accuracy from 92% to 99.9%. Latency dropped from 200 ms to 45 ms on average, and operational cost decreased by 18% thanks to efficient scaling. I learned that choosing a NoSQL store with tunable consistency and layering an in‑memory cache can dramatically improve both reliability and performance for distributed counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
