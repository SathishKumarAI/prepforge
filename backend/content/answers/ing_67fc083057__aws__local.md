---
qid: ing_67fc083057__aws__local
question: 'Explain: 5.4 Monitoring and Logging — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 522
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:37-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of our event‑driven notification service that pushed marketing emails and SMS to 4 M users daily. The legacy system failed to surface latency spikes, leading to a 12 % increase in abandoned carts during peak traffic.

**Action**  
I architected a **serverless, fully observable stack**:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingestion | **Amazon EventBridge** + **Kinesis Data Streams** | Guarantees ordering and replay; scales to 10 k events/s. |
| Processing | **AWS Lambda** (Python) | Auto‑scales, zero ops, cost‑effective for bursty traffic. |
| Storage | **DynamoDB** (partition key: userID + timestamp) | Low‑latency writes/reads, auto‑scaled throughput. |
| Monitoring | **Amazon CloudWatch Metrics & Logs**, **X-Ray**, **S3 Archive** | Real‑time dashboards and traceability; cost‑effective long‑term storage. |
| Alerting | **SNS** + **CloudWatch Alarms** (latency > 200 ms, error rate > 0.5%) | Immediate ops notification; auto‑scales with traffic. |

I added **custom CloudWatch metrics** (`notification_latency`, `delivery_success_rate`) and a **real‑time Grafana dashboard** fed by CloudWatch Insights. To reduce false positives I implemented an **anomaly detection Lambda** that learns normal latency patterns.

**Result**  
Within 3 months:

* Latency‑related cart abandonment dropped from 12 % to <1 %.  
* Mean delivery latency improved from 450 ms to 80 ms (5×).  
* Operational cost decreased by 35 % thanks to Lambda’s pay‑per‑execution model.  

**Learning & Ownership**  
I owned the end‑to‑end observability pipeline, iterating on metrics after each sprint. A failure in a downstream microservice taught me to add *fallback queues* and circuit breakers—an example of bias for action and ownership.

> **Leadership Principles:** Customer Obsession (improved user experience), Ownership (full responsibility for system health), Dive Deep (metrics‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
