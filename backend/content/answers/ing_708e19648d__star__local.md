---
qid: ing_708e19648d__star__local
question: 'Explain: Common Failure Modes — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:24-05:00'
sources: []
---

**Situation** – I was leading the rollout of a real‑time fraud detection model for a payments platform that served ~50 M monthly users. The service had to be available 99.9% with sub‑second latency, but our initial architecture ran the inference on a single GPU cluster in a private data center.

**Task** – Ensure high availability while keeping latency low enough to not delay transaction authorization. We needed a design that could tolerate node failures and traffic spikes without degrading user experience.

**Action** – I re‑architected the system into a microservice pattern using Kubernetes with two separate GPU pods per region, each behind an Istio ingress gateway. I added a lightweight model cache (Redis) to serve stale predictions for up to 30 seconds during a pod outage. For failover, we deployed a secondary “shadow” inference service in a different AZ that ran on CPUs and provided a fallback path with slightly higher latency but guaranteed delivery. We also implemented circuit‑breaker logic that automatically rerouted traffic when GPU health checks failed, and set up Prometheus alerts to trigger auto‑scaling of the cache layer during peak periods.

**Result** – Post‑deployment, we achieved 99.97% uptime over a three‑month period with average inference latency of 35 ms under normal load and 48 ms during failover. The system handled a 200% traffic surge during a holiday sale without any outages. I learned that designing for availability in AI systems means treating the model as just another service: it must be stateless, horizontally scalable, and have graceful degradation paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
