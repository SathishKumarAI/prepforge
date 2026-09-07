---
qid: ing_d2672f3761__aws__local
question: 'Explain: Marketing — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 438
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:18-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size SaaS firm I led the launch of an ML‑driven marketing recommendation engine that suggested personalized job listings to users (“Marketing — Jobs at Glean”). The goal was to increase click‑through rate (CTR) by 15 % and reduce churn by 5 % within six months.

**Action**  
*Customer Obsession & Ownership*: I owned the end‑to‑end pipeline—data ingestion, feature engineering, model training, and deployment.  
- **Data Layer**: Ingested ~1 TB of user interaction logs via Kinesis Data Firehose into S3, then processed with Glue ETL to populate a Redshift data warehouse for fast querying.  
- **Model Training**: Trained a LightGBM ranking model on SageMaker, tuning hyper‑parameters through automated Hyperparameter Tuning jobs (≈ 30 % faster than manual grid search).  
- **Serving Layer**: Deployed the model as a real‑time inference endpoint with SageMaker Hosting Services behind an Application Load Balancer. For batch recommendations, used Lambda to trigger nightly SageMaker batch transform jobs and store results in DynamoDB for low‑latency read by the front end.  

*Bias for Action & Deliver Results*: I cut deployment time from 4 weeks (manual) to 2 days using CI/CD pipelines on CodePipeline + CloudFormation.

**Result**  
- CTR rose 23 % (+8 pp above target).  
- Monthly churn dropped by 6 %.  
- Cost per recommendation stayed under $0.001, a 40 % reduction versus the legacy rule‑based system.  

**Learnings & Bar‑raiser Check**  
I documented every assumption, performed A/B tests to validate ROI, and iterated on feature importance analysis—demonstrating deep dive ownership and continuous learning from early model drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
