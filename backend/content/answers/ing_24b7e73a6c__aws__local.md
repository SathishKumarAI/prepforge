---
qid: ing_24b7e73a6c__aws__local
question: 'Explain: I no longer got remote Network calls — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 446
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:44-05:00'
sources: []
---

**Situation**  
When my team migrated the legacy monolith to a server‑less, event‑driven stack on AWS, we discovered that the “remote network calls” people were still talking about actually meant *API Gateway → Lambda → DynamoDB* patterns hidden behind SNS topics. The result was an opaque flow where downstream services had no visibility into what triggered them.

**Task**  
I was tasked with making the event flow transparent, ensuring each micro‑service could trace its inputs, and reducing the cost of unnecessary “remote calls” that were bloating our bill by 18 % in Q1.

**Action**  
- **Dive Deep & Ownership:** I first instrumented every Lambda with CloudWatch Logs and X‑Ray tracing. By correlating *Event IDs* across services, we mapped the exact path each request took.  
- **Design & AWS Services:** Replaced opaque “remote calls” with a **SNS topic per domain** and introduced **AWS EventBridge Scheduler** to emit deterministic events. Each consumer Lambda now subscribes directly to its relevant topic, eliminating round‑trips.  
- **Simplify & Cost Control:** Added a **Lambda Layer** containing a lightweight retry library (based on Polly) so we removed manual retries that were causing duplicate network traffic. We also moved idempotent writes from DynamoDB Streams to **SQS FIFO queues**, guaranteeing single processing and cutting Lambda invocations by 35 %.  
- **Bias for Action:** Rolled out the changes in a blue‑green fashion, monitoring latency and error rates with CloudWatch Alarms; any spike automatically triggered a rollback.

**Result**  
After deployment, *remote network calls* dropped from ~120k to ~45k per day (a 62 % reduction), cutting the associated cost by $4.8K/month. Latency for end‑to‑end requests improved from 350 ms to 210 ms, and error rates fell below 0.01 %. The team now has full visibility into event flows, enabling faster debugging and a stronger sense of ownership over each micro‑service’s responsibilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
