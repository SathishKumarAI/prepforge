---
qid: ing_6e3d515f49__aws__local
question: 'Explain: Core capabilities — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 482
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:13-05:00'
sources: []
---

**Situation / Task**

When my team built a real‑time fraud‑detection pipeline for a payment processor, we needed a messaging layer that could ingest millions of events per second, guarantee ordering within partitions, and support replayability for model training. I chose **Apache Kafka** as the core capability.

**Action**

I designed a multi‑cluster Kafka deployment on AWS:

| Requirement | Design Choice | AWS Service |
|-------------|---------------|------------|
| High throughput (≥ 5 M events/s) | Partitioned topic with 200 partitions, auto‑scaling Kinesis Data Streams → Kafka Connect | Amazon MSK |
| Low latency (< 50 ms) | Dedicated broker fleet in a single AZ, use of broker rack awareness and compression | Amazon EC2 Spot + EBS Provisioned IOPS |
| Fault tolerance & durability | Replication factor 3, cross‑region mirroring via MirrorMaker | Amazon MSK + S3 for log compaction |
| Replayability for model retraining | Compacting topics, consumer offsets stored in Kafka | Amazon MSK |

I also implemented a **Kafka Streams** application that aggregates transactions per customer and writes enriched records to an Aurora Serverless DB. The pipeline was monitored with CloudWatch metrics (latency, dropped messages) and Grafana dashboards.

**Result**

- Throughput grew from 1 M → 5 M events/s without SLA impact.  
- Latency stayed below 45 ms for 99th percentile traffic bursts.  
- Cost per message fell by **27 %** after moving to Spot instances, while still meeting availability SLAs (99.9%).  

**Learning**

I realized that early‑stage Kafka clusters often over‑provisioned brokers; by monitoring `kafka.server.BrokerTopicMetrics` I could right‑size the fleet and avoid wasted capacity—an ownership lesson that saved us ~$120K annually.

---

> **Leadership Principles Highlighted:**  
> *Customer Obsession* – delivering a low‑latency, highly available pipeline directly benefits end‑users.  
> *Dive Deep* – dissecting broker metrics and partition sizing to optimize performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
