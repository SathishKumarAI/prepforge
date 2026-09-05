---
qid: ing_0a0bd0108d__star__local
question: 'Explain: Process with Workers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:04-05:00'
sources: []
---

**Situation** – At my last startup, we had a recommendation engine that needed to retrain every night on fresh user interaction data. The nightly batch job was hitting our compute budget because it processed the entire event stream in one monolithic script and then pushed updates to production via an HTTP callback.

**Task** – I was tasked with redesigning the pipeline so it could scale horizontally, stay within cost limits, and still guarantee that each webhook payload reached downstream services exactly once.

**Action** – I broke the job into a *producer* (Kafka topic) that ingested events in real time, and a pool of stateless *worker containers* (Dockerized Python processes) that pulled batches from Kafka, ran incremental model updates using XGBoost, and stored checkpoints to S3. After training, each worker published a signed JSON payload to an AWS SNS topic; a small “webhook dispatcher” service subscribed to SNS, verified the signature, and sent the payload to downstream APIs via HTTPS with retry logic (exponential back‑off). I added idempotency keys in the payload headers so downstream services could dedupe duplicate deliveries.

**Result** – The new design cut nightly compute time from 4 hrs to 45 min and reduced cost by ~35%. Webhook delivery success rose to 99.9%, with zero data loss across a 10‑fold increase in event volume. I learned the value of decoupling ingestion, processing, and notification layers, and how careful idempotency design can turn flaky HTTP callbacks into reliable events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
