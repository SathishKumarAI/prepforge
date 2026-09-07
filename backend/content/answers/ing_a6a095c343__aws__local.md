---
qid: ing_a6a095c343__aws__local
question: How Does an API Gateway Work? — What is an API Gateway? - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 472
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:48-05:00'
sources: []
---

**What is an API Gateway and How It Works (Amazon‑style)**  

**Situation:** I led a team that had to expose a new recommendation engine to mobile clients while keeping latency < 100 ms and cost <$0.01 per request.

**Task:** Design a scalable, secure entry point that could auto‑scale with traffic spikes and allow us to roll out A/B tests without downtime.

**Action:**  
- Chose **Amazon API Gateway** as the front door because it natively integrates with **AWS Lambda**, **IAM**, and **WAF**.  
- Defined REST endpoints (`/recommend`) and used *Lambda authorizers* for fine‑grained auth, reducing token validation overhead by 30 %.  
- Enabled **Caching (TTL=300 s)** on the most popular endpoint; this cut downstream Lambda invocations from 1M/day to 250k/day, saving ~US$120/month.  
- Configured *Stage Variables* for blue/green deployments; traffic was split 70/30 between versions with minimal latency impact (< 5 ms).  
- Instrumented CloudWatch metrics and set alarms on 4xx/5xx rates—triggering automatic rollback if error > 2%.

**Result:** The system handled 3× peak traffic (up to 200k RPS) with < 95th‑percentile latency of 78 ms, while keeping monthly cost below $500.  

**Reflection (Bar‑raiser lens):**  
- **Ownership:** I took full responsibility for end‑to‑end performance and cost.  
- **Dive Deep:** I analyzed cold‑start patterns, cache hit ratios, and authorizer overhead to pinpoint bottlenecks.  
- **Quantified Impact:** 70% traffic reduction on Lambda, $120/month savings, < 5 ms latency shift.  
- **Learning from Failure:** Early prototype without caching caused a 200 ms spike; I iterated quickly by adding cache and re‑tested within an hour.

*Leadership Principles highlighted: Customer Obsession (low latency), Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
