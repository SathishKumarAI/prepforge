---
qid: ing_9c198b2e2b__star__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 441
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:14-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s data platform team, our real‑time trip feed was hitting the online storage layer with a burst of over 40 million read requests per second during peak hours. The latency on the database alone was 30–40 ms, which meant we were missing key SLA windows for ETA updates and surge pricing.

**Task:**  
I was tasked to reduce end‑to‑end read latency by at least 50% while keeping cost under budget, without compromising data freshness or reliability.

**Action:**  
I led the design of an integrated cache tier that lived in front of our Cassandra cluster. First, I profiled traffic and identified hot keys (e.g., driver locations, surge zones) using Apache Flink. Then I chose Redis‑Cluster for its low‑latency key/value store, configuring it with a write‑through policy to keep the cache consistent. We added a background Kafka consumer that watched the change stream from Cassandra and invalidated or refreshed relevant keys on the fly. To control memory usage, we applied LFU eviction with per‑region TTLs (5 seconds for location updates, 30 minutes for static metadata). Finally, I rewrote the read path in Go to route through a lightweight gRPC proxy that automatically fell back to Cassandra if cache misses exceeded 2%.

**Result:**  
The integrated cache cut average read latency from 35 ms to 12 ms—an 65% improvement—and handled the full 40 M reads/s load with only 15 GB of RAM per node. This allowed Uber’s surge pricing engine to run in real time and increased overall system reliability, while we kept infrastructure costs down by 20%. I learned how careful key‑sharding, real‑time invalidation, and a balanced trade‑off between cache size and TTL can turn an over‑taxed storage layer into a lightning‑fast service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
