---
qid: vq_e9aa5c98ad__star__local
question: Handling nulls while importing data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 394
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:18-05:00'
sources: []
---

**Situation:**  
When I was migrating our customer analytics pipeline from an on‑prem SQL Server to Snowflake, the nightly ETL jobs were failing because a large CSV export from the legacy system contained mixed null representations (empty strings, “NULL”, and “-999”). The downstream dashboards would show blank values instead of zeros or default dates, confusing business users.

**Task:**  
I had to design a robust import routine that consistently normalized these nulls into Snowflake’s `NULL` type while preserving legitimate data such as the string “N/A” used for optional comments. The goal was to keep the job under its 30‑minute SLA and avoid manual post‑processing.

**Action:**  
Using Python with Pandas, I wrote a pre‑flight script that scanned each column for known null patterns and applied `df.replace({"": None, "NULL": None, "-999": None}, inplace=True)`. For numeric columns, I coerced to floats and set `errors='coerce'` so any unparsable value became `NaN`, which Snowflake maps to `NULL`. I then used the Snowflake Python connector’s `write_pandas` with `auto_create_table=False` to bulk load the cleaned DataFrame via a temporary stage, ensuring column types matched. Logging tracked how many rows were converted per batch.

**Result:**  
The updated pipeline processed 5 million rows in 22 minutes, down from 35, and null handling errors dropped by 99%. Dashboards now display accurate defaults, and I documented the mapping logic so future engineers can tweak it if new null patterns appear. This experience taught me that early data cleansing coupled with automated type coercion dramatically reduces downstream bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
