---
qid: vq_224509c37e__star__local
question: Can I Update From Another Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 375
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:25-05:00'
sources: []
---

**Situation:**  
At my previous company we had a legacy sales system that stored quarterly revenue in the `sales_fact` table. A new analytics team created a normalized `revenue_by_product` view to break down totals by product category. The BI reports were pulling from the old fact table, so every time the view changed we’d need to manually sync data.

**Task:**  
I was asked to automate the process of updating `sales_fact` with the aggregated revenue from `revenue_by_product`, ensuring that only changed rows were refreshed and that the operation ran within our nightly 15‑minute window.

**Action:**  
I wrote a stored procedure in PostgreSQL that used an `INSERT … ON CONFLICT (sale_id) DO UPDATE` statement. First, I generated a CTE that joined `revenue_by_product` to `sales_fact` on the primary key, selecting only rows where the aggregated amount differed (`WHERE new_amount <> old_amount`). The CTE also calculated a checksum of the row to catch any hidden changes. Then I executed the upsert in batches of 10,000 using `LIMIT/OFFSET` loops and added a `pg_sleep(0.1)` pause to keep CPU usage low. Finally, I wrapped the whole routine in a transaction and logged the number of rows affected.

**Result:**  
The nightly job now completes in under 7 minutes, updating roughly 12,000 records per run with zero manual intervention. Accuracy improved—report discrepancies dropped from ~5% to <0.1%. I learned how to combine CTEs, conditional upserts, and batch processing to keep heavy data synces efficient and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
