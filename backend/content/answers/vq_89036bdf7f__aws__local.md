---
qid: vq_89036bdf7f__aws__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 413
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:58-05:00'
sources: []
---

**Situation & Task**  
While designing a nightly ETL for our sales‑analytics data lake (S3 + Redshift), the team debated whether to rewrite a legacy query that used a *correlated subquery* into a plain *regular subquery*. The goal was to reduce runtime and cost.

**Action**  
I first profiled the query on Redshift:  
- Correlated subquery executed **10 ×** per row, taking 4 hrs (≈$32).  
- Rewriting it as a regular subquery with a CTE and an explicit join reduced scans to one pass. I used `DISTSTYLE ALL` for small dimension tables and enabled `enable_hashjoin`.  
I also added a **Redshift Spectrum** slice for the large fact table, so only relevant partitions were scanned.

**Result**  
Execution time dropped from 4 hrs to **45 min** (≈90% faster), cutting query cost from $32 to **$3.50** per run. The solution was fully automated in our Airflow DAG and rolled out across all downstream dashboards, improving freshness by 2×.

---

### Technical takeaway  
- **Regular subquery**: executed once; ideal when the inner query can be materialized independently.  
- **Correlated subquery**: re‑evaluated for each row of the outer query, often leading to exponential cost if not indexed or rewritten.

AWS services leveraged: Redshift (massive parallel processing), Spectrum (serverless querying on S3).  

### Leadership Principles  
- **Ownership** – I took end‑to‑end responsibility for performance and cost.  
- **Dive Deep** – Detailed profiling and iterative testing drove the optimization.  

*Bar‑raiser cue*: clear ownership, deep dive into metrics, tangible ROI, and a lesson that complex correlated logic can be flattened with careful planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
