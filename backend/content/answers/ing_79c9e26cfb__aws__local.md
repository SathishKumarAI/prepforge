---
qid: ing_79c9e26cfb__aws__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 460
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:22-05:00'
sources: []
---

**Situation & Task**  
When we moved our recommendation engine from a monolith to micro‑services on EKS, the team needed a zero‑downtime rollout for nightly model updates without throttling user traffic. I owned the deployment strategy and had to prove that a *Rolling Update* would meet SLAs and cost targets.

**Action (Technical)**  
I designed an **EKS Deployment** with `maxUnavailable: 20%` and `minReadySeconds: 30`. The rollout was backed by:

| Service | AWS Tool | Reasoning |
|---------|----------|-----------|
| Container registry | ECR | Immutable tags, version control |
| Load balancer | ALB + Target Groups | Health checks on `/healthz` |
| Autoscaling | Cluster Autoscaler & HPA | Scale pods up/down with traffic spikes |

The CI pipeline pushed a new image to ECR, updated the deployment spec, and triggered a rolling update. Each pod received a `preStop` hook that drained in‑flight requests, ensuring no request was dropped.

**Result (Data)**  
- **Zero downtime:** 99.999% availability during 7 consecutive updates.  
- **Latency impact:** <5 ms increase on average; peak spike 12 ms (below SLA).  
- **Cost:** Avg $0.18 per minute of extra pods, <$40/month for the rollout window.

**Reflection & Learning**  
I *dove deep* into health‑check thresholds to avoid premature termination, learned that `minReadySeconds` trades latency for stability, and adjusted HPA policies after a failed test where 30 % unavailability caused a brief spike. This experience reinforced **Ownership** (owning the full deployment life cycle) and **Dive Deep** (tuning parameters based on real metrics).  

Bar‑raiser signals: clear ownership of end‑to‑end rollout, quantitative impact, iterative learning from failure, and balanced trade‑offs between cost, availability, and latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
