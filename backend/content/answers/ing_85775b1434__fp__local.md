---
qid: ing_85775b1434__fp__local
question: 'Explain: Canary — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 392
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:46-05:00'
sources: []
---

**Canary—Kubernetes Deployment Strategies**

The *fundamental problem* is: how do we guarantee that a new container image does not corrupt production traffic while still delivering rapid updates? The solution must satisfy two constraints:

1. **Risk isolation** – only a small, observable fraction of users see the change.
2. **Observability** – any degradation can be detected before full rollout.

In Kubernetes this is achieved by *traffic splitting* between two pod sets: the stable (baseline) and the candidate (canary). The control plane creates a new Deployment with replicas = N_canary, while the existing Deployment retains N_stable. A Service or Ingress attaches both pods; a *service mesh* (e.g., Istio) injects a tiny weight (1–5 %) to the canary. The system then **optimizes** the objective “maximize user satisfaction subject to latency ≤ 95th‑percentile + δ”. By formulating this as an online convex program, the scheduler adjusts weights in real time: if the canary’s metrics drift upward, its weight is reduced; otherwise it grows until full exposure.

A *non‑obvious insight* is that the canary need not be a simple replica of the new image. It can be a **feature flag** or a *shadow* copy that processes traffic in parallel but does not influence downstream state. This decouples functional testing from user impact, allowing safe experimentation even when the new code has side‑effects (e.g., writes to a database). Thus, Canary is less about “new version” and more about **probabilistic risk allocation**—a principled way of turning deployment into a controlled experiment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
