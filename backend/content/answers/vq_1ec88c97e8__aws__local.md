---
qid: vq_1ec88c97e8__aws__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 376
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:51-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* A data‑science team needed to preprocess a 1 TB CSV of customer transactions stored in S3 before feeding it into an ML pipeline. The file contained categorical columns (e.g., `country`, `product_category`) that were encoded as strings, causing memory bloat and slow downstream training.

> *Task:* Convert those columns to efficient numeric codes while preserving interpretability, ensuring the process scales on AWS.

> *Action:*  
1. **Load lazily** with `pandas.read_csv(..., usecols=…)` and `dtype='category'`.  
2. Use `df['col'].cat.codes` to map each category to an integer code; keep a lookup dict (`{code: value}`) for reverse‑lookup in model explanations.  
3. Persist the transformed DataFrame back to S3 as Parquet with `df.to_parquet('s3://bucket/processed/')`.  
4. Automate via **AWS Glue** or **EMR Serverless** jobs; schedule nightly runs, monitor with CloudWatch.

> *Result:*  
- Memory usage dropped from ~12 GB to 2.5 GB (≈80% reduction).  
- Load time decreased from 45 min to 8 min on a single EMR node.  
- Training throughput improved by 3×, cutting AWS compute costs by ~$200/month.

> *Learned:* Always benchmark categorical encoding before full‑scale ingestion; small preprocessing optimizations can cascade into significant cost savings and faster model iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
