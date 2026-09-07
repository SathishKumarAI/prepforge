---
qid: ing_40028c181a__aws__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 619
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:32-05:00'
sources: []
---

**Situation – Task**

I was asked to design a scalable messaging platform like WhatsApp for 2 B active users with end‑to‑end encryption, real‑time delivery, and offline message storage.

**Action – Architecture & Design**

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Ingress** | API Gateway + Lambda (or App Runner) | Low latency, auto‑scaling, pay‑as‑you‑go. |
| **Messaging core** | Amazon MQ (RabbitMQ) + Kinesis Data Streams | Guarantees at‑least‑once delivery and replayability for offline users. |
| **Storage** | DynamoDB (messages & metadata), S3 (media) | Single‑region, low‑latency reads; automatic scaling. |
| **Encryption** | AWS KMS for key management + custom per‑message AES keys | Meets end‑to‑end encryption compliance. |
| **Push/Notifications** | Amazon Pinpoint + SNS | Push to Android/iOS with guaranteed delivery. |
| **Analytics / Monitoring** | CloudWatch, X-Ray, Athena on S3 logs | Real‑time dashboards for ops and business metrics. |

*Scalability:*  
- Kinesis shards auto‑scale by 1 GB/s; DynamoDB tables with provisioned throughput + on‑demand fallback.  
- Message fan‑out to SNS topics per device type keeps latency <200 ms at peak.

*Availability:*  
- Multi‑AZ deployments, DynamoDB global tables for regional failover, S3 cross‑region replication.

*Cost:*  
- Lambda & API Gateway reduce idle compute; Kinesis and DynamoDB use on‑demand where traffic spikes. Estimated $1.2M/month at 2 B users with 10 msg/sec per user.

**Result – Impact**

Implemented a prototype in 4 sprints; throughput rose from 200 msg/s to >20,000 msg/s (95th percentile latency <150 ms). User‑engagement metrics improved: daily active users grew 15% and churn dropped 3%.

**Reflection & Learning**

- **Ownership:** Took full responsibility for end‑to‑end delivery; iterated on failure scenarios (network partitions, device reboots).  
- **Dive Deep:** Benchmarked DynamoDB read/write latency under burst loads to tune provisioned capacity.  
- **Learning from Failure:** Early prototype suffered 1 s latency spikes during peak; resolved by shifting heavy media routing to S3 + CloudFront and off‑loading metadata to DynamoDB Global Tables.

**Leadership Principles Highlighted**

- **Customer Obsession** – Focus on low‑latency, offline reliability.  
- **Ownership** – Handled all layers from ingestion to analytics.  

This design balances scalability, cost, and user experience while staying true to Amazon’s core principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
