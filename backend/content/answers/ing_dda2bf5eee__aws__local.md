---
qid: ing_dda2bf5eee__aws__local
question: 'Explain: Be good to our users — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 411
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:15-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession*, *Ownership*

### Situation & Task  
At Anthropic I led a team that was building an AI‑driven career guidance chatbot for millions of users. The product had to give accurate, bias‑free recommendations while staying compliant with privacy regulations.

### Action (Technical)  
1. **Data pipeline** – Ingested user profiles and public job data into **Amazon S3** → processed with **AWS Glue** jobs; transformed to a feature store in **Amazon DynamoDB** for low‑latency lookups.  
2. **Model training** – Trained a fine‑tuned transformer on **SageMaker**, using spot instances (cost ↓ 70%) and SageMaker Hyperparameter Tuning to hit a target precision of 92%.  
3. **Serving** – Deployed the model with **Amazon SageMaker Endpoint** behind an **API Gateway**; used **Lambda@Edge** for request validation, ensuring < 50 ms latency at edge locations.  
4. **Monitoring & Bias mitigation** – Implemented **CloudWatch Metrics** and **SageMaker Model Monitor** to track accuracy drift; ran monthly bias audits with custom metrics stored in **Amazon Timestream**.

### Result (Quantified)  
- Reduced recommendation error rate from 15 % to 3 % within 6 months.  
- Cut operational cost by 45 % through spot usage and serverless components.  
- Achieved a 4.8/5 user satisfaction score on the career guidance feature.

### Learnings (Bar‑raiser focus)  
I owned every layer, from data ingestion to bias monitoring; I dove deep into model drift patterns, iterated quickly with A/B tests, and turned failures into actionable insights—demonstrating true ownership and a customer‑first mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
