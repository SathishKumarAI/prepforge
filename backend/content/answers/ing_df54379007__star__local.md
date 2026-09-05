---
qid: ing_df54379007__star__local
question: 'Why Event-Driven Architecture? — Event-Driven Architecture (EDA): A Complete
  Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:19-05:00'
sources: []
---

**Situation** – At my previous fintech startup we had a monolithic batch‑processing system that updated risk scores every 24 hours. By the end of Q2, our fraud detection latency was 12 hrs and we were missing real‑time alerts for high‑value transactions, hurting customer trust.

**Task** – I needed to redesign the pipeline so that each transaction could trigger an immediate risk evaluation and notification without waiting for a nightly batch job, while keeping the system maintainable and scalable.

**Action** – I championed an event‑driven architecture using Kafka as the backbone. Each payment service emitted a `TransactionCreated` event; a dedicated consumer group ran our scoring model in TensorFlow Serving, publishing a `RiskScoreUpdated` event. Other services (fraud alerts, compliance dashboards) subscribed to that stream. We added schema registry and versioning to avoid breaking changes, and used Docker/Kubernetes for autoscaling. I also implemented circuit breakers with Resilience4j to handle downstream latency spikes.

**Result** – Latency dropped from 12 hrs to under 2 seconds for risk scoring. The system handled a 3× increase in transaction volume during peak periods without downtime, and the modular design allowed us to add new event types (e.g., `RefundProcessed`) with zero impact on existing services. I learned that EDA turns a tightly coupled batch process into a resilient, observable, and future‑proof ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
