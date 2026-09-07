---
qid: ing_f282d198ee__aws__local
question: 'Explain: Anthropic System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 447
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:56-05:00'
sources: []
---

**Situation & Task**  
I was hired as a senior ML engineer at an FAANG‑style company to architect a production‑grade recommendation engine that needed to serve millions of users with < 200 ms latency and 99.9 % availability. The leadership team wanted us to leverage **Anthropic’s Claude** for natural‑language filtering while keeping cost under $1M/month.

**Action – Design & AWS Services**  
* **Data ingestion**: S3 + Kinesis Data Streams → Lambda for real‑time feature extraction (CPU‑intensive).  
* **Feature store**: DynamoDB Global Tables for low‑latency user profiles; Redis Cache (ElastiCache) for hot features.  
* **Model serving**: SageMaker Endpoint (multi‑model endpoint) hosting both our collaborative filtering model and Claude for content moderation, deployed across two AZs with auto‑scaling based on CloudWatch metrics.  
* **Routing**: API Gateway + Lambda authorizer → request is split: 70 % to the recommendation model, 30 % to Claude (via Runtime Invoke).  
* **Observability**: CloudWatch Logs, X-Ray for end‑to‑end tracing; S3 for audit logs.  

I performed a **cost–benefit analysis**: estimated 150 k requests/day → ~$0.06 per request for SageMaker + $0.02 for Claude calls = ~$9K/month, well below the target.

**Result**  
- Latency dropped from 350 ms to 180 ms (30% improvement).  
- Availability hit 99.97 %.  
- User engagement increased by 12 % within two weeks of launch.  

**Reflection**  
I owned the trade‑off between cost and latency, iterated on model batching after a failed first rollout that caused timeouts, and documented the lessons in our internal playbook—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
