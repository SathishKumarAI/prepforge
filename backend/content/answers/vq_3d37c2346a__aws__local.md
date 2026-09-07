---
qid: vq_3d37c2346a__aws__local
question: How do you calculate "PCTINCREASE" value?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I was asked to automate the “PCTINCREASE” metric for our quarterly sales dashboard.  
**Situation:** The finance team needed a single column that showed the percent change in revenue week‑on‑week across 12 regions, but the existing report had inconsistent formulas and lagged data by ~48 hrs.  
**Task:** Build an ETL pipeline that ingests raw sales logs, normalises them to UTC, computes PCTINCREASE = ((current_week – previous_week) / previous_week) × 100, and surfaces the result in near‑real time for business users.  

**Action:**  
1. **Requirements & Design** – Defined “week” as ISO week number; used AWS Glue to schedule nightly crawls of S3 logs, Spark jobs to aggregate by region.  
2. **Implementation** – Leveraged Athena (serverless SQL) for quick ad‑hoc queries, and stored the result in a Redshift cluster for downstream BI tools.  
3. **Scalability & Cost** – Glue ETL scaled with Auto Scaling; Athena cost ~$0.5 per query, keeping monthly spend < $30 versus the legacy on‑prem solution (~$200).  

**Result:** The new pipeline delivered PCTINCREASE values within 15 min of data arrival, reduced report latency from 48 hrs to 0.1 hr, and cut operational cost by **85 %**. Users could now drill down to a region in seconds, boosting decision‑making speed by **30 %**.  

*Leadership Principles:* **Ownership** – I took full responsibility for the end‑to‑end solution; **Dive Deep** – I examined raw logs, identified data quality gaps, and engineered a robust calculation formula.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
