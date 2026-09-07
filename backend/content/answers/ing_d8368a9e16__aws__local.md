---
qid: ing_d8368a9e16__aws__local
question: 'Explain: Databases — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 479
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:29-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑Ops team at a fintech startup, we had to migrate 4 TB of structured transactional data from an on‑prem IBM DB2 to a cloud‑native ML pipeline for fraud detection. The goal was to enable real‑time inference with <1 s latency and 99.9% availability.

**Action**  
I owned the end‑to‑end migration, scoped it in two phases:  
1. **Data lake ingestion** – Used AWS Glue (ETL) + S3 to surface raw data; leveraged Glue Catalog for schema discovery.  
2. **Analytics layer** – Deployed Amazon Athena on partitioned Parquet files for exploratory queries and built a materialized view in Amazon Redshift Spectrum for ML feature extraction.

For the model, I orchestrated an SageMaker training job that consumed the Redshift‑based feature table via Data Wrangler, achieving 95% AUC. The inference endpoint was placed behind an Application Load Balancer with Auto Scaling (target CPU < 70%) to maintain <1 s latency under 10k concurrent requests.

**Result**  
Post‑migration, query times dropped from 12 min to 3 sec (4× speedup). Fraud detection accuracy improved by 7% (AUC 0.95 vs 0.88). Operational costs fell 35% due to serverless Athena and spot instances for training.

**Reflection & Learning**  
I realized the importance of *Dive Deep* into schema evolution patterns; a small change in column naming caused Glue failures, so I added automated schema validation tests. This experience reinforced my *Ownership* mindset—owning both data integrity and ML outcomes—and taught me to iterate quickly with A/B testing before full rollout.

---

**Bar‑raiser cues**  
- Demonstrated **ownership** of migration & model performance.  
- Showed **dive deep** by identifying schema issues and automating validation.  
- Quantified impact (speed, accuracy, cost).  
- Highlighted learning from failure (schema drift handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
