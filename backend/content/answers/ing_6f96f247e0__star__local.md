---
qid: ing_6f96f247e0__star__local
question: 'Explain: History - Built by Facebook — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:11-05:00'
sources: []
---

**Situation:**  
When I joined a startup that had just migrated its user‑profile service from a monolithic MySQL stack, we were facing daily latency spikes of up to 2 seconds during peak traffic.

**Task:**  
I was tasked with designing a new data layer that could handle millions of concurrent reads and writes while keeping the eventual consistency guarantees required for social feed updates.

**Action:**  
I chose Apache Cassandra because it originated at Facebook as an internal project to solve similar scalability problems. I set up a 6‑node cluster on AWS, using the CQL driver and the DataStax Java driver. I designed a wide‑row schema with partition keys based on user ID, leveraged materialized views for reverse lookups, and tuned compaction strategies (SizeTiered) to balance write throughput and read latency. To avoid hot spots, I added time‑based token ranges and implemented a custom load balancer that monitored node metrics via Prometheus.

**Result:**  
Read latency dropped from 2 seconds to under 50 ms for 99th percentile traffic, while write throughput increased by 4×. The system handled 10 M daily requests with <1% error rate. I learned how Facebook’s pragmatic engineering—favoring scalability over strict ACID—shaped Cassandra’s design and how those trade‑offs translate into real‑world performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
