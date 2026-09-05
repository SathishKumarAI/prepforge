---
qid: vq_01295d06a9__star__local
question: WHAT IS THE ORDER BY CLAUSE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 297
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:44:51-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce analytics project, our data warehouse was generating monthly sales reports for the marketing team. The raw query returned millions of rows from the `sales` table, and the report generation time hit 45 seconds—far too long for the weekly sprint.

**Task**  
I had to reduce the runtime to under 10 seconds while still delivering a correctly sorted list of top‑selling products by revenue.

**Action**  
First, I examined the execution plan and discovered that the `ORDER BY` clause on `total_revenue DESC` was causing an expensive full sort. I added a composite index `(product_id, total_revenue)` to allow the database to fetch rows already sorted. Then, instead of ordering all records, I rewrote the query to use `LIMIT 1000` with the indexed order and wrapped it in a subquery that pre‑aggregated revenue per product. Finally, I tuned the buffer pool size so the index fit into memory during execution.

**Result**  
The optimized query now runs in 8 seconds, a 78% reduction in latency. The marketing team can review top products on demand, and I learned how crucial it is to align `ORDER BY` with appropriate indexes rather than relying on full sorts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
