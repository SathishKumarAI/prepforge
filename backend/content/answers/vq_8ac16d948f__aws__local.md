---
qid: vq_8ac16d948f__aws__local
question: What are the different events in Triggers ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 481
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:14-05:00'
sources: []
---

**S – Situation & Task**  
At my previous role I led a migration of an event‑driven microservice from on‑prem to **AWS EventBridge**. The system had to handle three types of events—*OrderCreated*, *PaymentSucceeded*, and *InventoryUpdated*—and trigger downstream services in real time while guaranteeing at least once delivery.

**T – Technical Requirements**  
1. **Event Schema & Versioning** – JSON schema with mandatory `eventType`, `timestamp`, and `payload`.  
2. **Filtering & Routing** – Each event type must reach a dedicated Lambda consumer.  
3. **Scalability** – Support up to 20 k events/second during flash sales.  
4. **Cost Efficiency** – Minimize cold‑start latency for the most frequent *OrderCreated* events.

**A – Action & Design**  
- Created an **EventBridge bus** with three rules (`order-created`, `payment-succeeded`, `inventory-updated`) using `detail-type` filtering.  
- Leveraged **AWS Lambda** (provisioned concurrency for *OrderCreated*) and **SQS** dead‑letter queues for retries.  
- Implemented **CloudWatch Metrics** to capture delivery latency; set alarms at 95th percentile >200 ms.  
- Used **DynamoDB Streams** as an alternative trigger for idempotent processing, reducing EventBridge cost by ~15%.  

**R – Result & Learnings**  
- Reduced event‑to‑consumer latency from 350 ms to <120 ms (70% improvement).  
- Cut operational costs by $3.2k/month through DynamoDB Streams and provisioned concurrency tuning.  
- Earned a **customer‑centric** reputation: post‑migration satisfaction scores rose from 4.1/5 to 4.8/5 as the checkout flow became instant.

> **Leadership Principles**  
> *Customer Obsession* – Delivered faster, more reliable order processing for end users.  
> *Ownership & Dive Deep* – Owns event schema, tuning, and cost‑optimization; deep dive into CloudWatch metrics drove actionable changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
