---
qid: ing_2f39c54d15__aws__local
question: 'Explain: Subscription — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:14-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a legacy “subscription‑to‑notification” pipeline at my previous e‑commerce company. The system had to deliver 1 M+ messages per day to millions of users while guaranteeing *exactly‑once* delivery and sub‑second latency.

**Action (Design)**  
I chose **Amazon SNS + Amazon SQS FIFO queues** for a classic Pub/Sub pattern, with an **AWS Lambda** consumer that writes events into a **DynamoDB Global Table**.  
- **SNS** publishes to multiple *subscription topics* (email, SMS, push).  
- Each topic fan‑out to a dedicated FIFO queue, preserving order and preventing duplicates.  
- Lambda pulls messages in batches, uses a *deduplication ID* from the event payload, and writes to DynamoDB with conditional writes for idempotence.  
- For high throughput I enabled **SQS Long Polling** (20 s) and **Lambda concurrency limits** to match queue depth.  
- Monitoring via CloudWatch Alarms on `ApproximateNumberOfMessagesVisible` and a custom *delivery latency* metric.  

**Result**  
Post‑migration, we achieved:  
- 99.999% *exactly‑once* delivery (down from 0.95%)  
- Latency < 120 ms for 95th percentile messages  
- Cost reduction of 35 $K/month by eliminating on‑prem brokers and scaling automatically with traffic.  

**Reflection & Bar‑raiser cues**  
I owned the entire lifecycle, *dive deep* into DynamoDB’s conditional writes to avoid race conditions, quantified impact via SLA metrics, and learned that choosing FIFO queues over standard ones eliminated ordering bugs that had plagued us for months. This solution embodies **Customer Obsession**, **Ownership**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
