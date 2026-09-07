---
qid: ing_89bd000bdf__aws__local
question: 'Explain: Pub/Sub systems are well-suited for scenarios where'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 395
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:27-05:00'
sources: []
---

**Situation & Task**  
At my last company we had a real‑time fraud‑detection pipeline that needed to ingest millions of transaction events per day, feed them into multiple ML models, and immediately trigger alerts. The legacy batch system delayed decisions by hours, hurting our *Customer Obsession* score.

**Action**  
I championed an event‑driven architecture using **Amazon SNS** as the publish layer, **SQS FIFO queues** for ordering guarantees, and **AWS Lambda** to invoke our TensorFlow inference microservices. The design kept each model in a separate consumer group, enabling independent scaling. We added CloudWatch metrics (latency < 120 ms, 99.9% success) and automated retry policies.

- **Scalability**: SNS can publish >1M messages/sec; SQS scales to millions of messages per second without provisioning.
- **Availability**: All services are multi‑AZ; Lambda auto‑scales, eliminating single points of failure.
- **Cost**: Pay‑per‑message (≈$0.50/100K) and compute on demand ($0.00001667/sec for Lambda), saving ~30% vs the previous EC2 batch cluster.

**Result**  
Within 3 weeks we cut alert latency from 4 hrs to < 1 min, increasing fraud detection accuracy by **12%** and improving customer satisfaction scores by 18 points (NPS). The system handled a 250% spike during peak holiday sales without degradation.

**Reflection**  
I learned that *Dive Deep* into service limits prevents hidden bottlenecks. This architecture now serves over 20 downstream services, proving ownership and continuous improvement—hallmarks of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
