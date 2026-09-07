---
qid: ing_e6cf33b276__aws__local
question: 'Explain: Land Your Dream Data or AI Role — Data Science & AI Interview
  Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 431
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:06-05:00'
sources: []
---

**Customer Obsession + Ownership**

> *S – Situation*: I was interviewing for a senior ML engineer at a fintech startup that needed an end‑to‑end recommendation engine.  
> *T – Task*: Deliver a prototype within two weeks, prove it scales to 10M users, and show measurable lift in conversion.  
> *A – Action*:  
> 1. **Requirements & Architecture** – I scoped the data pipeline: raw clickstream → S3 → Glue ETL → Redshift for feature store; model training on SageMaker with hyper‑parameter tuning; inference via Lambda + API Gateway behind CloudFront.  
> 2. **Dive Deep** – Logged latency (avg 12 ms), cost ($0.02 per inference), and error rates (<0.1%). Implemented auto‑scaling for Lambda, reserved concurrency on SageMaker endpoints to guarantee 99.9% availability.  
> 3. **Bias for Action** – Built a CI/CD pipeline with CodePipeline + CloudFormation; rolled out the model in blue/green to mitigate risk.  
> *R – Result*: The pilot increased click‑through by 27 % and revenue per user by $0.35, while keeping inference cost <30 ¢ per day for 10M active users. I documented the learnings and presented them in a post‑mortem, which became the internal playbook for future ML projects.

**Bar‑raiser focus:**  
- Ownership: led all phases from data ingestion to deployment.  
- Dive deep: quantified latency, cost, and error metrics; used AWS services to balance scalability & budget.  
- Quantified impact: 27 % lift in engagement, $0.35 per user revenue bump.  
- Learning: identified that using SageMaker’s built‑in AutoML reduced dev time by 40 %, a lesson I shared with the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
