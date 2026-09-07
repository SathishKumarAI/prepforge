---
qid: ing_042107d971__aws__local
question: 'Explain: Hardware vs software-based load balancers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 453
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:03-05:00'
sources: []
---

**Answer – Amazon Way**

> *“Customer Obsession” + “Dive Deep”*  

**Situation (S)**  
I led the migration of our recommendation engine from a single‑node GPU cluster to a fault‑tolerant, auto‑scaling architecture in 2025. The legacy setup used a **software load balancer** (NGINX) on EC2, which throttled inference throughput and caused >30 % latency spikes during traffic surges.

**Task (T)**  
Redesign the routing layer to eliminate single points of failure while keeping cost <15 % of the old spend.

**Action (A)**  
1. **Hardware‑based LB**: Deployed an **AWS Global Accelerator** fronting a fleet of **ALB+EC2 Auto Scaling** groups, each running TensorFlow Serving on GPU instances.  
2. **Software‑based LB**: Compared with a *self‑hosted NGINX* cluster in ECS.  
3. Benchmarked both under 10k QPS using Locust; hardware route achieved 95 % lower tail latency (99th percentile 120 ms vs 310 ms).  
4. Estimated cost: Accelerator + ALB ≈ $3,200/month versus $2,800 for NGINX+ECS (≈12 % higher but delivered 70 % more throughput).

**Result (R)**  
- **Throughput ↑ 150 %**, latency ↓ 60 %, SLA met at 99.9 %.  
- Deployed to production in 3 weeks, no downtime.  
- Earned “Customer Obsession” kudos and reduced incident tickets by 40 %.

**Bar‑raiser cues I’d hear**: ownership of end‑to‑end performance, deep dive into cost/latency trade‑offs, data‑driven impact, and learning loop (e.g., why we chose Accelerator over NGINX).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
