---
qid: vq_0a584dd3f9__star__local
question: What is collation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 305
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:17-05:00'
sources: []
---

**Situation:**  
During a migration of our on‑prem data warehouse to Snowflake, I noticed that queries joining tables on string columns were returning duplicate rows and slow performance. The source database was using Latin1_General_BIN collation, while the target used SQL_Latin1_General_CP1_CI_AS.

**Task:**  
I had to ensure consistent text comparisons across systems so joins would be accurate and query plans optimal, without disrupting existing ETL jobs or breaking downstream reports.

**Action:**  
First I mapped out all string columns involved in joins or lookups. Then I wrote a Snowflake script that altered the column collations using `ALTER TABLE … ALTER COLUMN … SET COLLATE`. For legacy data, I added a computed column with `COLLATE` to normalize values before inserting into Snowflake. I also updated our DBT models to explicitly cast columns to the target collation and re‑indexed them. To validate, I ran side‑by‑side queries comparing row counts and join cardinalities across both environments.

**Result:**  
After standardizing collations, duplicate rows disappeared and query runtimes dropped by 35 %. The ETL throughput improved from 1 M rows/hour to 1.4 M rows/hour. I learned that collation mismatches can silently corrupt joins and that proactive schema alignment is critical when moving data across platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
