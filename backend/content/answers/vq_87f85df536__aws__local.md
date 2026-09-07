---
qid: vq_87f85df536__aws__local
question: Can one drop a column from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 468
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:41-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task**  
> In my last role at a SaaS company we had a legacy PostgreSQL database holding millions of user events. A feature team decided to retire the `legacy_user_id` column because it was no longer used, but dropping it risked breaking downstream analytics jobs that referenced the column by name.

> **Action (Design & Implementation)**  
> 1. **Dive Deep** – I audited all ETL scripts and scheduled jobs in Airflow, identified 12 references, and quantified their impact: each job ran hourly on a 5‑minute window and processed ~200 k rows.  
> 2. **Ownership & Bias for Action** – I created a migration plan that included:
>    * A short‑lived `DROP COLUMN` within a maintenance window, guarded by a feature flag in our schema‑management tool (Flyway).  
>    * Parallel “soft delete” step: add a nullable `legacy_user_id` column with `NULL DEFAULT`, update all jobs to ignore it, then run a one‑time data purge script.  
> 3. **AWS Services** – We used **Amazon RDS PostgreSQL** for the database, **AWS CloudWatch Logs** to capture migration metrics, and **AWS Lambda** (Python) to orchestrate the two‑step process automatically.  
> 4. **Scalability & Availability** – The operation was performed on a read replica first to avoid blocking writes; we used `pg_repack` for zero‑downtime table reorganization, keeping the database online with <2 % latency increase.

> **Result (Quantified Impact)**  
> * Reduced storage by 15 GB (~10 % of total DB size).  
> * Cut query execution time for analytics jobs by 18 %.  
> * No downtime reported; all downstream services continued to run uninterrupted.  

> **Learnings** – I documented the migration pattern in our internal knowledge base and introduced a “schema‑drift” alert in CloudWatch, preventing future accidental drops. This reinforced ownership of data integrity across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
