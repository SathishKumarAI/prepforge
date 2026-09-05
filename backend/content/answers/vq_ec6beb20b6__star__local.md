---
qid: vq_ec6beb20b6__star__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 357
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:46-05:00'
sources: []
---

**Situation:**  
During a quarterly data refresh for our e‑commerce analytics pipeline, the sales table in Redshift had 12 % duplicate rows due to an upstream ETL bug. The duplicates were inflating revenue reports by ~18 %.

**Task:**  
I needed to purge the duplicates while preserving exactly one clean copy of each record, ensuring no loss of valid data and keeping the process under our nightly 30‑minute window.

**Action:**  
1. I wrote a temporary staging query that grouped rows by all business keys (order_id, customer_id, product_id) and used `ROW_NUMBER()` to flag duplicates:  
   ```sql
   WITH dup AS (
     SELECT *, ROW_NUMBER() OVER(PARTITION BY order_id, customer_id, product_id ORDER BY load_ts DESC) rn
     FROM sales_stage
   )
   DELETE FROM sales_stage WHERE rn > 1;
   ```
2. After the delete, I ran a `COUNT(*)` to confirm one row per key remained and cross‑checked totals against the raw source.  
3. Finally, I automated the script in Airflow with a conditional check that aborts if duplicate count >0.

**Result:**  
The cleanup removed 3 % of rows (≈45 k records) within 12 minutes, restored revenue accuracy to ±0.02%, and reduced downstream report runtime by 15 %. I learned the importance of idempotent delete logic and incorporating validation steps before committing changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
