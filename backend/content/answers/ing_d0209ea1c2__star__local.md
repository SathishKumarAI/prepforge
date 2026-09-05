---
qid: ing_d0209ea1c2__star__local
question: 'Explain: Plan — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 367
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:36-05:00'
sources: []
---

**Situation**  
In a customer‑onboarding project for a telecom startup, our billing system was generating a backlog of overdue invoices. The product manager asked us to send an automated SMS reminder that would trigger only after the invoice had been past due by more than three days, and we needed it to be reliable across carriers.

**Task**  
Design a lightweight “Plan‑SendSMSMessage” microservice: schedule messages based on payment status, serialize payloads, call the third‑party SMS API (Twilio), and handle retries without duplicating sends. The goal was <1 % message loss and delivery latency under 2 seconds.

**Action**  
I created a Kafka topic `invoice_reminders` that received events from the billing DB whenever an invoice’s status changed to “past_due.” A consumer service parsed each record, built a JSON payload (phone, body, timestamp), and pushed it to Twilio via their REST client. I wrapped the call in a circuit breaker (Hystrix) and used exponential back‑off for retries, persisting failed messages in a DynamoDB table with a TTL of 7 days. For idempotency, I added a `reminder_id` hash in each payload so Twilio would dedupe duplicates.

**Result**  
Within two weeks we had live traffic: 12,000 SMSes sent daily with a delivery success rate of 99.8%. Customer churn dropped by 15% in the following quarter, and the system’s cost per message stayed below $0.03. I learned how to balance reliability and latency when integrating external APIs, and the importance of idempotent design for distributed messaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
