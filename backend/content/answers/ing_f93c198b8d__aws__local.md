---
qid: ing_f93c198b8d__aws__local
question: 'Explain: The Interview Question — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 413
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:51-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to reduce the SLA for high‑volume support tickets from 48 hrs to 4 hrs while keeping cost per ticket < $2. This required automating triage and self‑service for 120k monthly queries.

**Action**  
I built an end‑to‑end solution using **Amazon Lex**, **Lambda**, and **S3**.  
1. *Data ingestion*: All tickets were streamed to Kinesis → Lambda for NLP scoring (sentiment + intent).  
2. *Automation layer*: Based on intent, the Lambda either (a) returned a dynamic FAQ from S3 (caching via CloudFront), or (b) routed to an ECS‑based microservice that generated a contextual chatbot reply.  
3. *Feedback loop*: Every resolved ticket fed back into a SageMaker model for continuous intent improvement.  

I chose Lex for instant scalability, Lambda for zero‑maintenance compute, and S3/CloudFront for cost‑effective content delivery (≈ $0.01 per request). Availability was 99.95 % via multi‑AZ deployment.

**Result**  
- SLA improved from 48 hrs to **4 hrs** (92 % reduction).  
- Automation handled **70 %** of tickets, cutting manual effort by **5,400 hours/month** and saving **$60k annually**.  
- Customer satisfaction rose from 78 % to **88 %**.

**Reflection**  
I practiced *Ownership* by owning the full pipeline and *Dive Deep* into NLP metrics to iterate quickly. The bar‑raiser will note my quantified impact, cross‑team collaboration, and learning loop that turned failures (initial misclassifications) into a robust retraining cadence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
