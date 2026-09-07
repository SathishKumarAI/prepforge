---
qid: ing_d1a9d7e3c6__aws__local
question: 'Explain: Importance of Cardinality for Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 362
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:48-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

**Situation:** In a recommendation engine at my last startup we saw query latency jump from **120 ms to 3.5 s** after adding new product categories.  
**Task:** Identify the root cause and redesign the schema for production scale.  
**Action:** I profiled the database with *EXPLAIN* on the slow queries; all were scanning a `products` table where the foreign key `category_id` had **high cardinality (≈ 10k distinct values)** but was indexed only on `product_id`. The join became a full‑table scan, exhausting CPU and I/O.  
I introduced a **composite index** `(category_id, product_id)` and partitioned the table by `category_id`. On AWS I migrated to **Amazon Aurora Serverless v2**, which automatically scales compute based on query load. I also enabled **Aurora Global Database** for read‑heavy workloads in other regions, reducing cross‑region latency from 200 ms to < 50 ms.  
**Result:** Query latency dropped to **< 150 ms** (≈ 95% improvement), and the cost per query fell by **$0.02** due to fewer I/O operations. The system now handles 10× traffic without additional servers.  

*Bar‑raiser notes:* clear ownership of the performance issue, deep dive into cardinality’s impact on index strategy, quantified latency & cost gains, and a learning loop—post‑mortem documented best practices for future schema changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
