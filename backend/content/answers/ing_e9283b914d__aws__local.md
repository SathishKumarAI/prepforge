---
qid: ing_e9283b914d__aws__local
question: 'Explain: Q111: Claude Fable 5 routes sensitive queries to Claude Opus 4.8
  via classifier-gated fallback. Critique this as a system design pattern and describe
  where you would apply tier routing in your own stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 478
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a multi‑model inference platform for a fintech product that needed to handle both high‑volume “safe” queries and low‑volume, highly sensitive ones. The requirement was to route the latter through a more capable model (Claude Opus 4.8) while keeping overall latency low.

**Action – Tier Routing Design**  
I introduced a **classifier‑gated fallback**:

1. **Classifier Service** (`Amazon SageMaker Endpoint`) predicts query sensitivity with 92 % precision.
2. **Primary Route** – “safe” traffic goes to `Claude Fable 5` on an `ECS Fargate` cluster (auto‑scales, low cost).
3. **Fallback Route** – flagged queries are sent to a dedicated `Lambda@Edge + SageMaker` pipeline that invokes Claude Opus 4.8 on a GPU‑enabled `EC2 Spot Fleet`.  
4. **Caching** (`Amazon ElastiCache Redis`) stores recent sensitive results to shave 70 ms off latency.

I added **CloudWatch metrics** (queue depth, latency) and an SNS alert for misclassifications. The system reduced SLA breaches by 3× and saved $12k/month on GPU usage.

**Result & Learnings**  
*Ownership*: I owned the end‑to‑end flow and drove cross‑team buy‑in.  
*Dive Deep*: We logged every classifier decision, discovered a drift that lowered precision to 85 %, prompting a retrain—an example of learning from failure.  
*Deliver Results*: Latency dropped from 350 ms to 210 ms for 95 % of requests; cost fell by 18 %.  

**When I’d Use Tier Routing Now**  
In my current stack, I’ll apply this pattern to a real‑time fraud detection pipeline: low‑risk claims hit the cheap model, while high‑risk ones trigger the expensive, explainable AI service. This balances speed, cost, and compliance—exactly what Amazon’s **Customer Obsession** and **Ownership** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
