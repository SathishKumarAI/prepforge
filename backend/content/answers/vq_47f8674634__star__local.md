---
qid: vq_47f8674634__star__local
question: WHAT IS A SAVEPOINT IN SQL TRANSACTIONS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 326
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:24-05:00'
sources: []
---

**Situation:**  
During a quarterly data warehouse migration at my previous company, we were moving 12 GB of transactional logs from the legacy system into Snowflake. The ETL job ran in a single large transaction to guarantee consistency, but a downstream analytics query started failing midway due to a schema change that wasn’t yet propagated.

**Task:**  
I needed to pause the migration, correct the schema issue, and then resume the load without losing any data or restarting the entire 2‑hour transaction.

**Action:**  
I introduced a series of `SAVEPOINT` statements after each batch of 500 MB. When the query error surfaced, I rolled back only to the most recent savepoint with `ROLLBACK TO SAVEPOINT sp_500mb`. This allowed me to apply the schema patch and re‑execute the failed batch while preserving all previously committed batches. I also added a lightweight logging table to track which savepoints had succeeded, so future runs could skip already processed chunks.

**Result:**  
The migration finished 25 % faster than the planned schedule, with zero data loss and no need for a full rollback. The use of savepoints reduced manual intervention time by 40 minutes and taught me the value of granular transaction control in large ETL pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
