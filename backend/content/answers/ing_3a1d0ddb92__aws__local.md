---
qid: ing_3a1d0ddb92__aws__local
question: 'Explain: Case studies — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 369
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:40-05:00'
sources: []
---

**Situation & Task**  
While leading a product‑line at my previous company, we were asked to launch an AI‑driven recommendation engine that could serve millions of users in real time while keeping latency under 50 ms and staying within a $200k annual budget.

**Action – Design & Architecture**  
I scoped the solution around **Amazon SageMaker** for training (using Spot Instances to cut compute costs by 35%) and **Amazon Personalize** for inference, wrapped in an **API Gateway + Lambda** layer that cached results in **ElastiCache‑Redis**. To guarantee availability I deployed across two AZs with Auto Scaling groups and used **AWS WAF** for security. For observability I integrated **CloudWatch Metrics/Logs** and set up a **step‑function** to roll back if error rates exceeded 1 %.  

I owned the trade‑offs: choosing SageMaker over custom GPU clusters saved $80k per month; caching reduced API calls by 60%, cutting Lambda invocations and cost. I also instituted an A/B test loop, capturing CTR improvements of **12%** in the first week.

**Result**  
The system handled 5 M requests/day with 99.9 % uptime, stayed under budget, and boosted revenue by $1.2 M annually—meeting both Customer Obsession (faster recommendations) and Deliver Results.

**Bar‑raiser focus** – I demonstrated ownership, deep dive into cost/latency trade‑offs, quantified impact, and learned from a failed cache eviction rule that caused a spike in latency, which we fixed by adding TTL logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
