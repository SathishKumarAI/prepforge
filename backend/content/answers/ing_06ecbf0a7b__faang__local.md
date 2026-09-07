---
qid: ing_06ecbf0a7b__faang__local
question: 'Explain: Amazon SNS — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 465
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:25-05:00'
sources: []
---

**Clarify**

> *Explain how Amazon Simple Notification Service (SNS) fits into an event‑driven architecture.*  
Assumptions to confirm:  
1. Audience knows basic AWS services.  
2. Focus is on SNS as a pub/sub broker rather than deep messaging protocols.

---

**Approach**

1. Describe the core pattern of event‑driven systems.  
2. Map SNS components (topics, subscriptions, publishers).  
3. Show data flow and decoupling benefits.  
4. Mention key integration points (Lambda, SQS, HTTP endpoints).  

---

**Depth**

Amazon SNS is a fully managed pub/sub service that emits **events** to multiple **subscribers** simultaneously.  
- **Publisher → Topic:** An application publishes a message (JSON payload) to an SNS topic; the publisher never knows who consumes it.  
- **Subscriber Types:** HTTP/HTTPS, email, SMS, AWS Lambda, SQS queues, or even other AWS services. Each subscriber receives a copy of every event.  
- **Decoupling & Scalability:** Publishers and consumers evolve independently; scaling is handled by SNS without message loss guarantees (at least once delivery).  
- **Event Filtering:** Subscribers can set filter policies so they only get relevant messages, reducing noise.  
- **Durable Delivery:** For at‑least‑once semantics, combine SNS with SQS or Lambda retries.

---

**Edge Cases**

- **Duplicate deliveries** due to retry logic; consumer idempotency is required.  
- **Payload size limits (256 KB)** – large data should be stored in S3 and the URL sent.  
- **Security:** IAM policies on topics and encryption at rest/transport.

---

**Optimize & Communicate**

Highlight how SNS acts as a lightweight, low‑latency backbone that allows microservices to react asynchronously, enabling real‑time dashboards, workflow triggers, or multi‑region replication. Emphasize trade‑offs: simpler than SQS for fan‑out, but less control over ordering and delivery guarantees. Conclude by noting that in a full event‑driven stack, SNS often pairs with EventBridge or Kinesis for richer routing and analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
