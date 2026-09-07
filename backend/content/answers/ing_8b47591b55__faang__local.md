---
qid: ing_8b47591b55__faang__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 493
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:55-05:00'
sources: []
---

**Clarify**  
The interview asks how Uber’s architecture evolved post‑2014 to persist trip data reliably and scale globally. I’ll assume we need a write‑through system that supports real‑time ride matching, high write throughput (≈10⁵ writes/s), low latency reads, and strong consistency for billing.

**Approach**  
1. **Event sourcing + CQRS** – capture every action as an immutable event stream.  
2. **Distributed commit log** – use Apache Kafka or AWS Kinesis to guarantee ordering and durability.  
3. **Append‑only storage** – write events to HDFS/Glacier for archival, then materialize projections in a fast key‑value store (Cassandra / DynamoDB).  
4. **Microservices per domain** – e.g., `RideService`, `PricingService`, each owning its own database shard.  
5. **Backup & disaster recovery** – nightly snapshots to S3 + cross‑region replication; use point‑in‑time restore.

**Depth**  
- Kafka partitions by driver ID → linear scalability and fault tolerance.  
- Each microservice writes to its own Cassandra cluster (10 kR/s, 99.999% availability).  
- Event processors run in parallel (Kafka Streams) to update read models in Redis for instant lookup.  
- Consistency: use eventual consistency for reads; strong consistency for billing via two‑phase commit across shards.

**Edge Cases**  
- Network partitions → fallback to local write cache, replay on reconnection.  
- Hot spots (peak surge zones) → dynamic re‑partitioning of Kafka topics and Cassandra token ranges.  
- Data loss during crash → ensure at‑least‑once semantics with idempotent writes.

**Optimize & Communicate**  
Explain trade‑offs: event sourcing gives auditability but adds latency; CQRS decouples reads/writes at cost of extra infrastructure. Highlight how this design supports Uber’s global scale, low latency, and compliance needs. Conclude by noting future migration to serverless (Kinesis + DynamoDB Streams) could reduce ops overhead while preserving the same data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
