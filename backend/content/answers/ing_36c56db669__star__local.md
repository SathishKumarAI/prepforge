---
qid: ing_36c56db669__star__local
question: 'Explain: Shadow — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 399
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:49-05:00'
sources: []
---

**Situation:**  
At my last role we were rolling out a new recommendation model to production. The existing system handled ~1 M requests per day, and any downtime could cost us roughly $500k in lost revenue. Our dev‑ops team was comfortable with blue/green but the data scientists wanted to test the new model on live traffic without affecting user experience.

**Task:**  
I had to design a deployment that would let the new model run alongside the old one, collect performance metrics, and be able to switch traffic instantly if something went wrong—all while keeping latency under 200 ms.

**Action:**  
I proposed a shadow (also called “canary‑shadow”) strategy using Kubernetes. I set up two Deployments: `prod-reco` (current model) and `shadow-reco`. A sidecar Envoy proxy intercepted every request, duplicated the payload, and forwarded one copy to `prod-reco` and the other to `shadow-reco`. Both services ran in separate pods but shared the same cluster network. I used Prometheus to scrape latency and error rates from each deployment, and Grafana dashboards to compare them in real time. To keep costs down, I limited the shadow Deployment to 20% of the node pool using a custom pod‑affinity rule.

**Result:**  
We deployed the new model with zero service disruption; traffic was routed normally while we collected 24 h of head‑to‑head comparisons. The shadow model achieved a 15 % higher click‑through rate and maintained latency within our SLA. Because the shadow ran on live data, we caught a subtle precision drift early and rolled back in under an hour—saving us an estimated $120k in potential revenue loss. I learned how to balance observability, cost, and risk when testing ML models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
