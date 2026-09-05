---
qid: vq_84d1898e40__star__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:43-05:00'
sources: []
---

**Situation**  
In my last role on the data warehouse team, we were migrating our customer analytics pipeline to Snowflake. A colleague needed a quick way to prototype new transformations using the same schema as an existing table but without pulling in any of the millions of rows.

**Task**  
I had to create a lightweight “copy” that preserved all column names, types, constraints, and comments, so we could run unit tests against it before loading real data.

**Action**  
In Snowflake I used `CREATE TABLE new_table LIKE existing_table` which duplicates the metadata but not the rows. After creating the empty table I ran a `SELECT * FROM existing_table LIMIT 0` to confirm that no data was copied. Then I populated the stub with a handful of test records using `INSERT INTO new_table SELECT … FROM existing_table WHERE 1=0`. This kept the schema intact and allowed us to run our ETL scripts against it, catching any type mismatches or column‑name typos early.

**Result**  
The process cut down our prototype turnaround from two hours (full copy) to under ten minutes. We avoided a costly “schema drift” issue that had previously caused downstream jobs to fail on production. I learned the value of Snowflake’s `LIKE` clause for rapid, safe schema cloning and now use it as the first step whenever we need a sandboxed copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
