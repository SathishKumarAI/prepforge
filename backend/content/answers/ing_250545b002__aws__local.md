---
qid: ing_250545b002__aws__local
question: 'Explain: When to Choose Vertical vs Horizontal Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 395
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:06-05:00'
sources: []
---

**Situation & Task**

In my last role I led the migration of a recommendation engine from an on‑prem cluster to AWS. The core question was whether to scale the model inference layer vertically (bigger EC2/instance) or horizontally (more instances).  

**Action**

I first *dive deep* into performance data: latency, CPU/GPU utilization, and cost per request. I built a small benchmark that sent 10 k requests/day through a single m5.large vs an Auto Scaling group of t3.mediums.  
- **Vertical:** Avg. latency 120 ms, 75 % CPU, $0.30/hr.  
- **Horizontal (auto‑scaled):** Avg. latency 95 ms, 30 % CPU per instance, $0.18/hr for the same throughput.  

Because the workload was *stateless* and request volume spiked by 300 % during flash sales, horizontal scaling gave me elasticity: I could spin up 8 instances in 15 s with an SQS‑driven worker pool.  

**Result**

- Reduced latency by **20 %** during peak periods.  
- Cut monthly inference cost from $2,400 to $1,600 (≈30 % savings).  
- Achieved 99.9 % SLA without manual intervention.

**Reflection**

I learned that *vertical scaling* is simpler but locks you into a single point of failure and limits elasticity. *Horizontal scaling*, coupled with services like **EC2 Auto Scaling**, **SQS**, and **Elastic Load Balancing**, gives the right mix of cost, availability, and performance for stateless ML inference workloads.

**Leadership Principles**

- **Ownership:** Took full responsibility for performance and cost metrics.  
- **Dive Deep & Deliver Results:** Ran detailed benchmarks, quantified impact, and delivered measurable improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
