---
qid: vq_efee0076f7__star__local
question: WHAT IS DENORMALIZATION, AND WHEN IS IT USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 316
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:15-05:00'
sources: []
---

**Situation:**  
At my last job we were building a real‑time analytics dashboard for an e‑commerce platform. The sales data lived in a star schema: a fact table of orders linked to dimension tables for products, customers and time. When we started pulling daily aggregates into the reporting layer, queries that summed revenue by product category took 12 seconds on our PostgreSQL cluster, which was unacceptable for the live dashboard.

**Task:**  
I needed to cut query latency below one second without compromising data freshness or integrity, so the dashboard could refresh every minute during peak traffic.

**Action:**  
I introduced a denormalized materialised view that pre‑joined the fact table with the product and time dimensions, aggregating revenue per category for each day. I scheduled nightly jobs to refresh this view, using incremental updates via `INSERT … ON CONFLICT` so only new orders touched the view. I also added a GIN index on the aggregated columns to speed up lookups. During testing, I compared execution plans and verified that the view eliminated the costly joins.

**Result:**  
Query time dropped from 12 seconds to under 0.8 seconds, enabling real‑time dashboard updates. The system now handles 5× more concurrent users during flash sales. I learned that denormalization trades storage for speed, and when used with controlled refresh cycles it can dramatically improve OLAP performance without sacrificing data accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
