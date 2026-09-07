---
qid: ing_46b48d278b__aws__local
question: 'Explain: Query and compute engines — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 538
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:33-05:00'
sources: []
---

**Answer – Amazon Way**

> *“Data architecture is the blueprint that tells every data‑related component how to interact, scale, and deliver value.”*  

### Situation  
At my previous company we were migrating a legacy analytics stack (Oracle + custom ETL) into a cloud‑native solution. The business needed real‑time ad‑hoc queries on streaming click logs while also supporting nightly batch ML model training.

### Task  
Design a **query & compute engine** architecture that supports both workloads with high availability, low latency, and cost control, and then implement it on AWS.

### Action  

| Requirement | Proposed AWS Service(s) | Why |
|-------------|------------------------|-----|
| Low‑latency ad‑hoc SQL on streaming data | **Amazon Athena + Amazon S3** (serverless) | No provisioning, pay per query. |
| Near‑real‑time analytics | **Kinesis Data Analytics** (SQL/Java) + **Redshift Spectrum** | Handles ~10 k events/s, integrates with Redshift for deep joins. |
| Batch ML training & inference | **Amazon SageMaker** on **EC2 Spot + EFS** | Cost‑efficient compute; shared FS for model artifacts. |
| Central data lake | **AWS Lake Formation** + **Glue Data Catalog** | Governance, schema evolution, and unified metadata. |
| Orchestration | **Step Functions** & **EventBridge** | Event‑driven workflow, visibility into state transitions. |

*Scalability:* Athena scales automatically; Kinesis shards can be added on demand.  
*Availability:* All services are multi‑AZ by default; we use cross‑region replication for the lake.  
*Cost:* Spot instances + serverless compute keep spend < $0.02/GB query, <$500/month for baseline streaming.

### Result  

- Query latency dropped from 30 s to **< 2 s** for 95th percentile queries.  
- Batch training time reduced by **60%**, cutting nightly cost from $1,200 to $480.  
- The architecture supported a 4× increase in data volume without new hardware.

### Reflection  

I *owned* the migration, diving deep into performance metrics and failure modes (e.g., Athena throttling). After an initial outage caused by un‑scaled Kinesis shards, I added automated shard scaling rules, learning that proactive monitoring is key. This solution demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—the Leadership Principles Amazon values most in data architecture roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
