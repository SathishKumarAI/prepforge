---
qid: vq_4ab81e5caf__star__local
question: What does WITH CHECK do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 359
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:02-05:00'
sources: []
---

**Situation**  
At a fintech startup we were redesigning our nightly ETL pipeline that ingested raw transaction logs into Snowflake. The team noticed the new `WITH CHECK` clause on a staging table was silently rejecting rows, but the error logs were buried in the warehouse’s audit table and not immediately visible.

**Task**  
I had to investigate why data was being dropped, ensure the integrity constraints were correctly enforced, and provide a transparent way for analysts to see which records failed and why—all while keeping the pipeline running on schedule.

**Action**  
1. I examined the `CREATE TABLE … WITH CHECK` definition: it enforced referential integrity against our customer dimension (`customer_id` must exist).  
2. I added a pre‑load validation step that joined the staging rows to the dimension table and flagged mismatches in a separate “check failures” table.  
3. Leveraging Snowflake’s `SYSTEM$STREAMS`, I created a continuous stream on the staging table, so any row that violated the check constraint was automatically routed to an error sink with detailed context (row id, column values, error message).  
4. Finally, I updated our Airflow DAG to read from the error sink, generate a daily Slack alert and store a summary in BigQuery for compliance reporting.

**Result**  
The new monitoring caught 12 % of incoming rows that previously slipped through unnoticed, reduced downstream data quality issues by 35 %, and gave analysts instant visibility into constraint violations. I learned that `WITH CHECK` is not just a declarative safety net—it can be leveraged as an early warning system when paired with streaming and alerting pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
