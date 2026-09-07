---
qid: ing_9625ffd231__aws__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 581
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:18-05:00'
sources: []
---

**Question:** *Explain Event‑Driven Systems – System Design Interview*  

---

### **Situation / Task**
I was asked to design a real‑time fraud‑detection pipeline for a payment platform that processes ~10 M transactions/day. The goal: flag suspicious activity within 1 s, trigger alerts, and feed data into downstream analytics.

### **Action (Design)**
| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **Ingest** | Amazon Kinesis Data Streams | Low‑latency, auto‑scaling ingestion; partitions by account ID. |
| **Processing** | AWS Lambda + Step Functions | Event‑driven microservices (score, enrichment, risk model). Lambda scales to 10 k concurrent invocations; Step Functions orchestrate multi‑step workflows with retries. |
| **Model Inference** | Amazon SageMaker Endpoint (scikit‑learn) | Real‑time inference; endpoint autoscaled via GPU/CPU based on traffic. |
| **Alerting** | SNS + EventBridge → Lambda → DynamoDB | Immediate notifications; EventBridge routes to analytics consumers. |
| **Analytics** | Kinesis Data Firehose → S3 → Athena | Batch querying for trend analysis without affecting real‑time latency. |

*Scalability:* Each component scales independently—Kinesis shards grow with traffic, Lambda concurrency auto‑scales, and SageMaker endpoints use *Auto Scaling*.  
*Availability:* Multi‑AZ deployment; Kinesis and Step Functions provide built‑in retry/backoff; we enable **Provisioned Concurrency** for critical Lambdas.  
*Cost:* Serverless model eliminates idle capacity; using *On-Demand* for Lambda and *Spot Instances* for SageMaker reduces spend by ~30 %.  

### **Result (Data)**
- Latency: 0.8 s average from ingestion to alert.  
- Throughput: 10 M tx/day with <1% error rate.  
- Cost savings: $12k/month vs. provisioned EC2 baseline.

### **Reflection (Learning)**
Initially, we underestimated Lambda cold‑start impact; adding Provisioned Concurrency cut alert delay from 3.5 s to 0.8 s. This taught me the importance of *Dive Deep* into performance metrics and *Bias for Action* in iterating quickly.

---

**Leadership Principles Highlighted:**  
- **Customer Obsession** – Deliver near‑real‑time fraud alerts to protect users.  
- **Ownership & Dive Deep** – Handled end‑to‑end latency, cost, and reliability independently.  

This design demonstrates ownership, technical depth, quantified impact, and a learning loop—key traits a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
