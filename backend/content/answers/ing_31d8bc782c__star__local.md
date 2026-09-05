---
qid: ing_31d8bc782c__star__local
question: 'Explain: Normalization/Denormalization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 317
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:59-05:00'
sources: []
---

**Situation** – In a recent e‑commerce analytics project I was tasked with generating real‑time sales dashboards for over 50,000 daily orders. The raw data lived in a highly normalized OLTP schema: orders, customers, products, and order_items were all split into separate tables to avoid redundancy.

**Task** – My goal was to cut the query latency from ~8 seconds (when joining four tables) to under 2 seconds for dashboard refreshes, without compromising data integrity.

**Action** – I performed a selective denormalization:  
1. Created a materialized view that joined orders with customers and products into a single “order_snapshot” table.  
2. Added a composite index on `(customer_id, order_date)` to accelerate slice queries.  
3. Implemented incremental refresh logic using change‑data capture (CDC) so only new or updated rows were appended nightly.  
4. Deployed the view in PostgreSQL with `REFRESH MATERIALIZED VIEW CONCURRENTLY` and scheduled it during low traffic windows.

**Result** – Dashboard query times dropped from 8 s to 1.3 s, a 84% improvement. Storage overhead increased by ~30 MB per day, which was acceptable given the performance gain. I learned that judicious denormalization—backed by incremental refresh and targeted indexing—can deliver measurable speedups while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
