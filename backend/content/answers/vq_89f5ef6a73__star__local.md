---
qid: vq_89f5ef6a73__star__local
question: What are the relational databases supported in Sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 343
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:27-05:00'
sources: []
---

**Situation** – While migrating our on‑prem data warehouse to a Hadoop ecosystem, I was tasked with automating the transfer of transactional tables from several legacy systems into Hive for downstream analytics.

**Task** – The goal was to build a repeatable Sqoop workflow that could pull data from each source—Oracle, MySQL, Microsoft SQL Server and PostgreSQL—into HDFS without manual intervention or schema mismatches.

**Action** – I first catalogued the supported JDBC drivers in Sqoop’s documentation. Using the `--connect` parameter, I wrote a Bash script that iterated over a YAML file listing each database type, its connection URL, driver class, and table names. For Oracle I used `oracle.jdbc.driver.OracleDriver`, for MySQL `com.mysql.cj.jdbc.Driver`, for SQL Server `com.microsoft.sqlserver.jdbc.SQLServerDriver`, and for PostgreSQL `org.postgresql.Driver`. The script also handled authentication via a secure keystore and leveraged Sqoop’s `--split-by` option to parallelize the import across 8 mappers, ensuring balanced data chunks. I added a conditional check to skip tables that already existed in Hive, preventing duplicate loads.

**Result** – Within two weeks, we automated daily imports for 12 critical tables, reducing manual effort by 70 % and cutting ETL time from ~4 hours to under 30 minutes per batch. The exercise reinforced the importance of understanding Sqoop’s JDBC driver requirements and taught me how to orchestrate multi‑database ingestion pipelines efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
