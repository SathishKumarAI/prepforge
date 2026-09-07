---
qid: vq_3606bd2e7f__aws__local
question: What is an Indexed View?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 491
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:49-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *“I’ve built a data‑warehouse layer that reduced query latency from 45 s to <1 s for the product analytics team, driving faster go‑to‑market decisions.”*  

**Situation / Task**  
Our BI team needed near‑real‑time revenue reports across millions of transactions. The underlying OLAP cube was too slow; ad‑hoc scans hit the raw tables and caused contention with production workloads.

**Action**  
I introduced **Indexed Views** (materialized views) in SQL Server as a lightweight caching layer. I defined the view to pre‑aggregate sales by product, region, and day, then created a clustered index on it.  

*Technical design*:  
- **AWS services**: RDS SQL Server for OLTP, Amazon S3 + Athena for raw logs, AWS Glue for ETL.  
- The indexed view lived in RDS; its refresh was scheduled nightly via Lambda triggers (serverless) to keep the data fresh without manual intervention.  

*Scalability & cost*:  
- Index maintenance costs ~5 % of compute time but saved 90 % of query runtime, cutting overall RDS usage and reducing license fees by ~15 %.  
- Availability: replicated across Multi‑AZ; view refreshes were idempotent so failover was seamless.  

*Bias for Action*: I prototyped in two weeks, rolled out to a pilot group, collected metrics, then scaled company‑wide.

**Result**  
Query latency dropped from 45 s → 0.8 s (≈ 97 % reduction). Monthly report turnaround time shrank by 4 days, enabling the product team to iterate on pricing in real time.  

**What a bar‑raiser looks for**  
- **Ownership**: I identified the bottleneck, engineered the solution, and automated maintenance.  
- **Dive Deep**: I quantified performance gains, cost impact, and failure modes.  
- **Learning from Failure**: Early tests revealed index bloat; we switched to non‑clustered indexing, learning that smaller indexes can be more efficient for our workload.

---

*Leadership Principles*: **Customer Obsession** (faster insights for product decisions), **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
