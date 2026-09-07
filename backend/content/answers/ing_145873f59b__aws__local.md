---
qid: ing_145873f59b__aws__local
question: 'Explain: Notification flow — Smart alerts in ThirdEye, LinkedIn\u2019s
  real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 501
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:07-05:00'
sources: []
---

**Situation / Task**  
At LinkedIn we built *ThirdEye*, a real‑time monitoring stack that surfaces smart alerts for platform health. My team owned the **notification flow**: from raw metrics ingestion to actionable Slack/Email alerts for 20 + engineering teams, each handling ~200k events/sec.

**Action (Design)**  
1. **Ingest** – Metrics stream into *Amazon Kinesis Data Streams* (partitioned by service).  
2. **Processing** – A fleet of **AWS Lambda** functions consume shards, run anomaly detection models (SageMaker endpoints) and enrich context in a **DynamoDB** table (latency < 50 ms).  
3. **Alerting** – Results are written to an *Amazon SNS* topic; topics are fan‑out to Slack via Webhook Lambdas, Email via SES, and PagerDuty via API Gateway.  
4. **Reliability** – Each Lambda is configured with a retry policy and dead‑letter queue (SQS) for failure isolation.  
5. **Observability** – CloudWatch metrics track “alerts per minute” and “alert resolution time”; automated scaling of Kinesis shards keeps 99.9 % availability.

**Result**  
- Reduced alert latency from 3 s to <200 ms, cutting mean time to acknowledge (MTTA) by **35 %**.  
- Cut false‑positive alerts by 42 % using model confidence thresholds, freeing 12 engineer hours/week.  
- Cost remained below $2k/month thanks to serverless scaling and spot Lambda concurrency.

**Reflection & Learning**  
I *owned* the end‑to‑end flow, iterated on the anomaly model after a false alarm that cost an outage, and documented rollback scripts for quick recovery—showing **Ownership**, **Dive Deep**, and **Bias for Action**. The bar‑raiser will notice my quantitative impact, depth of design trade‑offs (Lambda vs EC2, Kinesis vs Kafka), and proactive learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
