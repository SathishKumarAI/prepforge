---
qid: ing_d316fde819__star__local
question: 'Explain: Service Management — Must Know System Design Building Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 369
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:48-05:00'
sources: []
---

**Situation** – While leading a data‑science team at a fintech startup, we were asked to launch a real‑time fraud detection microservice that would process ~10 k transactions per second and return risk scores within 150 ms, all while meeting PCI compliance.

**Task** – Design the service architecture so it could scale horizontally, guarantee high availability, and allow rapid model updates without downtime or data drift.

**Action** – I mapped out the core building blocks:  
1) *Ingestion* – Kafka topics for raw transaction streams, with a schema registry to enforce data contracts.  
2) *Feature Store* – A Redis‑based cache feeding pre‑computed user attributes, refreshed via scheduled Spark jobs.  
3) *Model Serving* – TensorFlow Serving behind an Envoy API gateway; we wrapped the model in a Docker container and used Istio for traffic splitting to support canary releases.  
4) *Observability* – Prometheus metrics on latency and error rates, coupled with OpenTelemetry tracing that fed into Grafana dashboards.  
5) *CI/CD pipeline* – GitHub Actions built new model images, ran unit tests, then deployed via ArgoCD with a blue/green strategy to avoid service disruption.

**Result** – The system handled peak loads of 25 k TPS with average latency 120 ms and zero downtime during a production rollout. Model drift alerts reduced false positives by 18%, and the automated pipeline cut model‑to‑production time from two weeks to three days. I learned that clear service boundaries, coupled with observability and automated canaries, are essential for reliable ML deployments at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
