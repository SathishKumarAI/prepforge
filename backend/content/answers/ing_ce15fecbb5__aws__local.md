---
qid: ing_ce15fecbb5__aws__local
question: 'Explain: Databricks Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:01-05:00'
sources: []
---

**Situation / Task**  
At a FAANG‑style tech company I led a project to replace the legacy “Custom Problem” pipeline in Databricks that was stuck at **4 hrs per run** and generated noisy alerts for over 200 ML teams. The goal: cut runtime by 70 % while keeping data quality intact.

**Action**  
1. **Ownership & Dive Deep:** I mapped every stage of the ETL, discovered a *single* bottleneck—an unoptimized Spark shuffle on a 10‑TB Parquet table.  
2. **Bias for Action & Invent & Simplify:** Re‑architected the pipeline to use **Delta Lake** with schema‑on‑write and **OPTIMIZE + ZORDER**. Switched from `groupBy` to `approxQuantile` where acceptable, and introduced **Databricks Jobs Scheduler** instead of manual triggers.  
3. **AWS Services:** Deployed the job on an **EMR cluster** (spark 3.x) auto‑scaling with Spot Instances; leveraged **S3** for raw data, **Glue Data Catalog** for schema governance, and **Athena** for ad‑hoc validation.  
4. **Cost & Availability:** Spot instances reduced compute cost by 45 %. EMR’s multi-AZ ensures high availability; automated rollback on job failure guarantees reliability.

**Result**  
Runtime dropped from **4 hrs → 1 hr 12 min** (73 % reduction). Cost per run fell from $120 to $65. Alert noise decreased by **85 %**, freeing 5 data‑ops engineers per week. The solution is now a reusable pattern across the org, and I documented it in an internal playbook that has been referenced for 12 downstream projects.

**Reflection**  
I learned that *profiling at scale* often reveals a single choke point; investing time upfront to instrument and iterate can yield outsized gains. This experience underscores my commitment to **Customer Obsession** (teams get faster insights) and **Ownership** (taking full responsibility from diagnosis to deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
