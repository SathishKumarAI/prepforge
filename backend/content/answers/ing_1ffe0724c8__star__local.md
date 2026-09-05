---
qid: ing_1ffe0724c8__star__local
question: 'Explain: Data flow at serving time — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:24-05:00'
sources: []
---

**Situation**  
I was leading the rollout of a new multi‑tenant AI service for a SaaS client that needed to serve customized language models for 12 distinct brands, each with its own data privacy rules and SLA.

**Task**  
Design the real‑time data pipeline so that every request is routed to the correct fine‑tuned model, respecting tenant isolation, while keeping latency below 200 ms and scaling to 50k QPS.

**Action**  
I built a lightweight metadata broker on Kafka that tags each incoming query with a tenant ID and model version. A Kubernetes‑based inference gateway (TensorFlow Serving + Envoy) pulls the latest model from an S3‑backed registry, caching it in local RAM per pod. We added a sidecar that encrypts payloads at rest using AWS KMS keys scoped to each tenant, and a monitoring stack with Prometheus/Grafana to track per‑tenant latency and error rates. For hot‑switching, the broker pushes a “model‑update” event; the gateway reloads the new checkpoint without dropping connections.

**Result**  
We achieved sub‑200 ms latency for 95 % of requests, dropped tenant cross‑talk incidents to zero, and cut model warm‑up time from 5 s to 300 ms. The project also earned a compliance audit pass for data segregation, proving the architecture works at scale while keeping security tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
