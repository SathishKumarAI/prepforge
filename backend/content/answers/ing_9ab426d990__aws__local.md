---
qid: ing_9ab426d990__aws__local
question: 'Explain: So we''re definitely going to play around'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:03-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team tasked with reducing the churn rate for our SaaS product from 12 % to under 5 % within six months. The hypothesis was that predictive churn models could surface at‑risk users earlier.

**Action (Technical)**  
I scoped the solution:  
1. **Data ingestion** – Amazon Kinesis Data Streams fed real‑time user activity into an S3 lake nightly.  
2. **Feature store** – AWS Glue crawlers populated a Lake Formation catalog; we used SageMaker Feature Store for low‑latency feature retrieval.  
3. **Model training** – A distributed XGBoost job on SageMaker trained on 200 M rows, achieving an AUROC of .87.  
4. **Deployment** – The model was served via SageMaker Endpoint behind an Application Load Balancer; predictions were batched into DynamoDB for downstream personalization pipelines.  
5. **Monitoring & Retraining** – CloudWatch alarms triggered a retrain every 30 days, keeping drift below 3 %.  

I championed **Ownership** by taking responsibility for the full ML lifecycle and **Dive Deep** by automating data quality checks (AWS Lambda + SNS alerts). 

**Result**  
Within three months of rollout we cut churn from 12 % to 4.2 %—a **66 % reduction**. Cost per prediction stayed under $0.02, keeping the ML budget below 5 % of overall ops spend.

**Learning & Bar‑raiser cues**  
I documented failure points (initial feature lag) and iterated on the pipeline, showing continuous learning. The bar‑raiser would note my end‑to‑end ownership, quantitative impact, and proactive risk mitigation—key traits for a high‑impact ML engineer at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
