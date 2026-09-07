---
qid: ing_cdf8210312__aws__local
question: 'Explain: Stripe — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 425
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:52-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
During a sprint for the new *Stripe‑ML Insights* feature, our team discovered that the model training pipeline was ingesting ~5 TB of raw transaction logs daily, yet only ~10 % were used in the final predictions. This caused latency spikes and inflated storage costs.

*Task:*  
I owned the cleanup and redesign of the ingestion workflow to reduce data volume by 90% while keeping model fidelity.

*Action:*  
1. **Dive Deep** – I profiled the pipeline with AWS X-Ray, identified redundant fields and low‑variance features using statistical tests (Chi‑square, ANOVA).  
2. **Design** – Replaced the monolithic ETL job on EMR with a serverless flow:  
   * **AWS Glue** for schema discovery & incremental transformation,  
   * **Amazon Kinesis Data Streams** to buffer real‑time logs,  
   * **Lambda** functions to apply feature selection logic and push cleaned data to an S3 data lake.  
3. **Cost/Availability Trade‑off:** Serverless eliminates EC2 idle time (≈ 30% cost savings) and scales automatically; Glue’s 1‑hour job limit is mitigated by partitioning the stream into micro‑batches.

*Result:*  
Data volume dropped from 5 TB to 500 GB per day (+90% reduction). Training time decreased from 12 hrs to 2 hrs, cutting GPU usage costs by $3k/month. Model accuracy improved by 1.8% due to cleaner features.  

**Bar‑raiser signals:**  
- Demonstrated ownership of the problem end‑to‑end.  
- Deep technical dive into data profiling and AWS services.  
- Quantified impact (cost, time, accuracy).  
- Learned from initial failure (over‑engineering) by simplifying with serverless components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
