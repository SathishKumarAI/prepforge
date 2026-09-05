---
qid: ing_d6afdb9256__star__local
question: 'Explain: Architecture Patterns — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:08-05:00'
sources: []
---

**Situation** – At my previous company we had a micro‑service that served an e‑commerce recommendation engine. The product team wanted to roll out three new models: one for seasonal trends, one for user‑behavior clustering, and one for price optimization. Each model was trained on different data pipelines and had distinct latency requirements.

**Task** – I needed to design a scalable architecture that could route incoming requests to the appropriate model without bloating the service layer, while keeping overall latency under 120 ms and ensuring easy rollout of new models.

**Action** – I built an AI Gateway using Kong API Gateway with a custom Lua plugin for routing logic. The gateway inspected a header (`X-Model-Type`) and forwarded the request to one of three Docker‑based inference services behind Envoy. I used OpenTelemetry to trace end‑to‑end latency, and Prometheus/Grafana dashboards to monitor model hit rates and error percentages. For versioning, I deployed Canary releases via Istio, allowing 5% traffic to a new “price‑opt” model while keeping the rest on the stable baseline.

**Result** – Deployment time for a new model dropped from two days to under four hours. Latency remained at ~95 ms average, and A/B testing of the price‑optimization model increased conversion by 3.2% within one week. I learned that a lightweight gateway with declarative routing and observability is essential for managing multiple AI models in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
