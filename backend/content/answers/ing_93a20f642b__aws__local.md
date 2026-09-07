---
qid: ing_93a20f642b__aws__local
question: 'Explain: How Webhooks Work — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 538
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:32-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team built a SaaS analytics platform that needed real‑time data ingestion from third‑party apps (e.g., Zapier, Shopify). The customers demanded sub‑second updates for dashboards and alerts.

*Task*: Design a webhook system that is highly available, scales to millions of events per day, and delivers each payload exactly once without over‑loading downstream services.

*Action*:  
1. **API Gateway + Lambda** – Front‑end receives POSTs; API Gateway throttles to 10 k rps, automatically scaling with traffic.  
2. **SQS FIFO queue** – Each event is pushed into a FIFO SQS queue (deduplication ID = event‑id). This guarantees order and idempotence.  
3. **Lambda consumer + DynamoDB** – A Lambda function polls the queue, writes to DynamoDB (`EventLog`) with status `PENDING`, then calls the destination URL. On success, it updates the record to `DELIVERED`. If a call fails (4xx/5xx), it retries via SQS’s built‑in exponential back‑off up to 14 days.  
4. **SNS + CloudWatch** – Unsuccessful deliveries after max attempts trigger SNS notifications and metrics in CloudWatch, feeding an Ops dashboard.  

*Result*: After launch, we handled > 15 M events/day with < 1 % delivery failure rate; latency from webhook receipt to status update averaged 300 ms. Cost was $0.50 per million events (API Gateway + Lambda), far below a dedicated EC2 solution.

**Dive Deep & Bias for Action**

I profiled the Lambda function, identified a bottleneck in JSON parsing, and switched to `cJSON` → 40 % faster. I also added a cache layer (ElastiCache Redis) for frequently accessed destination URLs, reducing outbound calls by 12 %. These tweaks were deployed in a rolling fashion, showing immediate ROI.

**Bar‑raiser takeaways**

- **Ownership**: I owned the end‑to‑end flow and continuous monitoring.  
- **Depth**: Detailed profiling led to concrete performance gains.  
- **Quantified impact**: Measured delivery success, latency, cost.  
- **Learning from failure**: Early pilot tests exposed race conditions; we resolved them by enforcing FIFO queues before production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
