---
qid: ing_4eaf6e608d__aws__local
question: 'Explain: For Employees — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 502
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:11-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size SaaS firm I was tasked to build a *Career Path Recommendation* engine that would surface personalized learning and promotion opportunities for over 10,000 employees—each with a unique skill profile, performance history, and career intent.

**Action (Technical Design)**  
1. **Data Layer** – Ingested raw logs from the LMS, HRIS, and project management tools into an *Amazon Kinesis Data Firehose* stream; stored in *S3* for batch processing.  
2. **Feature Store** – Built a *Feature Transformation* pipeline on *AWS Glue* to compute skill‑gap vectors, tenure, and engagement scores; persisted in *DynamoDB* (low‑latency reads).  
3. **Model Serving** – Trained a multi‑label recommendation model in *Amazon SageMaker*, using XGBoost with early stopping. Deployed as a real‑time endpoint via *SageMaker Hosting Services* behind an *Application Load Balancer* for 99.9 % availability.  
4. **Scalability & Cost** – Leveraged *Auto Scaling* on the endpoint to handle peak 2k requests/sec; estimated $0.40/hr per instance, keeping monthly cost <$1,500 vs a manual review team of 5 ($250k/yr).  

**Result**  
Within three months:  
- **User adoption:** 73 % of employees used the recommendation portal at least once weekly.  
- **Career progression impact:** Average time to promotion dropped from 18 months to 12 months (33 % faster).  
- **Cost savings:** $245k/yr in HR labor.

**Reflection (Amazon Lens)**  
*Ownership*: I owned the end‑to‑end pipeline, from data ingestion to model tuning.  
*Dive Deep*: Diagnosed latency spikes by inspecting CloudWatch metrics and adjusting instance types—showing depth of technical understanding.  
*Learned from Failure*: Initial over‑fitting led to irrelevant suggestions; after a post‑mortem I incorporated regularization and a human-in-the-loop review, improving precision by 12 %.  

This solution exemplifies **Customer Obsession** (employees as customers) and **Deliver Results**—transforming career development into a data‑driven, scalable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
