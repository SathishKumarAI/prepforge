---
qid: ing_be981cd5fb__star__local
question: 'Explain: backups and you can restore them at — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 354
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:14-05:00'
sources: []
---

**Situation:**  
While building a recommendation engine for an e‑commerce platform, we stored user interaction logs in Amazon DynamoDB. A critical bug in our ingestion job caused data corruption on three tables, and we needed a quick restore to keep the model training pipeline running.

**Task:**  
Recover the last clean state of the three tables within 30 minutes so that downstream ML jobs could resume without losing recent traffic insights or violating GDPR retention policies.

**Action:**  
I leveraged DynamoDB’s point‑in‑time recovery (PITR) and on‑demand backup features. First, I queried the AWS CloudTrail logs to locate the exact timestamp before the corruption. Then, using the AWS CLI, I initiated a restore of each table to a new resource name (`*_restore_20240905`). While the restores were in progress, I spun up an EC2 spot instance running a lightweight Spark job that streamed the restored tables into S3 as Parquet files for fast access by the ML pipeline. Finally, I updated our Lambda ingestion code to point to the new table names and scheduled an automated fail‑over script.

**Result:**  
All three tables were restored in 22 minutes, and the recommendation model resumed training with only a 0.8 % increase in data lag. The incident also prompted us to enable continuous backups for all production tables, reducing future recovery time by ~70 %. I learned that combining PITR with automated restore scripts can turn a catastrophic data loss into a quick, controlled rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
