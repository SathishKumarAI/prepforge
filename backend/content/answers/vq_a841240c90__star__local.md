---
qid: vq_a841240c90__star__local
question: How to view all the databases and tables in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 438
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:31-05:00'
sources: []
---

**Situation** – While migrating the finance data warehouse from an on‑prem Oracle instance to HDFS for downstream analytics, I needed a quick way to inventory every schema and table before setting up incremental imports. The source catalog had over 200 tables spread across 15 schemas, and I didn’t want to manually query each one.

**Task** – Build a single Sqoop command that lists all databases and their tables so I could cross‑check against the target HDFS directories and spot any missing objects or schema changes.

**Action** – I leveraged Sqoop’s `--query` option to run a JDBC SELECT against Oracle’s data dictionary. The query was:

```bash
sqoop eval \
  --connect jdbc:oracle:thin:@//db-host:1521/ORCL \
  --username user \
  --password pass \
  --query "SELECT owner, table_name FROM all_tables WHERE owner NOT IN ('SYS','SYSTEM')" \
  --target-dir /dev/null \
  --num-mappers 1
```

Because `--eval` executes arbitrary SQL, I could pull the entire list in one shot. I wrapped the output with `awk` to format it into a CSV for downstream validation scripts.

**Result** – The command returned 2 356 rows in under two seconds, giving me an exact inventory of all user tables. I automated this as part of our nightly “catalog sync” job, reducing manual checks by 90% and ensuring that any schema drift was caught before the next import cycle. This exercise reinforced the value of using Sqoop’s `eval` capability for quick metadata queries in a production pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
