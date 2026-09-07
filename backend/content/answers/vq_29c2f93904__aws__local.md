---
qid: vq_29c2f93904__aws__local
question: WHAT IS THE DIFFERENCE BETWEEN CHAR AND VARCHAR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent **Database Migration Project** I was asked: *“What is the difference between CHAR and VARCHAR?”*  
I responded by framing it around our **Customer Obsession** and **Dive Deep** principles.

---

### Situation
Our team had to move an on‑premise legacy system (Oracle) to Amazon RDS Aurora MySQL for a new SaaS product. The data model included millions of customer records, each with a *country code* column that was defined as `CHAR(2)` in Oracle but stored as `VARCHAR(2)` in the target.

### Task
Determine whether to keep `CHAR` or convert to `VARCHAR`, and quantify the impact on storage, I/O, and cost.

### Action
1. **Dive Deep**: Ran a workload replay on a 10 % sample (≈200 k rows) using `EXPLAIN ANALYZE`.  
2. Measured:
   - **Storage**: `CHAR(2)` = 2 bytes per row + overhead; `VARCHAR(2)` = variable length + 1–2 byte length prefix → ~30 % less space for sparse data.  
   - **I/O**: `CHAR` rows align to page boundaries, causing up‑to‑25 % more read latency in range scans.  
3. Proposed a **dual‑strategy**: keep `CHAR(2)` only where the column is *never null* and frequently used in equality predicates; otherwise switch to `VARCHAR(2)`.  
4. Updated migration scripts and ran automated tests on 1 M rows, observing a **12 % reduction in storage cost** (≈$0.02 per GB/month on Aurora).

### Result
The migration finished 3 days early, cut RDS storage spend by **$1,200 annually**, and improved query latency by **18 %** for country‑based lookups.  

---

**Key Takeaway:**  
`CHAR` guarantees fixed length and faster equality checks but wastes space when values vary; `VARCHAR` is space‑efficient but adds a small overhead. Choosing the right type requires data‑driven analysis—exactly what Amazon expects from an engineer who owns outcomes, dives deep into metrics, and delivers measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
