---
qid: vq_c726df0e7d__fp__local
question: What is default database of Apache sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 311
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:43-05:00'
sources: []
---

In Sqoop the *default* database is **MySQL**.  
Why this choice?  

1. **Problem solved** – Sqoop’s core job is to transfer data between Hadoop and a relational store. The tool must be able to issue SQL, fetch metadata, and stream rows in bulk.  
2. **Design principle** – It needs a “one‑size‑fits‑all” backend for its own configuration tables (e.g., `sqoop-job`), transaction logging, and the built‑in examples that ship with the distribution. A lightweight RDBMS that is bundled with most Hadoop distributions satisfies this without extra installation steps.  
3. **Why MySQL?** – It’s open source, cross‑platform, and the default JDBC driver (`com.mysql.jdbc.Driver`) is already packaged in Sqoop. Moreover, its data type mapping aligns closely with Hive/Hadoop types, simplifying the code that converts `ResultSet` to Parquet/Avro.  
4. **Non‑obvious insight** – The “default” database is not a performance recommendation; it’s an *implementation convenience*. By hard‑coding MySQL, Sqoop can ship a ready‑to‑use, self‑contained configuration store that works out of the box on any machine where Java runs, even if the user never uses that DB for their own data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
