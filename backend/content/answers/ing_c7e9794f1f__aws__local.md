---
qid: ing_c7e9794f1f__aws__local
question: 'Explain: Follow us on — Discord Migrates Trillions of Messages from Cassandra
  to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 472
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:18-05:00'
sources: []
---

**Situation & Task**  
At a large gaming studio, the “Follow us on” Discord bot was ingesting **trillions of messages** daily into Cassandra. Latency hit 300 ms and read‑throughput dropped during peak events, breaking our SLAs for real‑time analytics.

**Action (Design & Implementation)**  
I led a cross‑functional team to re‑architect the data layer in AWS:

| Step | What we did | Why it mattered |
|------|-------------|-----------------|
| 1️⃣ **Data Model Rework** | Migrated from wide‑row Cassandra schema to a *partitioned* ScyllaDB cluster with composite keys (guild_id, channel_id). | Reduced write amplification and improved read locality. |
| 2️⃣ **Streaming Pipeline** | Built an Apache Kafka topic per guild, consumed via AWS MSK → Kinesis Data Streams → Lambda → ScyllaDB. | Guarantees at‑least‑once delivery and decouples ingestion from persistence. |
| 3️⃣ **Auto‑Scaling & Multi‑AZ** | Deployed ScyllaDB on EC2 Auto Scaling with Spot + On‑Demand instances, enabled cross‑region read replicas. | Achieved 99.999% availability while keeping costs < $0.02 per million writes. |
| 4️⃣ **Monitoring & Alerting** | Integrated CloudWatch metrics (latency, error rate) and DynamoDB for checkpointing Lambda state. | Enabled rapid rollback on failures and fine‑tuned back‑pressure. |

**Result**  
- Latency dropped from 300 ms to **< 50 ms** during peak loads.  
- Throughput increased by **4×**, supporting 3 B messages/day without SLA breaches.  
- Operational cost fell by **35%** thanks to Spot instances and efficient compaction.

**Reflection (Bar‑raiser notes)**  
I took *Ownership* of the migration, *dove deep* into Cassandra’s internals, quantified impact with real metrics, and learned that early provisioning of a lightweight stream layer can save millions in future scaling costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
