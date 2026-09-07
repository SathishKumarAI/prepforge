---
qid: ing_a0dfbde622__aws__local
question: How do computer-use agents work? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 489
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:56-05:00'
sources: []
---

**Question:** *How do computer‑use agents work?*  

**S – Situation**  
I was tasked to build an autonomous ticket‑resolution bot for a SaaS platform that handled ~1 M support tickets/month. The goal was to reduce average first‑reply time from 4 h to under 30 min while keeping resolution quality above 90%.

**T – Task**  
Design a system that can read ticket content, decide the best action (auto‑reply, escalation, or self‑resolution), and learn continuously.

**A – Action**  
1. **Data ingestion:** Use *Amazon SQS* for decoupled queueing and *AWS Glue* to batch‑process logs into a data lake on *S3*.  
2. **NLP inference:** Deploy a fine‑tuned BERT model on *Amazon SageMaker Endpoint* (real‑time) and *Batch Transform* for nightly retraining.  
3. **Decision engine:** A lightweight Lambda function orchestrates the policy graph stored in *DynamoDB*, invoking *Step Functions* to route tickets to the correct microservice or human agent.  
4. **Feedback loop:** Store user satisfaction scores back into DynamoDB; a scheduled Lambda triggers model updates when accuracy drops below 95%.

**R – Result**  
- First‑reply time dropped from 240 min to **18 min** (25% improvement).  
- Self‑resolved tickets rose from 35% to **58%**, cutting support costs by $120K annually.  
- The system scaled to handle peak spikes of 10× normal load with <99.9% availability, and the total AWS spend was only 12% of the legacy on‑prem solution.

**Leadership Principles Highlighted:** *Customer Obsession* (delivering faster help), *Ownership* (end‑to‑end design & ops), *Dive Deep* (continuous metric monitoring), and *Bias for Action* (rapid prototyping with SageMaker).  

A bar‑raiser would look for the clear ownership narrative, the depth of technical choices (SQS vs SNS, Lambda vs EC2), quantified impact, and how failures (e.g., model drift) were learned from and corrected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
