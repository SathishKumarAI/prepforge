---
qid: ing_79c9e26cfb__star__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:10-05:00'
sources: []
---

**Situation** – In my last role we had a micro‑service that handled real‑time analytics for our ad platform. Production traffic was 3 M requests per day and any downtime meant revenue loss. The team needed to upgrade the model from version 1.2 to 1.4 without interrupting users.

**Task** – I was responsible for orchestrating a zero‑downtime rollout that would gradually shift traffic to the new pods, monitor health, and rollback automatically if latency spiked beyond 200 ms.

**Action** – I defined a Kubernetes Deployment with `spec.strategy.type: RollingUpdate`, setting `maxUnavailable: 1` and `maxSurge: 2`. I added readiness probes that waited for the model to warm up (CPU >70% and inference latency <100 ms). Using Helm, I scripted a canary rollout: first deploy 10% of pods with the new image, then monitor Prometheus metrics (`request_latency_seconds`) via Grafana. Once the SLA held, I incrementally increased replicas until 100% were running version 1.4. The Deployment’s `revisionHistoryLimit` was set to 3 so we could revert quickly.

**Result** – The upgrade completed in under 12 minutes with <0.5 % traffic loss; latency stayed below SLA thresholds, and no revenue impact occurred. I learned how fine‑tuning surge/availability settings and health checks can make rolling updates truly seamless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
