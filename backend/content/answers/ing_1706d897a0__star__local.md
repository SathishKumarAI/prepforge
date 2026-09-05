---
qid: ing_1706d897a0__star__local
question: 'Explain: 125: System Design Interview — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 346
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:51-05:00'
sources: []
---

**Situation** – At my last company we were asked to build an internal chatbot that could answer technical queries for developers, similar to ChatGPT. The existing knowledge base was static and the team had no real-time inference pipeline; latency needed to stay below 800 ms.

**Task** – Design a scalable, low‑latency system that ingests user prompts, generates responses with a transformer model, and supports versioning and A/B testing for new fine‑tuned models.

**Action** – I broke the architecture into three layers:  
1. **API Gateway + Auth** using NGINX plus JWT to throttle requests.  
2. **Inference Service** on Kubernetes, autoscaling based on GPU queue depth; we containerized a 6B‑parameter model with ONNX Runtime for faster FP16 inference. I added a caching layer (Redis) keyed by prompt embeddings to reuse identical queries.  
3. **Monitoring & Telemetry**: Prometheus metrics for latency, CPU/GPU usage; Grafana dashboards that auto‑alert if latency > 750 ms. For A/B testing, we routed 10% of traffic to the new model via feature flags in LaunchDarkly and logged perplexity scores.

**Result** – The end‑to‑end system handled 5,000 QPS with an average latency of 650 ms. Model switching took < 30 s thanks to pre‑warm containers. We reduced engineering time for new models by 40% and learned that embedding‑based caching dramatically cuts inference costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
