---
qid: ing_d79176dd73__aws__local
question: 'Explain: Step 3 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 403
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:47-05:00'
sources: []
---

**Situation** – While leading the launch of a new e‑commerce platform, we projected **10 M concurrent users** at peak (holiday season).  
**Task** – Design a highly available, cost‑efficient architecture that scales automatically while keeping latency < 200 ms.

**Action** –  
1. *Customer Obsession* & *Ownership*: I mapped user journeys and identified the critical path: **search → product page → checkout**.  
2. *Dive Deep*: Built an event‑driven microservice stack on **Amazon API Gateway + Lambda** (stateless, auto‑scaling).  
3. *Bias for Action*: Deployed a global **Route 53 latency routing** with edge caching in **CloudFront** and origin‑based cache invalidation from SQS triggers.  
4. *Invent & Simplify*: Introduced **Amazon DynamoDB Global Tables** for session data, eliminating read bottlenecks; used **DAX** for 99th‑percentile < 10 ms reads.  
5. *Deliver Results*: Implemented auto‑scaling on CloudWatch metrics (CPU, RPS) and cost alerts via Budgets.

**Result** – During the first holiday wave we handled **12 M users**, 3× the forecast, with average latency 120 ms, 99th‑percentile < 250 ms, and total spend $0.03 per request—30% below budget.  

**Bar‑raiser note** – The solution shows ownership (end‑to‑end design), deep dive into latency trade‑offs, quantified impact (metrics above), and a learning loop: post‑mortem identified DynamoDB throttling; we added on‑demand capacity for future peaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
