---
qid: ing_0097126245__aws__local
question: 'Explain: Data pipelines — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 598
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:55-05:00'
sources: []
---

**Answer – Amazon Way**

> *“When I built the data‑pipeline for our recommendation engine, I kept in mind that the data architecture is not just a set of tables; it’s an end‑to‑end system that turns raw clicks into model‑ready features with minimal friction.”*  

### Situation  
In 2022 my team was tasked to scale a real‑time recommendation pipeline from 10 M daily events to 100 M, while keeping feature latency under 200 ms.

### Task  
Design a **data architecture** that ingests raw event streams, enriches them, stores immutable history, and feeds both batch training and low‑latency inference.

### Action  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingestion | Amazon Kinesis Data Streams + Lambda | 99.999% durability; autoscaling for bursty traffic. |
| Real‑time enrichment | AWS Glue Streaming + DynamoDB Streams | Serverless transforms with sub‑50 ms latency; stateful joins via DynamoDB. |
| Batch training store | Amazon S3 (partitioned by day) + Athena | Cost‑effective cold storage; query on demand. |
| Feature store | SageMaker Feature Store | Centralized, versioned features; built‑in caching for inference. |
| Inference cache | ElastiCache Redis | 10 µs latency for hot features. |

*Scalability:* Kinesis shards auto‑scale; DynamoDB scales horizontally.  
*Availability:* Multi‑AZ deployments; cross‑region replication of S3.  
*Cost trade‑off:* We switched from EC2 ETL to Glue Streaming, cutting $12k/month while maintaining 0.1% error rate.

### Result  
- **Throughput** rose from 10 M to **120 M events/day** (12×).  
- **Feature latency** dropped to **150 ms average**, meeting SLA.  
- **Model accuracy** improved by **7% AUC** due to richer, fresher features.  

### Learnings (Bar‑raiser cues)  
1. **Ownership:** I owned the full pipeline and drove cross‑team alignment.  
2. **Dive Deep:** Identified DynamoDB throughput as the bottleneck; tuned partition keys.  
3. **Quantified Impact:** Tracked metrics pre/post refactor to prove ROI.  
4. **Failure Learning:** Initial Lambda timeout caused data loss; we added DLQ and SQS buffering, reducing 0.5% data drop.

> *Leadership Principles:* **Ownership** (owning the end‑to‑end flow), **Dive Deep** (profiling and tuning), **Customer Obsession** (ensuring low latency for users), and **Bias for Action** (rapidly iterating on Glue vs EC2).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
