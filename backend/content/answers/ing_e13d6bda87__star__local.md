---
qid: ing_e13d6bda87__star__local
question: 'Explain: Conflict resolution — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 307
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:08-05:00'
sources: []
---

**Situation:** In my last role as a senior data engineer at a fintech startup, our fraud detection service had to process millions of transactions per day with near‑real‑time analytics. The database cluster was experiencing latency spikes during peak hours because writes were bottlenecking on the primary node.

**Task:** I needed to design a replication strategy that would keep the system highly available and consistent while ensuring query performance for our dashboards and alerting pipelines.

**Action:** I evaluated two replication models: synchronous multi‑master (using Galera Cluster) and asynchronous logical streaming (Debezium + Kafka). I chose an asynchronous approach because our use case allowed eventual consistency for analytics, but required strong durability for transactional writes. I set up logical decoding on PostgreSQL to stream WAL entries into Kafka topics, then consumed those streams with a Spark Structured Streaming job that updated a read‑optimized ClickHouse cluster. For critical audit logs, I kept synchronous replication to an Aurora MySQL secondary for immediate failover. I also added TTL policies and partitioning in ClickHouse to keep query latency below 200 ms.

**Result:** After deployment, write throughput increased by 70%, read latency dropped from 1.2 s to under 250 ms during peak loads, and we achieved 99.9% availability. The project taught me that choosing the right replication type depends on the tolerance for staleness versus consistency demands of each workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
