---
qid: ing_cbf8cab747__aws__local
question: What is an API Gateway? — What is an API Gateway? - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 409
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:06-05:00'
sources: []
---

**What is an API Gateway? (AWS context)**  

*Situation:* In my last role I led the migration of a legacy monolith to a micro‑service architecture for our e‑commerce platform. The team needed a single entry point that could route traffic, enforce security, and provide observability across 12 services without adding latency.

*Task:* Design an API Gateway layer that would expose RESTful endpoints, support rate limiting, and log usage for billing purposes while keeping costs under $5k/month.

*Action:*  
- Chose **Amazon API Gateway (REST)** because it natively integrates with IAM, WAF, CloudWatch, and Lambda Authorizers.  
- Deployed a **regional endpoint** to keep latency < 20 ms for EU‑West customers.  
- Configured **throttle limits** (10k RPS burst, 5k sustained) and **usage plans** tied to customer tiers.  
- Enabled **logging to CloudWatch Logs & X-Ray**; set up metric filters that trigger SNS alerts when error rates >2%.  
- Used **Lambda Edge** for dynamic header injection, reducing round‑trip time by ~15 ms.

*Result:*  
- Traffic routed through the gateway grew from 1M to 12M requests/month in 6 months.  
- Latency dropped from 120 ms (monolith) to <25 ms, improving conversion rates by **3%**.  
- Operational costs stayed below $4k/month; we saved ~30% compared to a self‑managed Nginx proxy.

*Learnings:* I owned the end‑to‑end rollout, diving deep into CloudWatch metrics to tune throttling, and iterated quickly—demonstrating **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
