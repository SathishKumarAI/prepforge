---
qid: ing_16ef3a2195__star__local
question: 'Explain: Asynchronous Request-Reply — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 338
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:28-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating a legacy monolith that processed customer orders into a micro‑service architecture on AWS. The order service had to call an external fraud‑check API, but the latency was unpredictable and caused timeouts in our synchronous HTTP flow.

**Task:**  
Redesign the interaction so that the order service can continue handling new requests while waiting for fraud results, without losing reliability or auditability.

**Action:**  
I introduced an asynchronous request‑reply pattern using Amazon SQS + SNS. The order service sends a “FraudCheckRequest” message to an SQS queue and immediately returns a 202 response. A dedicated fraud worker polls the queue, calls the external API, then publishes a “FraudCheckResponse” event on SNS with a correlation ID. Subscribers (e.g., inventory updater, notification service) listen for this event, match it to the original order using the ID, and update downstream systems. I also implemented dead‑letter queues for failures and added CloudWatch metrics to monitor message latencies.

**Result:**  
Order throughput increased by 35%, SLA improved from 4 s to sub‑second for most customers, and we eliminated 90 % of timeout incidents. The exercise taught me how to balance decoupling with traceability in cloud messaging systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
