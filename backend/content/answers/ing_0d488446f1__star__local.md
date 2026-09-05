---
qid: ing_0d488446f1__star__local
question: 'Explain: Execution model — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:25-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a data‑science team at a fintech startup that had just launched an AI‑driven fraud detection platform. The product had reached 12 % false‑positive rates, hurting customer trust and inflating operational costs.

**Task** – My goal was to redesign the model pipeline so it could self‑optimize in production, reducing errors by at least 30 % while keeping latency under 200 ms per transaction.

**Action** – I introduced Neo Kim’s *Execution Model* with Agentic Engineering principles. First, I broke the monolithic model into micro‑agents: a feature‑selector, an inference engine, and a feedback‑loop agent that monitored predictions versus ground truth in real time. Using Ray Serve, each agent ran as a lightweight container on Kubernetes, communicating via gRPC. The inference agent wrapped a PyTorch transformer and added a confidence threshold; the feedback agent fed back misclassifications to a continual‑learning scheduler (RLHF) that retrained the selector on drifted data every 12 hours. I also set up an observability stack (Prometheus + Grafana) to track agent metrics and trigger alerts when latency spiked.

**Result** – Within two months, false positives dropped from 12 % to 7 %, a 42 % improvement, while inference latency stayed at ~180 ms. The modular agent architecture allowed us to roll out new fraud patterns without downtime, and I learned that treating ML components as autonomous agents can dramatically increase resilience and speed of iteration in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
