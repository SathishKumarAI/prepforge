---
qid: ing_36c56db669__aws__local
question: 'Explain: Shadow — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 408
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:27-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we had a production ML inference service that needed zero‑downtime updates while keeping latency < 20 ms. The team was debating between *blue/green* and *shadow deployments*. I owned the rollout strategy because any downtime would break our SLA with 10,000 daily users.

**Action / Design**  
I proposed a **Shadow (canary) strategy**:  
1. Deploy new container version to a parallel Kubernetes service (`ml-inference-shadow`).  
2. Route 5 % of live traffic via an Envoy sidecar that duplicates requests to the shadow pod, but only logs responses.  
3. Use CloudWatch metrics (latency, error rate) and a Lambda trigger to auto‑scale the shadow pool up to 10 replicas based on CPU > 70 %.  
4. If metrics stay within thresholds for 30 min, we shift traffic in 5 % increments until 100 %.  

This leverages **AWS Fargate + EKS** (serverless pods) and **Amazon CloudWatch** for observability, keeping the cost < $0.05/hr per pod while guaranteeing high availability.

**Result**  
The rollout completed in 4 hrs with no SLA breach; latency drifted by only 2 ms and error rate stayed below 0.01 %. We reduced rollback time from 8 hrs to under 30 min, saving $1,200/month in ops effort.

---

*Leadership Principles*: **Ownership** – I drove the end‑to‑end deployment; **Dive Deep** – I analyzed latency metrics and built a custom traffic‑shaping rule.  
*Bar‑raiser focus*: Quantified impact (latency, cost), depth of monitoring design, and learning loop from previous rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
