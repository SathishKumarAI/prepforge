---
qid: ing_8fb2daa9e9__star__local
question: 'Explain: Retries — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 320
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:16-05:00'
sources: []
---

**Situation** – In a micro‑service architecture at my last company, the order service called an external payment gateway over HTTPS. During peak traffic we saw a 15 % increase in 5xx errors and many orders were stuck in a “pending” state because the client had to manually retry.

**Task** – I was tasked with designing a robust retry strategy that would reduce failure rates, respect back‑off limits, and avoid hammering the gateway while keeping latency acceptable.

**Action** – I implemented an exponential back‑off with jitter using Polly in .NET Core. Each request got up to five retries, starting at 200 ms and doubling each time, capped at 3 s. I added a circuit breaker that opened after three consecutive failures for 30 s. Metrics were sent to Prometheus; I set alerts on retry counts exceeding 10 per minute. For idempotent calls (e.g., payment status checks) I marked them safe so retries didn’t duplicate charges.

**Result** – After deployment, the external error rate dropped from 15 % to 2 %. Order completion time improved by 12 %, and the circuit breaker prevented a cascade of failures during gateway outages. I learned that combining back‑off, jitter, and circuit breaking with observability is key to resilient HTTP communication in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
