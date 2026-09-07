---
qid: vq_de6d158391__aws__local
question: What are the different types of Restricted Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 506
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:48-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* – I own the entire data pipeline; *Dive Deep* – I analyze every join pattern for performance and correctness.

### Situation  
I was asked to optimize a nightly ETL that merged customer orders with marketing attribution tables. The existing query used many `INNER JOIN`s, causing >12 h runtime on a 10 TB dataset.

### Task  
Identify which “restricted joins” (joins limited by predicates or data subsets) could reduce scan size and improve cost without losing correctness.

### Action  

| Join type | When it applies | AWS Service / Tool |
|-----------|-----------------|--------------------|
| **Semi‑join** (`SELECT … FROM A WHERE EXISTS(SELECT 1 FROM B…)`) | When only existence matters (e.g., filter orders that have a promo). | Athena/Glue – rewrites to `JOIN` + `LIMIT 1`. |
| **Anti‑join** (`LEFT JOIN … ON … WHERE B.col IS NULL`) | Exclude rows with matches (e.g., orders without fraud flag). | Redshift Spectrum – uses `EXCEPT`. |
| **Hash join with Bloom filter** | Large “B” side; we only need keys that exist in “A”. | EMR Spark + `BloomFilter` UDF; cheaper than full shuffle. |
| **Range‑restricted join** (`ON A.date BETWEEN B.start AND B.end`) | Temporal joins where the date window is small. | Glue job with partitioned Parquet, predicate pushdown. |

I rewrote the query to use a semi‑join for promo filtering and an anti‑join for fraud exclusion, added Bloom filters on the 2 TB marketing table, and partitioned by `order_date`.  

### Result  
Runtime dropped from **12 h → 1.5 h** (80% reduction). Cost fell from **$240/night → $30/night** (87% savings). The pipeline now runs in under 3 min on demand, meeting SLA.

> **Bar‑raiser cues:** ownership of the entire data flow; deep dive into join semantics; quantifiable performance and cost impact; iterative learning from failed attempts (e.g., first try with full hash join caused OOM).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
