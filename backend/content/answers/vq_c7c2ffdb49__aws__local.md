---
qid: vq_c7c2ffdb49__aws__local
question: What are the different types of Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:53-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – I always think about how our data pipeline serves downstream analytics users; *Dive Deep* – I dissect each join type to understand its cost and performance implications.

**Situation & Task**  
When we migrated the nightly ETL from on‑prem Hadoop to AWS Glue, our reporting team complained that query latency had doubled. I was tasked with identifying which join strategy was inflating run times.

**Action**  
I performed a **dive deep** into the four core SQL join types—`INNER`, `LEFT OUTER`, `RIGHT OUTER`, and `FULL OUTER`.  
1. **Inner Join**: returns only matching rows; most efficient, used for fact–dimension lookups.  
2. **Left (or Right) Outer Join**: preserves all rows from one side; I mapped this to our “customer‑orders” table where we must keep every customer record even if no orders exist.  
3. **Full Outer Join**: keeps all rows from both sides; used sparingly for data reconciliation tasks.  
4. **Cross Join** (Cartesian): rarely needed, but essential when generating synthetic test data or combinatorial features.

I implemented the join logic in Glue using *Apache Spark* with `DynamicFrame.resolveChoice` to enforce schema consistency and leveraged AWS Glue’s *Job Bookmarks* to avoid re‑processing already joined partitions. I also added a *partition filter pushdown* on S3 via Athena, reducing shuffle size by 70 %.

**Result**  
Post‑migration, query latency dropped from **12 s → 2.5 s** (≈80 % improvement). Cost per job fell from $0.75 to $0.15 thanks to reduced compute time. The team now receives up-to-date insights in near real‑time.

**Learning**  
I realized that a seemingly simple “join” can dramatically affect performance at scale; documenting join strategy per use‑case became a best practice, and I introduced automated tests for join cardinality to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
