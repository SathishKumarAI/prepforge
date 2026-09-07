---
qid: ing_25099e8fb7__aws__local
question: 'Explain: Automatic Prompt Design — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:11-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a *“Prompt‑as‑a‑Service”* platform for a SaaS marketing tool that let non‑technical users auto‑generate email copy. The goal: reduce the time to first‑draft from **2 hours → 30 seconds**, while keeping quality (BLEU score) above 0.78.

**Action – Design & Implementation**  
1. **Data Pipeline** – *S3* + *Glue* ingested 10M historical emails, tagged by industry and sentiment.  
2. **Model Hosting** – Deployed a fine‑tuned GPT‑4 via **Amazon SageMaker Endpoint**, autoscaling between 2–8 instances based on CloudWatch metrics.  
3. **Prompt Generation Service** – *AWS Lambda* (Node.js) wrapped the endpoint, applied templating rules and user context from **DynamoDB**.  
4. **API Layer** – *API Gateway* exposed a REST endpoint; *WAF* protected against injection attacks.  
5. **Observability** – CloudWatch Logs + X-Ray traced latency; SageMaker’s built‑in monitoring fed back to Lambda for dynamic prompt tuning.

**Result**  
- Latency dropped from 120 s to **0.3 s** (99th percentile).  
- BLEU score improved to **0.81**.  
- Cost per request fell by **45%** due to efficient autoscaling and use of *Savings Plans* on SageMaker.

**Reflection – Leadership Principles**  
- **Ownership & Bias for Action**: I drove the full stack, from data ingestion to monitoring, without waiting for infra teams.  
- **Dive Deep**: Iteratively profiled Lambda cold‑starts, discovered that moving the prompt cache to *ElastiCache* cut latency by 15%.  

The bar‑raiser will note my end‑to‑end ownership, measurable impact, and continuous learning loop (prompt tuning based on real user feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
