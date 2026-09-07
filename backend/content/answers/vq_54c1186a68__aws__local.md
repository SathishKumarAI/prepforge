---
qid: vq_54c1186a68__aws__local
question: How to remove duplicates records in dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 368
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:52-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
While refactoring our nightly ETL pipeline for the Retail Analytics team, I noticed that 12 % of incoming sales rows were duplicated due to upstream system glitches. The duplicates inflated revenue metrics and mis‑guided inventory decisions.

**Action (Ownership + Dive Deep)**  
1. **Diagnose** – In Spark on EMR, I added a `DataFrame.explain()` step to confirm the duplicate keys (`order_id, timestamp`).  
2. **Deduplicate** – Used `df.dropDuplicates(['order_id', 'timestamp'])`. For large volumes (~250 M rows) I partitioned by `store_id` and ran `repartition(200)` to parallelize the operation.  
3. **Validate** – Wrote a unit test that compares row counts before/after and asserts no duplicate keys exist (`df.select('order_id').distinct().count() == df.count()`).  
4. **Automate & Monitor** – Scheduled via AWS Glue, logged metrics in CloudWatch (duplicate count, processing time), and set an SNS alert if duplicates exceed 5 % of total rows.

**Result (Deliver Results)**  
- Reduced duplicate data from 12 % to <0.1 %.  
- Cut ETL runtime by 18 % (from 45 min to 37 min).  
- Saved ~$3K/month in unnecessary storage and compute costs on S3 & EMR.

**Learning** – Early detection of upstream data quality issues is cheaper than downstream fixes; continuous monitoring turned a one‑off fix into an automated, self‑healing process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
