---
qid: vq_c4968beb50__star__local
question: What is SELF JOIN?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 338
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:43-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce firm I was tasked with generating monthly inventory reports for our warehouse team. The raw data came from a single fact table that stored every shipment record, including both incoming and outgoing movements in the same column. When we tried to calculate net stock changes per product, the report kept double‑counting because the “source” and “destination” columns were mixed.

**Task:**  
I needed to separate inbound from outbound transactions without creating a new table, preserve performance for the 12 million rows processed daily, and keep the pipeline maintainable for future analysts.

**Action:**  
I used a **self‑join** on the shipment table: one alias represented “incoming” records (where `destination_warehouse = 'WH1'`), the other represented “outgoing” ones (`source_warehouse = 'WH1'`). By joining on product ID and date, I could subtract outgoing quantity from incoming quantity in a single SQL query. I added appropriate indexes on `(product_id, transaction_date)` to keep the join fast, and encapsulated the logic in a materialized view that refreshed nightly.

**Result:**  
The new report now shows accurate net inventory levels within 2 seconds for any product, a 60% reduction in query time versus the old approach. The warehouse team reported fewer stock‑outs, and I learned how a well‑placed self‑join can solve seemingly complex data separation problems without schema changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
