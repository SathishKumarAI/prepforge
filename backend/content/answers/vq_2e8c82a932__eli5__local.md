---
qid: vq_2e8c82a932__eli5__local
question: What are the destination types allowed in Sqoop Import command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 343
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:28-05:00'
sources: []
---

Imagine Sqoop as a mail‑man that carries parcels (your database rows) from one office (a relational DB) to several different kinds of storage “houses.”  
When you run **sqoop import**, you choose where the parcels should end up:

| Destination type | What it is | Why use it |
|-------------------|------------|-----------|
| **HDFS** – Hadoop Distributed File System | A big, fault‑tolerant file vault spread across many machines. | Store raw data for later processing or as a backup. |
| **Hive table** | A cataloged “table” inside Hive that sits on HDFS but can be queried with SQL‑like language. | Quick analytics without writing your own Hadoop jobs. |
| **HBase table** | A NoSQL key–value store built on top of HDFS, great for random access to huge rows. | When you need fast lookups or very large sparse data. |

You tell Sqoop which “house” you want by using options such as `--target-dir` (for plain HDFS), `--hive-table`, or `--hbase-table`. Those are the only built‑in destinations; other systems would require extra plugins. This way, your database’s data can be moved straight into the storage format that best fits your next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
