---
qid: ing_06ecbf0a7b__aws__local
question: 'Explain: Amazon SNS — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:40-05:00'
sources: []
---

**Amazon SNS – Event‑Driven Architecture**

*Leadership Principles:* **Customer Obsession & Ownership**

### Behavioral (STAR)

- **S**ituation: A retail app needed real‑time inventory updates across mobile, web, and fulfillment microservices.  
- **T**ask: Build a decoupled system that pushed stock changes instantly while keeping costs low.  
- **A**ction: I designed an SNS topic “InventoryChange” with two subscriptions – (1) an SQS queue for the fulfillment service, (2) a Lambda function to update the mobile push notification service. I added a dead‑letter queue and CloudWatch alarms for delivery failures.  
- **R**esult: Latency dropped from 3 s (polling API) to <200 ms on average; daily message volume hit 1.5 M with <$0.50/month cost. The system handled a traffic spike of 10× during a flash sale without any outage.

### Technical / System Design

| Component | Service | Rationale |
|-----------|---------|-----------|
| Event source | DynamoDB Streams (or Kinesis) | Captures inventory changes in real time |
| Pub/Sub | Amazon SNS topic “InventoryChange” | Scales to millions of messages, supports multiple protocols |
| Consumer queues | SQS FIFO for fulfillment (exactly‑once), standard for Lambda trigger | Guarantees ordering where needed; cost‑effective for high volume |
| Consumers | AWS Lambda & ECS Fargate | Serverless scaling, zero‑provisioning overhead |
| Monitoring | CloudWatch metrics + SNS topic notifications | Immediate visibility on delivery failures |

**Scalability:** SNS handles >10 M messages/second; SQS queues auto‑scale.  
**Availability:** 99.9% SLA; using multiple subscriptions isolates failure paths.  
**Cost:** Pay‑per‑message ($0.50 per million) + minimal Lambda invocations (~$0.20).  

*Bar‑raiser focus:* clear ownership of end‑to‑end flow, deep dive into latency trade‑offs (SQS FIFO vs standard), quantified impact on user experience, and lessons learned from a prior polling approach that caused stale data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
