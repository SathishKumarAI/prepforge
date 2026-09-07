---
qid: vq_7a72deef98__aws__local
question: How to find count of duplicate rows?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 555
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:24-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

---

### Situation  
At my previous role I was tasked to audit a nightly ingestion pipeline that fed our data lake on S3. A bug in the ETL caused duplicate rows to accumulate, inflating downstream analytics costs by ~12 % and skewing key metrics.

### Task  
I had to design an automated, scalable way to detect and quantify duplicates across multiple large tables (≈ 5 TB total) without impacting the existing pipeline performance.

### Action  
1. **Clarify requirements** – duplicates are defined as rows with identical values in columns `user_id`, `event_timestamp`, and `session_id`.  
2. **Proposed architecture**  
   * **AWS Glue** crawler → catalog the raw tables into Athena.  
   * **Athena** runs a scheduled query (every 12 hrs) using `COUNT(*)` with `GROUP BY` on the three key columns, filtering where count > 1.  
   * Results are written to an S3 bucket in Parquet format; a **Glue job** aggregates them into a single “duplicate‑report” table.  
   * An **Amazon SNS** notification triggers when any duplicate count exceeds 0.  
3. **Scalability & cost** – Athena charges per query and data scanned; we partition by ingestion date to limit scans (≈ 200 GB/query). Estimated cost <$10/month vs. $120/month for manual checks.  
4. **Availability & fault‑tolerance** – Glue jobs run in an isolated VPC with IAM roles, Athena queries are stateless; both services automatically retry on transient failures.

### Result  
Within two weeks of deployment we reduced duplicate ingestion by 98 % (from ~ 2 M to < 20 k rows). The downstream analytics cost dropped from $4.8K/month to $3.7K, saving **$1.1K** monthly and improving data quality for our product team’s KPI dashboards.

---

### What a bar‑raiser looks for  
* **Ownership:** I took full responsibility from problem definition to production deployment.  
* **Dive Deep:** I dissected the ETL flow, identified root cause, and quantified impact.  
* **Quantified Impact:** $1.1K/month saved; 98 % reduction in duplicates.  
* **Learning from Failure:** The initial manual audit failed due to performance bottlenecks; I pivoted to serverless analytics (Athena) for elasticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
