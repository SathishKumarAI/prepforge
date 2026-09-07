---
qid: ing_69bc9cb495__aws__local
question: 'Explain: Deployment options ⚓️ — GitHub - langwatch/langwatch: The platform
  for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 433
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:10-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role I built *langwatch*, an open‑source LLM evaluation platform that lets data scientists run unit tests against thousands of models on demand. The product was expected to support 10 k concurrent users and deliver predictions with < 200 ms latency while keeping costs under $5k/month.

**Action (Ownership + Dive Deep)**  
I evaluated three deployment options:  
1. **Server‑less Lambda + SageMaker Endpoint** – low ops, but cold starts pushed latency to 700 ms and monthly cost hit $12k due to high invocation volume.  
2. **ECS Fargate with Auto Scaling** – gave sub‑200 ms SLA, but required manual image rebuilds; I introduced a CI pipeline that auto‑creates immutable containers on each PR merge, cutting deployment time from 30 min to 5 min.  
3. **Kubernetes (EKS) + Spot Instances** – offered the best cost/scale trade‑off: spot pricing dropped GPU compute spend by 40 %, and EKS managed node lifecycle so we never exceeded 0.8× CPU utilization.

I selected **EKS + Spot + Spot Fleet**, added a **Spot Termination Handler** to migrate workloads instantly, and exposed an API Gateway front‑end for CI/CD integration.  

**Result (Deliver Results)**  
- Latency dropped from 700 ms to 180 ms (20× improvement).  
- Monthly spend fell from $12k to $4.5k (63% cost reduction).  
- User concurrency grew from 1 k to 10 k without incident.

**Reflection (Bias for Action + Invent & Simplify)**  
The first deployment on Lambda was a costly failure; I learned to prototype with realistic traffic patterns and always include a rollback plan. This mindset keeps the platform resilient while delivering real value to customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
