---
qid: ing_ed19a89f62__aws__local
question: 'Explain: Ramp System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 464
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:23-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a *Ramp‑Up System* that would automatically scale an inference service from a handful of requests per day to millions, while keeping latency <50 ms and cost <10 % above baseline. The goal was to reduce manual ops for the ML team and enable rapid experimentation.

**Action**  
- **Architecture:** Stateless Lambda functions behind API Gateway for cold‑start control; autoscaling ECS Fargate clusters for heavy‑weight models; DynamoDB streams to trigger *Model‑Version* updates.  
- **Data‑driven Tuning:** Implemented a “Ramp Scheduler” that ingests real traffic curves from CloudWatch and adjusts target CPU/Memory via Application Auto Scaling policies every 5 min.  
- **Observability:** Integrated X-Ray traces and custom Prometheus metrics; set up alerts on SLA breaches.  
- **Cost Control:** Used Spot Instances for ECS nodes, combined with a cost‑budget alarm that triggers a “scale‑down” policy if spend > $1K/day.

**Result**  
- Achieved 99.8 % of requests within 50 ms during a 10× traffic spike in just 3 days.  
- Reduced manual intervention from 4 ops hours/week to <30 min/month.  
- Cut inference cost by 12 % compared with the legacy on‑prem cluster.

**Leadership Principles Highlighted**  
- **Ownership & Deliver Results:** I owned the end‑to‑end pipeline and quantified impact through latency, cost, and ops time.  
- **Dive Deep & Bias for Action:** Built custom metrics to discover bottlenecks; iterated quickly with A/B tests on scaling thresholds.

**Bar‑raiser takeaways**  
- Demonstrated deep technical knowledge (Lambda vs ECS vs Spot).  
- Quantified trade‑offs (latency vs cost).  
- Learned from a failed 1‑day test that over‑provisioning caused cold‑start spikes; fixed by adding warm‑up Lambdas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
