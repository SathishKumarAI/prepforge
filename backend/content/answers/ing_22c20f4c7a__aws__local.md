---
qid: ing_22c20f4c7a__aws__local
question: 'Explain: Tier 1 - cheap classifier on 100% of traffic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 354
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:17-05:00'
sources: []
---

**Situation & Task**  
I was tasked to reduce inference cost for a real‑time recommendation engine that processed ~5 M requests per day. The goal: run a lightweight Tier 1 classifier on *all* traffic, flag only the high‑confidence cases for an expensive Tier 2 model.

**Action (Design)**  
- Built a 12‑parameter logistic regression in **Amazon SageMaker Studio**, trained on a 10‑% sample of traffic, then exported to **AWS Lambda** as a container image.  
- Lambda was fronted by an **API Gateway** with throttling set at 10 k RPS, ensuring high availability.  
- The model output (probability) is stored in **DynamoDB**; requests with score ≥ 0.8 are routed via **Step Functions** to a GPU‑based SageMaker endpoint for Tier 2 inference.

**Result**  
- Reduced expensive GPU invocations from 5 M/day to ~700k/day, cutting compute spend by **68% ($18k/month)** while maintaining overall accuracy within ±1%.  
- Latency stayed < 30 ms for 95 % of requests due to Lambda’s cold‑start mitigation.

**Learning & Ownership**  
I own the end‑to‑end pipeline and continuously monitor drift with CloudWatch metrics. After a false‑positive spike, I retrained the logistic model on fresh data, improving precision by 3%.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
