---
qid: ing_160ac033e2__aws__local
question: 'Explain: Phone screen — OpenAI System Design Interview (2026 Guide) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 411
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:12-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a production‑grade, low‑latency chatbot that could serve 10 M active users daily, each user making ~20 requests per hour. The goal: <200 ms average response time and 99.9 % uptime while keeping costs under $2 M/month.

**Action**  
*Customer Obsession & Ownership*: I mapped the end‑to‑end flow—API gateway → Lambda → SageMaker endpoint → DynamoDB for session state → CloudFront edge cache.  
*Dive Deep & Bias for Action*: Built a multi‑region SageMaker inference cluster with autoscaling based on request latency. Employed **Amazon ECS** + **EFS** to host large embedding files, reducing cold‑start time by 70 %. Added a **Redis‑based cache (ElastiCache)** at edge locations; hit rate rose from 45 % to 92 %, cutting inference calls by 50 %.  
*Invent & Simplify*: Replaced the monolithic model with a two‑stage pipeline—first a lightweight LSTM for intent, then a large transformer only when needed. This cut GPU usage by 35 %.  
*Deliver Results*: Achieved 190 ms average latency, 99.95 % uptime, and cost savings of $1.2 M/month versus baseline.

**Result**  
User satisfaction scores (NPS) improved from 48 to 82 within the first quarter. The design also allowed incremental rollout of newer models without downtime. I documented failure modes (e.g., cache invalidation) and automated rollback, ensuring resilience.  

> **Bar‑raiser notes:** Clear ownership, deep architectural choices, quantified impact, learning loop for failures—all align with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
