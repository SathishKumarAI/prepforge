---
qid: ing_6deb8f45f2__star__local
question: 'Explain: Blue-Green — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 289
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:05-05:00'
sources: []
---

**Situation:**  
At my previous company we had a live recommendation engine running in production on a Kubernetes cluster. Every nightly batch of user data would trigger a new model build, and the deployment pipeline needed to roll out the updated container without taking the service offline.

**Task:**  
I was responsible for designing a rollout strategy that guaranteed zero‑downtime, preserved traffic routing stability, and allowed quick rollback if the new model misbehaved.

**Action:**  
I implemented a Blue‑Green deployment pattern using Kubernetes Services and Deployment objects. I created two identical Deployments—`recommendation-blue` and `recommendation-green`. The Service selector pointed to the active version (initially blue). When a new image was ready, I updated the green Deployment with the new container tag, waited for all pods to become Ready, then switched the Service selector to green. In case of latency spikes or prediction errors detected via Prometheus alerts, I could instantly revert the selector back to blue. We also scripted the switch in ArgoCD so that every merge triggered an automated promotion.

**Result:**  
The rollout time dropped from 15 minutes to under 2 minutes, and we recorded a 0 % downtime rate over six months of production traffic. The approach taught me how Kubernetes Services can be leveraged as traffic gates, turning complex deployment logic into declarative configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
