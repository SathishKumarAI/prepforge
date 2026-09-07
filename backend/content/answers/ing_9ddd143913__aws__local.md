---
qid: ing_9ddd143913__aws__local
question: 'Explain: Data Characteristics — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 488
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:59-05:00'
sources: []
---

**Data‑Characteristics Prep for a ML System Design Interview**

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*

**Situation & Task (S):**  
When I joined my last company, the data science team needed a production pipeline to serve 10 M daily user events. The interview asked me to outline how we’d prepare the data before feeding it into an ML model.

**Action (A):**  
1. **Audit & Profile** – Used *Amazon Athena* on S3 to run `SELECT COUNT(*), AVG(size), MIN(timestamp), MAX(timestamp)` across raw logs, discovering 12 % skew in event types and a 30‑day retention gap.  
2. **Schema Normalization** – Designed a star schema in *Redshift*, partitioned by day and sharded on user_id to avoid hot spots—cut query latency from 4 s to <0.5 s.  
3. **Feature Engineering Pipeline** – Leveraged *AWS Glue* jobs (Python/Scala) scheduled nightly, outputting Parquet into a feature store in *Amazon SageMaker Feature Store*. This reduced data duplication by 85% and ensured ACID semantics for downstream models.  
4. **Quality & Governance** – Implemented *DataBrew* recipes to enforce null‑handling, outlier capping, and schema drift alerts via CloudWatch.

**Result (R):**  
The engineered dataset enabled a churn model that improved prediction AUC from 0.72 to 0.87 in two weeks, translating into $1.2 M incremental revenue per quarter. The end‑to‑end pipeline cost <$5k/month versus the legacy $12k, and we achieved 99.9% availability with cross‑region replication.

**Bar‑raiser notes:**  
- Demonstrated *ownership* by turning raw logs into a reusable feature store.  
- Showed *depth* through specific AWS services and performance metrics.  
- Quantified impact (AUC lift, revenue, cost savings).  
- Learned from failure: initial Glue job failed on 10% of records—implemented retry logic and incremental loads, reducing failures to <0.1%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
