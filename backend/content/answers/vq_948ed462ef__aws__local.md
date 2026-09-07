---
qid: vq_948ed462ef__aws__local
question: What is a Snowflake Schema?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 526
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:06-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“A Snowflake Schema is a dimensional model where fact tables are connected to dimension tables that themselves are normalized into sub‑dimensions—much like snowflakes branching out.”*  

### Behavioral (STAR)  
**S** – While leading the data warehouse migration for a retail client, I had to redesign their legacy star schema.  
**T** – The goal was to reduce query cost and improve maintainability while keeping reporting latency under 5 s.  
**A** – I proposed a snowflake model: product → category → department; customer → region → country. I used AWS Glue for ETL, Redshift Spectrum for raw logs, and S3 as the data lake. Partitioned by date & region, I leveraged Redshift’s columnar compression and materialized views.  
**R** – Result: Query cost dropped 35 % (from $120/day to $78/day), storage shrank 22 %, and end‑to‑end latency improved to 3.2 s. Stakeholders reported higher confidence in analytics.  

### Technical / System Design  
- **Requirements:** low‑latency reporting, high data freshness, cost control.  
- **Design Choices:**  
  - *Normalized dimensions* reduce redundancy → cheaper S3 storage & faster writes.  
  - *Redshift Spectrum* reads directly from Parquet on S3 for ad‑hoc scans.  
  - *Elastic Resize* to scale compute during peak promotions.  
- **Scalability / Availability:** Multi‑AZ Redshift cluster, automated snapshots, and IAM‑based access control.  
- **Cost Trade‑offs:** Slightly higher query time (≤5 s) for significant cost savings; acceptable per SLA.  

### Bar‑raiser Checklist  
- **Ownership:** Took full responsibility from schema design to deployment.  
- **Dive Deep:** Analyzed compression ratios, partitioning impact, and query plans.  
- **Quantified Impact:** 35 % cost reduction & 22 % storage savings.  
- **Learning from Failure:** Initial pilot hit >10 s latency; we added materialized views after profiling slow joins—illustrating iterative improvement.  

**Leadership Principles Highlighted:** *Customer Obsession* (meeting SLA), *Ownership*, and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
