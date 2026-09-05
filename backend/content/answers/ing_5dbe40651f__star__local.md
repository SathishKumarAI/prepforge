---
qid: ing_5dbe40651f__star__local
question: 'Explain: Index Table — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 388
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:36-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a recommendation engine for an e‑commerce platform that served over 2 million users daily. The click‑through rate (CTR) had dropped by 12% after we migrated from a flat CSV store to a relational DB, and our query latency jumped from 120 ms to 4 s because the “products” table was growing beyond 50 M rows.

**Task** – I needed to redesign the data layer so that read‑heavy recommendation queries could return in under 200 ms while keeping write throughput high for inventory updates. The goal was a 30% latency reduction and 15% cost savings on cloud storage.

**Action** – I introduced an **Index Table** pattern:  
1) Created a denormalized “product_summary” table that stored only the fields needed for ranking (price, category, popularity score).  
2) Added a composite B‑tree index on `(category_id, popularity_score DESC)` to accelerate top‑N queries.  
3) Implemented a materialized view that refreshed every 10 minutes via CDC from the main table, keeping the summary in sync without locking the source.  
4) Used PostgreSQL’s `pg_partman` for time‑based partitioning on the summary table, trimming old data nightly to reduce size.

**Result** – Query latency dropped to 140 ms (a 65% improvement), overall cost fell by 18% due to smaller index storage and fewer full scans. I learned that a lightweight index table can decouple read patterns from write workloads, giving the system both speed and scalability without complex sharding or caching layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
