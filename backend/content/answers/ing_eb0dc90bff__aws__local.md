---
qid: ing_eb0dc90bff__aws__local
question: 'Explain: Custom load method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 434
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:33-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Question:** *Explain: Custom load method – What is Load Balancing?*  

**Situation / Task**  
In 2023 I led the redesign of our recommendation engine for a global e‑commerce platform that had just hit 30 M active users. The existing monolithic service crashed under peak traffic (up to 15 k RPS), violating our *Customer Obsession* promise of “always on” availability.

**Action**  
I introduced **Elastic Load Balancing (ELB)** with a custom health‑check script that queried the ML model’s inference latency. The load balancer routed requests only to instances whose latency was < 120 ms, while a Lambda function automatically spun up new EC2 Spot instances during traffic spikes. I also added **AWS Auto Scaling** policies tied to CloudWatch metrics (CPU, memory, custom latency). To reduce cost, I enabled *Spot Instances* with a fallback to On‑Demand when the spot market dropped below 30 % of our target price.

**Result**  
- **Availability:** SLA improved from 99.7 % to > 99.999 % during the holiday season.  
- **Cost:** EC2 spend fell by **32 %** while maintaining performance.  
- **Latency:** Mean inference latency dropped from 210 ms to 78 ms, boosting conversion rate by 4 pp.

**Dive Deep & Bar‑raiser Insight**  
I validated assumptions with A/B testing and logged all health‑check failures; this data guided future capacity planning. The bar‑raiser would note my ownership of the entire pipeline (model → inference → LB), the quantitative impact on revenue, and lessons learned—e.g., spot interruptions required a graceful fallback path.

> **Leadership Principles Highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
