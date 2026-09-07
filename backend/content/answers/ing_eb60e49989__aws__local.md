---
qid: ing_eb60e49989__aws__local
question: So how can I save money? — Uncovering Kafka\u2019s Hidden Infrastructure
  Costs
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:28-05:00'
sources: []
---

**Situation (S)**  
At my previous role we migrated a real‑time analytics pipeline from an on‑prem Kafka cluster to Amazon MSK. The “hidden” costs—idle brokers, over‑provisioned storage, and manual scaling—drifted our spend from $12 k/month to $18 k/month.

**Task (T)**  
Reduce infrastructure cost by 30% while keeping 99.9% throughput for 5M events/sec and zero data loss.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1 | **MSK with Serverless V2** | Eliminates idle brokers; autoscaling to 2–10 brokers based on CPU/latency. |
| 2 | **Kafka Connect + S3 Connector** | Offloads log compaction to S3, reducing storage on brokers by 60%. |
| 3 | **AWS Lambda for stream processing** | Pay‑per‑execution; no EC2 maintenance. |
| 4 | **Cost Explorer Alerts & Reserved Capacity** | Set thresholds at $16 k/month and lock in 1‑yr reserved capacity to shave 15% on broker cost. |

Implemented **Kafka Streams** with a custom `CommitPolicy` to batch offsets, cutting metadata traffic by 40%. Added a **CloudWatch alarm** that auto‑scales the consumer group when latency > 200 ms.

**Result (R)**  
- Cost dropped from $18 k to $12.4 k/month (32% savings).  
- Throughput maintained at 5.2 M events/sec; latency < 150 ms.  
- Zero data loss over 6 months, validated by a replicated test cluster.

**Leadership Principles**  
*Customer Obsession*: Ensured uninterrupted analytics for downstream teams.  
*Ownership & Dive Deep*: Identified hidden costs and engineered a serverless solution.  

Bar‑raiser looks for: ownership of the cost issue, deep dive into Kafka internals, quantifiable impact, and lessons learned—e.g., we later added a 5‑minute failover buffer after a rare broker outage to avoid data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
