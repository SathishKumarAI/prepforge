---
qid: ing_aa3accb39d__star__local
question: 'Explain: Log-based Incremental Replication | Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 330
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:54-05:00'
sources: []
---

**Situation:**  
At my previous company we had a legacy data warehouse on Snowflake that was updated nightly from several transactional databases. The ETL pipeline took almost eight hours, and the business users were frustrated because they couldn't see fresh sales data until the next morning.

**Task:**  
I was tasked with cutting the refresh time to under two hours while still keeping the load cost‑effective and ensuring no duplicate records or gaps in the stream.

**Action:**  
I researched Stitch’s log‑based incremental replication. Instead of re‑extracting full tables, Stitch reads the database transaction logs (MySQL binlog, PostgreSQL WAL) and streams only changed rows to Snowflake via Kafka. I set up a dedicated Stitch connector for each source, configured CDC flags, and used Snowpipe to auto‑load micro‑batches as they arrived. To avoid duplicates I added a composite primary key on the target tables and leveraged Snowflake’s “merge” statement to perform idempotent upserts. I also implemented alerting in CloudWatch when replication lag exceeded 15 minutes.

**Result:**  
The pipeline now refreshes every 90 minutes, cutting nightly load time from 8 hours to under 2 hours. Data freshness improved dramatically, and we saw a 30% reduction in storage costs because only incremental changes were written. I learned how log‑based CDC can turn a heavy batch process into an efficient real‑time stream while keeping data integrity intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
