---
qid: ing_9617cf51ab__star__local
question: 'Explain: B-Tree Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 297
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:55-05:00'
sources: []
---

**Situation:** While leading a migration of our e‑commerce product catalog from MySQL to PostgreSQL, the search query latency for “product_id” was creeping above 200 ms during peak traffic (≈10k requests/s).  
**Task:** I had to reduce the average lookup time to under 80 ms without impacting write throughput or adding costly hardware.  
**Action:** I profiled queries with `pg_stat_statements` and discovered that a large, frequently queried column (`category_id`) was not indexed efficiently. I created a B‑Tree index on `(category_id, price)` because most filters combined those two columns. I also tuned the index fill factor to 70% to keep leaf pages from being overfull during writes. Using `EXPLAIN (ANALYZE, BUFFERS)` I verified that the planner now used the new index instead of a sequential scan. Additionally, I set `autovacuum_analyze_scale_factor` lower for this table to keep statistics fresh.  
**Result:** Query latency dropped from 210 ms to 65 ms on average (a 69% improvement). Write throughput increased by ~5% due to better page utilization. I learned that careful column ordering in a B‑Tree index and adjusting fill factor can dramatically improve both read and write performance in high‑traffic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
