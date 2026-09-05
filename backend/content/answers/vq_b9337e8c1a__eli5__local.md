---
qid: vq_b9337e8c1a__eli5__local
question: List all basic sqoop commands along with their properties?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 358
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:34-05:00'
sources: []
---

Think of **Sqoop** as a friendly post‑man who can pick up letters (data) from one town (your database) and drop them into another town (Hadoop). Each “pick‑up” job is written with a simple command that tells the post‑man what to bring, where to go, and how many letters to carry at once.

| Command | What it does | Key property |
|---------|--------------|--------------|
| `sqoop import` | Pulls data from an RDBMS into HDFS or Hive. | You can set a SQL query (`--query`) to choose rows. |
| `sqoop export` | Sends data from HDFS back to an RDBMS table. | You must give the target table name (`--table`). |
| `sqoop job` | Saves a reusable import/export task for later runs. | Jobs can be scheduled with `--schedule`. |
| `sqoop list-databases` | Shows all databases on the source server. | Handy for discovery. |
| `sqoop list-tables` | Lists tables in a chosen database. | Useful before an import. |

Each command is just a line of shell text; you add options like `--connect`, `--username`, and `--password` to tell Sqoop where the source lives, and flags such as `--num-mappers` to decide how many “post‑men” work in parallel. That’s all there is—no equations, just a clear set of instructions that turns database rows into Hadoop files or back again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
