---
qid: ing_71887943af__faang__local
question: 'Explain: Delivery guarantees — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 517
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, technical overview of **Pub/Sub messaging** (e.g., Amazon SNS/SQS) with emphasis on *delivery guarantees*. I’ll assume they’re interested in the publish‑subscribe model used for decoupling services, how messages are routed to subscribers, and what reliability levels (at-most-once, at-least-once, exactly‑once) are supported.

**Approach**  
1. Define Pub/Sub fundamentals.  
2. Explain AWS components (SNS topic → SQS queue or Lambda).  
3. Detail delivery guarantees: best‑effort, retries, dead‑letter queues.  
4. Touch on trade‑offs and cost/latency implications.

**Depth**  
- **Pub/Sub** is a messaging pattern where *publishers* emit events to a *topic*; *subscribers* receive copies via subscriptions (queues or functions).  
- In AWS: an SNS topic forwards messages to SQS queues, Lambda handlers, or HTTP endpoints.  
- **Delivery guarantees**:  
  - *At‑most‑once*: default for SNS → HTTP; a message may be dropped if the endpoint fails.  
  - *At‑least‑once*: SQS provides at‑least‑once delivery; duplicates can appear if visibility timeout expires before ack. Use deduplication or idempotent processing.  
  - *Exactly‑once*: not natively supported; achieved by combining SQS FIFO queues (deduplication ID) with idempotent consumers, or using DynamoDB streams + Lambda.  
- **Retries**: SNS retries on failed HTTP/S endpoints (max 3 attempts). SQS offers exponential backoff and DLQs for persistent failures.  

**Edge Cases**  
- Message size >256 KB → fails in SNS; must use SQS directly.  
- Ordering guarantees only with FIFO queues.  
- Network partitions can cause duplicate deliveries if ack lost.

**Optimize & Communicate**  
Explain that choosing the right guarantee balances *throughput vs. consistency*. For high‑velocity analytics, at‑most‑once may suffice; for financial transactions, implement exactly‑once via idempotent consumer logic and DLQs. Summarize trade‑offs succinctly: cost, latency, complexity. This structure demonstrates clear reasoning and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
