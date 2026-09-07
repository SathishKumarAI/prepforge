---
qid: ing_57d6bda4fc__aws__local
question: 'Explain: Debezium and Kafka Example — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:22-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to stream real‑time account updates from our legacy MySQL DB into downstream analytics and fraud‑detection pipelines without locking the source system.

**Action**  
I chose **Debezium + Apache Kafka** because Debezium reads the MySQL binlog, turns each DML into an event, and publishes it to Kafka topics.  
*Architecture*:  
- **Amazon MSK (managed Kafka)** for durability & horizontal scaling.  
- **Debezium Connector on EC2** pulls from MySQL, writes to `accounts` topic.  
- **Kafka Streams** aggregates per‑customer balances; results go to an **S3 Data Lake** via Kinesis Firehose.  
*Scalability*: 10 TB/month of change data is split across 12 partitions; MSK auto‑scales based on consumer lag.  
*Availability*: Multi‑AZ MSK cluster with 3 broker nodes, 99.999% SLA; Debezium replicates binlog offset to Zookeeper for failover.  
*Cost*: $0.0001/MB/s ingestion + $0.01/GB S3 storage → ~$5k/month vs a 30‑node Kafka cluster.

**Result**  
Within two weeks the end‑to‑end pipeline was live; downstream services (fraud engine) saw **25% reduction in false positives** and **40 ms lower latency** on account balance queries.  

**Reflection**  
I *owned* the migration, *dove deep* into binlog semantics, and *biased for action* by prototyping Debezium first. The failure mode (connector lag) taught me to expose offsets in CloudWatch; now we auto‑restart connectors with a Lambda if lag > 5 min.

> **Leadership Principles**: Customer Obsession (fast, accurate data), Ownership (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
