---
qid: ing_369f337dcc__aws__local
question: 'Explain: A/B Testing — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 463
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:04-05:00'
sources: []
---

**Situation & Task**  
In my last role I was responsible for launching a new recommendation engine that would be rolled out to 3 million daily users on our e‑commerce platform. The goal was to compare the new model against the legacy one while keeping uptime above 99.9% and minimizing data drift risk.

**Action (Technical Design)**  
I chose **Kubernetes blue/green deployments on Amazon EKS** combined with an **A/B test harness in App Mesh**.  
1. Spin up a *green* namespace containing the new model pods, autoscaled via Cluster Autoscaler to 5 CPU‑nodes for peak traffic.  
2. Use Envoy sidecars to route 10% of ingress traffic (controlled by a *VirtualService* rule) to green and 90% to blue.  
3. Collect metrics in CloudWatch (latency, error rate, click‑through).  
4. Run a *Canary* phase for 24 h; if MAPE < 2%, automatically promote green to production via rolling update.

**Result**  
The A/B test ran over 48 hours, exposing the new model to 600k users. We observed a **12% lift in conversion rate** (Δ = +0.8% absolute) and a **4% reduction in latency** compared to blue. The deployment incurred only ~5 $ extra per day due to the extra nodes—well within budget.

**Leadership Principles**  
- **Customer Obsession**: Delivered measurable performance gains for real users.  
- **Ownership & Dive Deep**: Built end‑to‑end pipeline, monitored every metric, and iterated on routing rules after a false positive in error rate during the first test cycle.  

**Bar‑raiser takeaway**  
I demonstrated ownership by automating promotion logic, deep dive into performance data to validate assumptions, quantified impact with clear metrics, and learned from the initial anomaly—tightening health checks to avoid unnecessary rollbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
