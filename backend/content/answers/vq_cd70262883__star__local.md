---
qid: vq_cd70262883__star__local
question: How to view table columns details in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:07-05:00'
sources: []
---

**Situation**  
When migrating the 12‑million record sales table from our legacy Oracle database to Hadoop, I had to ensure that all columns were mapped correctly for downstream analytics. The import script was failing because a few numeric fields were being cast as strings, and I couldn’t see why Sqoop was misreading them.

**Task**  
I needed to quickly audit the source table’s column definitions—data types, precision, nullability—to confirm they matched our target Hive schema before re‑running the import.

**Action**  
Instead of opening a full Oracle client session, I leveraged Sqoop’s built‑in “--query” capability to execute an inline SQL statement. I ran:

```bash
sqoop eval \
  --connect jdbc:oracle:thin:@prod-db:1521/ORCL \
  --username sqoop_user \
  --password **** \
  --query "SELECT column_name, data_type, data_length, nullable FROM all_tab_columns WHERE table_name='SALES' AND owner='HR'" \
  --target-dir /tmp/sqoop_meta
```

Sqoop returned a small CSV file of the metadata. I then used `head` and `awk` to format it into a quick reference table. This approach avoided any GUI overhead and let me validate that `ORDER_TOTAL` was indeed NUMBER(12,2), not VARCHAR2.

**Result**  
I corrected the Sqoop import options (`--map-column-java`) in under 15 minutes, re‑imported the data, and verified that the Hive table now had accurate column types. The migration finished three days ahead of schedule, saving the team an estimated $1,200 in potential downstream errors. I learned that using `sqoop eval` for schema introspection is a lightweight, reproducible trick whenever you need to audit source metadata on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
