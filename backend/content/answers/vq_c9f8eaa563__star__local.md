---
qid: vq_c9f8eaa563__star__local
question: Difference between Narrow & wide transformations?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 316
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:37-05:00'
sources: []
---

**Situation:** While leading the migration of our on‑prem ETL pipeline to Snowflake for a retail analytics platform, we noticed that nightly batch jobs were hitting timeouts and inflating costs.

**Task:** I needed to redesign the data flow so that each transformation ran efficiently within the new cloud environment, ensuring minimal compute usage and predictable runtimes.

**Action:** First, I identified *narrow* transformations—operations like filtering, mapping, or simple aggregations that touch each input row only once. I rewrote these steps as Spark mapPartitions functions, which allowed us to process data in a single pass without shuffling. Next, I isolated the *wide* transformations—joins and group‑by operations that require all rows of a key to be co‑located. For those, I used Snowflake’s micro‑partitioning and leveraged `HASH JOIN` hints to reduce shuffle traffic. I also added a cost model in Airflow to flag any wide transformation that exceeded our threshold of 10 % of total runtime.

**Result:** The refactored pipeline cut nightly execution time from 45 minutes to 12 minutes, dropping compute costs by ~60%. It also made the workflow more predictable, allowing us to schedule jobs during off‑peak hours. I learned that careful separation of narrow and wide steps—and matching them to the right runtime primitives—can dramatically improve performance in cloud data warehouses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
