---
qid: ing_2bf7e8506b__star__local
question: 'Explain: Log-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 364
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:57-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had a monolithic database that served both the billing engine and the analytics dashboard. The engineering team needed real‑time updates in the data warehouse for fraud detection without locking tables during nightly ETL jobs.  

**Task:** I was tasked with designing a low‑latency Change Data Capture (CDC) pipeline that could stream all inserts, updates, and deletes from the operational database to the warehouse while guaranteeing exactly‑once delivery and minimal impact on production workloads.

**Action:** I chose a log‑based CDC approach using the database’s binary log. First, I set up a lightweight “log reader” service in Go that tail‑follows the binlog, parses each record into Avro messages, and publishes them to Kafka topics partitioned by table name. To handle ordering and deduplication, I embedded a monotonically increasing offset and transaction ID into each message. The consumer microservice (written in Rust) reads from Kafka, applies business‑specific transformations, and writes to Snowflake via the COPY command over S3, batching 5 MB per file to keep throughput high. I added idempotent upsert logic on the warehouse side using primary keys and a “last_updated” timestamp to avoid duplicate rows.

**Result:** The new CDC pipeline reduced data lag from 12 hours to under 30 seconds for most tables, increased fraud‑alert accuracy by 18% (because models saw fresher data), and cut our nightly ETL cost by 40% by eliminating full table scans. I learned that careful offset management and idempotent writes are critical for reliable CDC in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
