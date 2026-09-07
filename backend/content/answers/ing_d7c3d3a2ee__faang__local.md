---
qid: ing_d7c3d3a2ee__faang__local
question: 'Explain: Amazon Simple Notification Service endpoints and quotas'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 566
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:18-05:00'
sources: []
---

**Clarify**  
You’re asking how **Amazon SNS** handles *endpoints* (the destinations that receive messages) and the *quotas* that limit their use. I’ll assume you want a quick overview of supported endpoint types, the per‑account limits, and why those limits exist.

**Approach**  
1. List supported endpoint types (mobile push, SMS, email, HTTP/HTTPS, SQS, Lambda).  
2. Explain each type’s basic config (ARN, credentials).  
3. Summarize default quotas: topics, subscriptions, endpoints per topic, messages per second, SMS limits.  
4. Mention how to request quota increases via the AWS Support Center.  
5. Note the rationale behind the limits.

**Depth**  

| Endpoint | Typical Use | Key Config | Default Quota (per account) |
|----------|-------------|------------|-----------------------------|
| **Mobile Push** (APNs, FCM, etc.) | App notifications | `PlatformApplicationArn`, device token | 500 endpoints per platform application |
| **SMS** | Text alerts | Phone number, sender ID | 100 messages/sec, 10 000 SMS/month per region |
| **Email** | Email alerts | Email address | 20 000 subscriptions per topic |
| **HTTP/HTTPS** | Webhooks | URL + optional TLS cert | 5 000 subscriptions per topic |
| **SQS** | Fan‑out to queues | Queue ARN | 1 000 endpoints per topic |
| **Lambda** | Serverless triggers | Function ARN | 1 000 endpoints per topic |

*Topic & subscription limits*: 100 000 topics, 10 000 subscriptions per topic.  
*Message size*: 256 KB max.

Quotas are enforced to protect the service from abuse and to keep latency predictable. They can be raised through a *service limit increase* request; AWS reviews based on usage patterns and business need.

**Edge Cases**  
- Exceeding SMS limits triggers throttling or “message rejected” errors.  
- Subscribing the same endpoint twice creates duplicate deliveries.  
- HTTP endpoints with self‑signed certs may fail TLS handshake.

**Optimize & Communicate**  
When scaling, batch subscriptions and use SNS’s *Topic Policy* to restrict access instead of over‑creating topics. For high throughput, employ multiple topics or fan‑out via SQS + Lambda. Always monitor CloudWatch metrics (`NumberOfMessagesPublished`, `DeliveryAttempts`) to preempt quota breaches.

This structure keeps the answer concise yet comprehensive—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
