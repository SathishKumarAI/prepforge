---
qid: ing_466e51352e__aws__local
question: 'Explain: Horizontal Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:49-05:00'
sources: []
---

**Situation & Task**  
I led a team that had to serve a real‑time recommendation engine for a global e‑commerce platform. The workload spiked 10× during holiday sales, and our single‑node inference cluster (vertical scaling) was hitting CPU saturation and high latency.

**Action – Horizontal vs Vertical Scaling**  
1. **Vertical**: Upgraded the instance from `ml.m5.xlarge` to `ml.p3.8xlarge`. Cost jumped 6× but performance improved only 30 % due to memory bottlenecks.  
2. **Horizontal**: Deployed a stateless inference microservice behind an Application Load Balancer (ALB). Each container ran on a Spot‑Fleet of `ml.m5.large` instances, auto‑scaling by predicted load using CloudWatch alarms.

I introduced *model sharding*—splitting the model into two smaller models served from separate containers—to reduce memory footprint.  

**Result**  
- **Latency** dropped from 750 ms to 120 ms (80 % improvement).  
- **Cost** fell by 40 % compared with vertical scaling, while maintaining a 99.9 % SLA.  
- **Scalability**: the fleet handled 12 k concurrent requests during peak without degradation.

**Leadership Principles**  
- *Customer Obsession*: Delivered fast, reliable recommendations that boosted conversion rates by 5 %.  
- *Dive Deep*: Analyzed CPU/memory metrics to choose sharding and Spot‑Fleet sizing.  

**Bar‑raiser takeaways**  
I owned the problem end‑to‑end, quantified impact with real A/B data, and learned that horizontal scaling coupled with model partitioning delivers both cost savings and higher availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
