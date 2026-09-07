---
qid: ing_2b1f4272dd__aws__local
question: 'Explain: More than 50k Reads — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:42-05:00'
sources: []
---

**Situation & Task**  
While leading the *Predictive Insights* team at a fintech startup, we had to expose our model training data (over 50 k daily reads) to analysts without compromising latency or cost. The goal was to give them ad‑hoc SQL access while keeping our compute cluster isolated.

**Action**  
1. **Data Ingestion & Storage** – I migrated raw parquet logs from the streaming pipeline into an S3 bucket with a partitioned folder structure (date/region).  
2. **Query Layer** – Deployed Athena on top of the catalog, enabling analysts to run SQL against the data without touching the underlying cluster.  
3. **Compute Isolation** – Created a dedicated EMR cluster that only accessed the same S3 bucket through an IAM policy; this cluster handled heavy ML training jobs.  
4. **Cost Control** – Enabled Athena’s query result caching and set up CloudWatch alarms for query duration > 5 min, automatically triggering a Lambda to terminate idle EMR nodes.  
5. **Governance** – Implemented Lake Formation permissions so that analysts could only read approved partitions.

**Result**  
- Daily reads jumped from 50 k to 120 k (a 140 % increase) without any performance regressions.  
- Query latency stayed below 2 s for 95 % of analyst queries, meeting SLAs.  
- EMR cost dropped by 30 % because idle nodes were terminated within 10 min.  
- The solution was adopted company‑wide, reducing the engineering team’s maintenance hours from ~15 h/month to < 3 h/month.

**Learning & Ownership**  
I documented the architecture in a living spec and held a post‑mortem after the first month of production; we discovered that partitioning on `event_date` was suboptimal for some workloads, so I introduced dynamic partitions—an improvement still in progress.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Customer Obsession**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
