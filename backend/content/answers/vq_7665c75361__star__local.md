---
qid: vq_7665c75361__star__local
question: How to calculate number of rows in table without using count function?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 328
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:08-05:00'
sources: []
---

**Situation**  
At my last role I was tasked to audit the size of a new fact table in Snowflake that had just hit 5 TB. The DBA didn’t want to run a full `SELECT COUNT(*)` because it would lock the warehouse for hours and the query planner warned about potential performance degradation.

**Task**  
I needed an accurate estimate of row count quickly enough to decide whether we could archive old partitions without impacting downstream dashboards, all while keeping the system responsive.

**Action**  
I leveraged Snowflake’s `INFORMATION_SCHEMA.TABLES` view which stores the exact number of rows per table as a column (`TABLE_ROWS`). I queried that metadata and cross‑checked with the `SYSTEM$STATISTICS` function for the same table. To validate, I performed a lightweight `SELECT COUNT(*) FROM TABLE LIMIT 1000` to confirm sampling accuracy, then used Snowflake’s automatic statistics engine to extrapolate the total. This approach avoided full scans, kept compute costs low, and provided a deterministic count because Snowflake maintains row counts as part of its metadata.

**Result**  
I delivered an exact figure—5 012 347 rows—in under 30 seconds, allowing us to purge 20% of old data safely. The process reduced warehouse load by 70% compared to the naive count and taught me how to use built‑in catalog tables for quick cardinality checks in large cloud warehouses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
