---
qid: ing_738b235d82__aws__local
question: 'Explain: Rate Limits and Quotas — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 579
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:59-05:00'
sources: []
---

**What’s an API?**  
An **API (Application Programming Interface)** is a contract that lets two systems talk without knowing each other’s internals—think of it as a menu in a restaurant: you request a dish (endpoint) with specific ingredients (parameters), and the kitchen (service) delivers a finished product. In ML, we expose inference endpoints so downstream services can score models on demand.

**Situation / Task**  
While launching a real‑time recommendation engine for a global e‑commerce platform, I noticed spikes of 10 k TPS from mobile apps during flash sales. Our single inference endpoint began throttling, hurting conversion rates by ~3 % (≈$4M revenue loss).

**Action**  
1. **Design a rate‑limit/quotas layer** using API Gateway + DynamoDB for per‑user counters and a token bucket algorithm.  
2. **Deploy autoscaling Lambda functions** that read the counter, apply quotas (e.g., 100 req/min/user), and return HTTP 429 when exceeded.  
3. **Back‑off & retry logic** in clients with exponential back‑off; cache predictions for 5 s to reduce load.  
4. **Metrics & alerting** via CloudWatch → PagerDuty thresholds set at >80 % of quota.

**Result**  
- Reduced SLA violations from 12 % to <0.2 %.  
- Maintained 99.95 % availability during peak sales, saving ~$3.8M in lost revenue.  
- Cost stayed under $200/month by leveraging DynamoDB’s on‑demand pricing and Lambda’s pay‑per‑invoke model.

**Leadership Principles Reflected**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took end‑to‑end responsibility for the ML inference pipeline, from design to ops. |
| **Dive Deep** | Analyzed logs, identified latency spikes, and quantified impact on revenue. |
| **Bias for Action** | Implemented a quick, low‑cost rate‑limit solution before manual throttling caused loss. |
| **Deliver Results** | Delivered measurable uptime improvements while keeping costs minimal. |

**Bar‑raiser cues**  
- Clear ownership narrative (who did what).  
- Data‑driven impact (revenue, SLA metrics).  
- Depth of technical trade‑offs (Lambda vs EC2, DynamoDB read/write throughput).  
- Learning loop: “We initially over‑provisioned; next time we’ll start with a token bucket and auto‑scale.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
