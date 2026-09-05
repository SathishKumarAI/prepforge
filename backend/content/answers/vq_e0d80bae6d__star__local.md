---
qid: vq_e0d80bae6d__star__local
question: How to fetch common records from two tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 343
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:59-05:00'
sources: []
---

**Situation** – In a recent project for our e‑commerce analytics platform, the data team needed to reconcile customer orders with shipping logs that were stored in separate PostgreSQL tables (`orders` and `shipments`). The quarterly KPI required an accurate count of shipments that matched order records; however, the two tables had mismatched timestamps and occasional duplicate entries.

**Task** – My goal was to produce a clean list of common records—exact matches on `order_id`, `customer_id`, and `product_sku`—and generate a 99.9% confidence metric for downstream reporting.

**Action** – I wrote a single SQL query that leveraged a **`INNER JOIN`** with strict equality conditions, then wrapped it in a CTE to de‑duplicate any accidental repeats using `DISTINCT ON`. To guard against the timestamp drift, I included an additional filter: `ABS(EXTRACT(EPOCH FROM orders.order_date - shipments.shipment_date)) < 3600`. The query was parameterized and executed via our Airflow DAG; I also added a unit test that ran on a subset of data to verify cardinality matches.

**Result** – The job processed ~1.2M rows in under 45 seconds, returning 1,048,576 matched records—exactly the number expected from business logic. Our KPI accuracy improved from 92% to 99.8%, and I documented the approach so other teams could reuse the pattern for similar reconciliation tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
