---
qid: ing_86146c228f__aws__local
question: 'Explain: So what we will do is if — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:50-05:00'
sources: []
---

**Situation**  
I was asked to design a real‑time traffic prediction system for a ride‑hailing app, similar to the “Google Maps” use case. The goal: provide accurate ETA and dynamic pricing to 10 M daily active users while keeping latency <200 ms.

**Task**  
Build an ML pipeline that ingests live GPS streams, trains models on historical trips, and serves predictions with high availability and cost efficiency.

**Action**  

| Component | AWS Service(s) | Design Rationale |
|-----------|----------------|------------------|
| **Ingestion & Buffering** | Kinesis Data Streams + Lambda | Handles 1 M events/sec, auto‑scales, low latency. |
| **Feature Store** | DynamoDB Global Tables + S3 | Low‑latency read for real‑time inference; S3 for long‑term raw data (cost). |
| **Training** | SageMaker Pipelines + EC2 Spot + Hyperparameter Tuning | 48 h training window, spot instances cut cost by 60%. |
| **Inference** | SageMaker Endpoints on GPU + Elastic Inference | 200 ms SLA; Auto Scaling keeps 99.9% uptime. |
| **Model Registry & Governance** | SageMaker Model Registry + Glue Data Catalog | Ensures version control and auditability (Ownership). |

*Scalability*: Kinesis shards scale horizontally; Lambda concurrency auto‑scales with shard count.  
*Availability*: Multi‑AZ deployment, health checks, circuit breaker pattern.  
*Cost*: Spot usage + reserved instances for baseline, S3 lifecycle policies reduce storage spend.

**Result**  
After launch: **ETA error dropped from 12 s to 4 s (≈66% improvement)**; dynamic pricing accuracy improved by 18%, leading to a 5% lift in driver utilization and $2M/month incremental revenue. The system handled peak traffic without SLA violations, proving both scalability and reliability.

**Reflection**  
I initially underestimated the cold‑start latency of SageMaker endpoints; after adding warm‑up probes and increasing instance count by 30 %, we met the 200 ms target. This iteration taught me to *bias for action* while still diving deep into performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
