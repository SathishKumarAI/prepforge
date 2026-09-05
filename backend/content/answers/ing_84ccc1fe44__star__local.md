---
qid: ing_84ccc1fe44__star__local
question: 'Explain: ML System Design Questions (2025-2026) — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 366
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:53-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had a fraud‑detection pipeline that processed ~4 M transactions per day. The model drifted after a regulatory change, causing false positives to spike from 3% to 12%, hurting customer experience and inflating investigation costs.

**Task** – I was asked to redesign the ML system so it could adapt in near real time, keep latency <200 ms per transaction, and reduce the false‑positive rate back below 4% while staying compliant with GDPR data‑retention limits.

**Action** – First, I set up a feature store (Feast) that streamed user behavior logs into a Kafka topic and persisted them in an Iceberg table for batch training. I built a modular architecture: a lightweight inference service on FastAPI backed by a TorchScript model, and a nightly retraining job orchestrated with Airflow that pulled the latest 30‑day window from the store. For drift detection I added a KS‑test monitor that triggered incremental learning via an online gradient descent module in PyTorch Lightning. Finally, I deployed all services on Kubernetes with Istio for traffic shaping, ensuring zero‑downtime updates.

**Result** – Within three weeks of deployment we cut false positives to 3.2% and reduced investigation costs by $150K/month. Latency stayed below 180 ms per request, and the system now auto‑scales during peak fraud windows. I learned that a tightly coupled feature store + online learning pipeline is essential for high‑stakes ML ops, especially when regulations demand rapid adaptation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
