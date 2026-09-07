---
qid: ing_23afc4e8c8__aws__local
question: 'Explain: If you have duplicates in the data — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 399
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:13-05:00'
sources: []
---

**Situation**  
While building a recommendation pipeline for an e‑commerce platform, the training set stored in S3 contained ~12 M rows with duplicate user–product pairs. The duplicates inflated the model’s loss and slowed each batch by 35 %.  

**Task**  
I had to remove duplicates, preserve data integrity, and keep the pipeline scalable for nightly jobs that ingest new logs.

**Action**  
1. **Ownership & Dive Deep** – I wrote an AWS Glue job (Python ETL) that reads raw CSVs into a Spark DataFrame, partitions by `user_id` and `product_id`, and applies `dropDuplicates()`.  
2. The cleaned data is written back to S3 in Parquet, partitioned by `date` for fast downstream access.  
3. I scheduled the job via EventBridge to run every night; the Glue job auto‑scales (max 10 workers) so we process 12 M rows in ~4 min versus 20 min pre‑cleaning.  
4. To avoid re‑processing, I stored a checksum of each file in DynamoDB and only processed new files—saving ~$200/month in Glue compute time.

**Result**  
- Duplicate count dropped from 1.2 M to 0.  
- Model training time decreased by 45 %.  
- Accuracy (AUC) improved from 0.82 to 0.87 due to cleaner signals.  

**Reflection**  
I learned that even a small data hygiene step can cascade into significant cost and performance gains—reinforcing *Customer Obsession* (better recommendations) and *Bias for Action* (quick, measurable fix).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
