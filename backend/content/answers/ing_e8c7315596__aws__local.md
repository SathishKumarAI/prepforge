---
qid: ing_e8c7315596__aws__local
question: 'Explain: Inbox/Outbox pattern — Inboxoutbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 364
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:24-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I was tasked with refactoring the order‑processing service that sent email notifications to customers. The legacy system used a simple queue that caused duplicate emails during network hiccups, eroding customer trust.

**Action (Ownership & Dive Deep)**  
I designed an *Inbox/Outbox* pattern: each service writes its outgoing messages to an `outbox` table in the same transaction as the business logic, then a separate Lambda (`OutboxProcessor`) scans for new rows and publishes them to SNS. The consumer side reads from SNS into an `inbox` table, ensuring idempotent processing by checking a unique message ID before acting.

I used **Amazon Aurora Serverless** (MySQL‑compatible) for ACID guarantees, **AWS Lambda** for the processor, **SNS** as the fan‑out bus, and **DynamoDB Streams** to trigger an `InboxConsumer`. All services are stateless, so scaling is linear; cost remains under $200/month.

**Result (Deliver Results)**  
After deployment, duplicate email incidents dropped from 12% to <0.01%, improving NPS by +4 points in two months. The system processed 5 × 10⁶ messages daily with <1 ms latency on the consumer side, all within SLA.

**Bar‑raiser Takeaway**  
I owned the end‑to‑end flow, dug into transactional consistency, quantified the impact (duplication rate, NPS), and learned that coupling message writes to business transactions is critical for customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
