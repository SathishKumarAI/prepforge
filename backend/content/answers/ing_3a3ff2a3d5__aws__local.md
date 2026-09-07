---
qid: ing_3a3ff2a3d5__aws__local
question: 'Explain: Publishers — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 430
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:05-05:00'
sources: []
---

**Situation / Task**

At my previous company we had a monolithic publishing pipeline that blocked the editor’s workflow during nightly batch jobs. The engineering manager asked me to design a decoupled system so editors could publish content instantly while background analytics ran asynchronously.

**Action (Design)**  

I chose **Amazon SNS** as the publish‑subscribe broker and paired it with **SQS** for durable, at‑least‑once delivery.  
- **Publishers** (e.g., editor UI) send a JSON event to an SNS topic (`article.published`).  
- Multiple **subscribers** (microservices) receive the message via SQS queues:  
  * `indexing-service` → updates search index.  
  * `analytics-service` → logs metrics.  
  * `notification-service` → pushes push notifications.  

Using **AWS Lambda** to poll each queue keeps compute costs minimal and scales automatically with traffic. I added a dead‑letter queue for failure handling and CloudWatch metrics to monitor latency.

**Result**

- Publish latency dropped from ~12 s (batch) to <200 ms (real‑time).  
- Throughput increased 4× during peak hours without provisioning extra servers.  
- Cost per event fell by **35%** due to serverless consumption.

**Leadership Principles Highlighted**

- **Customer Obsession** – editors get instant feedback, improving workflow satisfaction.  
- **Ownership & Dive Deep** – I evaluated SNS vs EventBridge, chose the right trade‑offs, and built end‑to‑end observability.  

**Bar‑raiser Takeaway**

I own the full loop: from requirement scoping to monitoring, quantify impact (latency, cost), and iterate on failure patterns (DLQ replay). This showcases ownership, depth, and a data‑driven mindset expected in AWS roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
