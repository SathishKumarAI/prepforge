---
qid: vq_dd2a9c02fc__star__local
question: HOW DOES A CLUSTERED INDEX DIFFER FROM A NON-CLUSTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:16-05:00'
sources: []
---

**Situation:** In a recent migration of our e‑commerce platform’s orders table from MySQL to PostgreSQL, the reporting team noticed query latency spiked from 120 ms to over 1.2 s when aggregating daily sales.

**Task:** I had to pinpoint why lookups on `order_date` and `customer_id` were slow and propose a schema tweak that would bring response times back under 200 ms without breaking existing applications.

**Action:** First, I examined the physical layout of the table. The existing index on `order_date` was non‑clustered: it stored only key values with pointers to heap rows, so each lookup caused random disk seeks. I decided to create a clustered index on `(order_date, customer_id)`. In PostgreSQL this means using a **CLUSTER** operation followed by a **CREATE INDEX CONCURRENTLY**, which physically reordered the table rows to match the key order and built a B‑tree that also served as the main storage for those columns. I then dropped the old non‑clustered index, ran `VACUUM ANALYZE`, and added a covering index on `total_amount` for the aggregation.

**Result:** Post‑migration, the daily sales query cut latency from 1.2 s to **190 ms**, a 84% improvement. I learned that clustering trades off write performance (due to row reordering) but can drastically reduce read I/O when queries access contiguous ranges—exactly what our reporting workload required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
