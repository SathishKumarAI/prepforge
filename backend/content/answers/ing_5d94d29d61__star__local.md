---
qid: ing_5d94d29d61__star__local
question: 'Explain: Managing servers across data centers — Twine: Efficient, reliable
  cluster management - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 364
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:14-05:00'
sources: []
---

**Situation** – When I joined Meta’s infrastructure team, the company was running over 12,000 ML inference servers spread across three global data centers. The existing orchestration stack (Docker + Kubernetes) had become a bottleneck: deployments took hours and outages were often hard to isolate because each cluster ran its own configuration set.

**Task** – I needed to build a unified, fault‑tolerant management layer that could roll out updates in minutes, guarantee zero‑downtime for high‑traffic models, and provide a single source of truth for server health across all regions.

**Action** – I designed “Twine,” a lightweight service mesh built on Envoy that sits between the cluster scheduler and the underlying OS. Twine injects sidecar proxies into each container, aggregates metrics via Prometheus, and exposes a central REST API for configuration drift detection. Using Raft‑based consensus we replicated state across data centers so any node could recover the latest deployment manifest. I also introduced a blue‑green rollout pipeline with automated rollback on latency spikes, leveraging Grafana alerts to trigger instant failover.

**Result** – Deployment times dropped from 3 hours to under 10 minutes, and zero‑downtime rollouts were achieved for all production models. The global uptime improved from 99.7% to 99.99%, saving Meta an estimated $4M annually in avoided SLA penalties. I learned that treating configuration as code and centralizing observability are key to scaling ML infrastructure reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
