---
qid: ing_3041dc6a9e__fp__local
question: 'Explain: 5.1 Handling Failures and Retries — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 486
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:47:26-05:00'
sources: []
---

**Why failures happen**  
A notification system is a *distributed side‑effect* service: it must push messages through external channels (email, SMS, push) that are outside our control. Each channel has its own latency, quota limits and failure modes, so any single request can fail for reasons we cannot predict.

**Fundamental requirement – eventual success**  
From an optimization point of view the goal is to minimize *expected delivery time* while keeping *resource usage* bounded. The classic trade‑off is “retry until success” vs “give up”. A purely optimistic strategy wastes bandwidth; a purely pessimistic one leaves users unhappy.

**Retry logic as a stochastic process**  
Model each send attempt as an independent Bernoulli trial with probability p of success (which itself depends on load, quota, network). The expected number of attempts to succeed is 1/p. Exponential back‑off turns this into a *geometric* distribution that throttles traffic during congestion, reducing the variance of retries and preventing thundering herds.

**Idempotency & at‑least‑once guarantees**  
To avoid duplicate notifications we must make every retry idempotent: attach a deterministic message ID (hash of payload + user) and store a “sent” flag in an append‑only log. This gives us *eventual consistency* without needing global locks.

**Dead‑letter queue & monitoring**  
After a configurable maximum number of attempts, move the message to a dead‑letter queue for human review. Metrics on retry counts, back‑off times and failure reasons surface bottlenecks early.

> **Non‑obvious insight:** *Per‑user rate‑limited retry windows* (e.g., “no more than 3 retries in 5 minutes per user”) prevent a single flaky channel from overwhelming the entire system while still honoring the overall retry policy. This subtle windowing aligns with queue backpressure and keeps latency predictable for the majority of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
