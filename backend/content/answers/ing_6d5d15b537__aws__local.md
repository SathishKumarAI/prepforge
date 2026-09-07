---
qid: ing_6d5d15b537__aws__local
question: 'Explain: 3.2 AP: Availability + Partition Tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 411
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:58-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were rolling out a real‑time recommendation engine that fed 1 M active users per day. The business required **99.9 % availability** while also guaranteeing the *partition tolerance* promised by CAP, because the model was trained on a distributed Spark cluster and served via an API gateway.

**Action**  
I redesigned the pipeline around a **multi‑region, multi‑AZ architecture**:

| Layer | Service | Why |
|-------|---------|-----|
| Data ingestion | Amazon Kinesis + Lambda | Auto‑scales, guarantees at‑least‑once delivery even during network partitions. |
| Feature store | DynamoDB Global Tables (read replicas) | Provides strong consistency locally while replicating across regions for partition tolerance. |
| Model training | EMR on Spot + SageMaker Pipelines | Spot reduces cost by 35 %; SageMaker handles model versioning and A/B testing. |
| Serving | Amazon API Gateway + Lambda@Edge + CloudFront | Edge caching keeps latency <30 ms; fallback to nearest region if a partition isolates one zone. |
| Monitoring | CloudWatch + X-Ray | Auto‑scales alarms, tracing failures across regions. |

**Result**  
Post‑deployment, we achieved **99.97 % uptime** over 12 months and reduced model latency from 250 ms to 70 ms. When a regional outage occurred, traffic automatically routed to the healthy region with <2 s failover—demonstrating true partition tolerance.

**Learning**  
I learned that *availability* is not just about redundant servers; it’s about designing for graceful degradation and rapid recovery. The key insight: **partition tolerance must be baked into data replication strategy, not added later as an afterthought.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
