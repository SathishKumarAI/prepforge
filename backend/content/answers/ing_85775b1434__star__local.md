---
qid: ing_85775b1434__star__local
question: 'Explain: Canary — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 332
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:05-05:00'
sources: []
---

**Situation:**  
At my last company we were rolling out a new recommendation engine for our e‑commerce platform. The previous monolithic release had caused 12% of traffic to hit latency spikes during peak hours, and any bug would bring down the entire checkout flow.

**Task:**  
I was tasked with launching version 2.0 in a way that minimized risk: we needed to expose it to just 5% of users initially, monitor performance, and roll back instantly if errors surfaced—while still keeping our CI/CD pipeline fully automated.

**Action:**  
Using Helm charts I defined two deployment manifests: `stable` (current production) and `canary`. With the Kubernetes `Deployment` controller and an Ingress layer backed by Istio, I set up a weighted traffic split of 95/5. I wrote Prometheus alerting rules to watch request latency, error rate, and CPU usage. A GitHub Actions workflow triggered ArgoCD to promote the canary once metrics stayed below thresholds for 10 minutes; otherwise it automatically rolled back by updating the Ingress weights back to 100/0. I also added a sidecar that streamed logs to Loki for real‑time debugging.

**Result:**  
The rollout introduced no downtime, and latency dropped from 350 ms to 120 ms across the board within 24 hours. The canary process saved us $30k in avoided incident costs and taught me how to balance automation with observability in production Kubernetes deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
