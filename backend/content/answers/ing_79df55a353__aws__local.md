---
qid: ing_79df55a353__aws__local
question: 'Explain: Capacity Estimation — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:39-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a *capacity‑estimation* engine for an e‑commerce platform that predicts daily inventory needs across 3 M SKUs. The goal: reduce stockouts by 15% while keeping storage costs <5% of revenue.

**Action**  
1. **Requirements & Dive Deep** – I scoped the data pipeline (real‑time clickstream + historical sales), identified latency (<30 s) and accuracy (>95%) targets, and mapped them to AWS services:  
   - *Kinesis Data Streams* → ingestion  
   - *Glue* → ETL & feature engineering  
   - *SageMaker Pipelines* → model training (XGBoost)  
   - *Evidently* for monitoring drift  
   - *Redshift Spectrum* + *Athena* for analytics.  

2. **Design** – I partitioned data by region, used **DynamoDB Global Tables** for low‑latency SKU lookups, and scheduled nightly batch jobs on **EMR** to refresh model weights. Autoscaling was driven by CloudWatch metrics (CPU & queue depth).  

3. **Scalability & Cost** – Leveraging serverless components (Lambda + Step Functions) cut CAPEX; spot instances for EMR reduced cost 40%. I simulated peak traffic (5 k TPS) and confirmed <99.9% availability with multi‑AZ deployment.

4. **Result**  
   - Stockout rate fell from 12% to 8.3% (+30%) in three months.  
   - Storage costs decreased by 4%, meeting the budget target.  

**Reflection** – I learned that *Ownership* means iterating on metrics, and *Bias for Action* drives quick prototyping. The bar‑raiser will note my end‑to‑end ownership, deep dive into AWS trade‑offs, and quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
