---
qid: ing_59067cea0d__star__local
question: 'Explain: Historical replication jobs — Log-based Incremental Replication
  | Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 376
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:39-05:00'
sources: []
---

**Situation:**  
At my last company we migrated our data warehouse from on‑prem to Snowflake. The legacy ETL was a nightly batch that reloaded all customer tables, causing a two‑hour lag and unnecessary load on the source DB.

**Task:**  
I had to cut that latency in half while preserving data integrity, so the analytics team could see near real‑time customer activity without over‑loading our PostgreSQL instance.

**Action:**  
I set up Stitch’s *Historical Replication* job for the customer tables. First, I enabled “Log‑Based Incremental Replication” in Stitch, pointing it to the PostgreSQL WAL (write‑ahead log) via a logical replication slot. This allowed Stitch to stream only DML changes—INSERTs, UPDATEs, and DELETEs—into Snowflake every 10 seconds. To avoid duplicate rows, I configured a primary key on the target table and set Stitch’s “Update” mode to “Upsert.” I also added a lightweight CDC (Change Data Capture) filter in Stitch to ignore test data, trimming bandwidth by ~30%. Finally, I scheduled a nightly full refresh of the entire customer dataset every Sunday at 02:00 UTC to catch any missed changes and keep both schemas aligned.

**Result:**  
The replication lag dropped from two hours to under 15 seconds for most tables. Query latency on our BI dashboards improved by 70%, and we eliminated the nightly load spike on PostgreSQL, freeing up resources for other workloads. I learned that a well‑tuned log‑based incremental pipeline can dramatically reduce operational cost while maintaining data freshness—an approach I now advocate whenever moving to cloud warehouses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
