---
qid: vq_54c1186a68__star__local
question: How to remove duplicates records in dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:28-05:00'
sources: []
---

**Situation:**  
At my previous role I was responsible for the nightly ingestion of click‑stream logs into a Snowflake warehouse. The raw Kafka stream contained duplicate user actions because multiple microservices sent the same event before deduplication, and our daily metrics were skewed by up to 15 % overcount.

**Task:**  
I had to design an automated Spark job that removed duplicates in real time while preserving latency (<10 min) and ensuring idempotent writes to Snowflake.

**Action:**  
Using PySpark I read the raw Parquet files into a DataFrame, then applied `dropDuplicates(['user_id', 'event_time', 'action_type'])` for a quick baseline. To catch edge cases where the same event could have slightly different timestamps (±2 s), I introduced a Window partition over `user_id, action_type` ordered by `event_time`, and kept only rows with `row_number() == 1`. This ensured consistent deduplication even when events arrived out of order. Finally, I persisted the cleaned DataFrame to Snowflake via JDBC with `overwrite=True` on a daily partition.

**Result:**  
The deduplication reduced reported clicks by 13 % and improved accuracy of our conversion funnel metrics. The job completed within 8 minutes each cycle, meeting SLA, and I documented the logic in our data‑catalog for future maintainers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
