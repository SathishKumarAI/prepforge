---
qid: vq_4a089de965__aws__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 393
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While refactoring a data‑warehouse ETL pipeline for our ad‑tech platform, I was asked to decide whether to use a temporary table (`#Temp`) or a table variable (`@TV`).  
> **Task:** Ensure the choice maximized query performance, cost, and maintainability across 10 TB of nightly data.  
> **Action:**  
> * **Ownership & Bias for Action** – I ran side‑by‑side benchmarks on our Redshift cluster (2 m nodes) with realistic workloads:  
>   - `#Temp` created a distributed table; query planner used statistics and could parallelize joins → 4× faster.  
>   - `@TV` was in‑memory, but its lack of distribution metadata forced full scans → 8× slower.  
> * **Dive Deep** – I examined transaction logs: `#Temp` persisted until session end, enabling reuse across multiple stages; `@TV` existed only for the batch scope, causing repeated re‑creation overhead.  
> * **AWS Services** – Leveraged Redshift Spectrum to stage data in S3, then used `CREATE TEMP TABLE AS SELECT …` to populate the temp table, ensuring automatic cleanup and minimal storage cost.  
> **Result:** Switching to a temporary table cut nightly ETL runtime from 2 h to 30 min (≈80% reduction), saving ~\$200/month on compute charges and improving SLA for downstream dashboards by 90%.  

**Bar‑raiser cues:** clear ownership, data‑driven impact, deep dive into trade‑offs, learning from prior failures (previous attempts with table variables caused 4× slower joins).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
