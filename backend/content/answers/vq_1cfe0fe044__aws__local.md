---
qid: vq_1cfe0fe044__aws__local
question: How to remove duplicate rows from table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 444
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:26-05:00'
sources: []
---

**Situation (S)**  
In a recent ETL pipeline for our nightly data lake, the `transactions` Redshift table kept growing with duplicate rows due to downstream micro‑services re‑ingesting partial batches. The duplicates inflated storage by 12 % and slowed analytics queries by ~30 %.

**Task (T)**  
I was tasked to design a robust deduplication strategy that could run on a schedule, keep the pipeline cost‑effective, and not affect query latency.

**Action (A)**  
1. **Data‑driven requirement** – I defined “duplicate” as rows with identical `transaction_id` + `timestamp`.  
2. **Design** –  
   * Use **Amazon Redshift Spectrum** to read raw logs from S3, then materialize a **deduped staging table** via `ROW_NUMBER()` window function.  
   * Replace the production table using an atomic `INSERT … SELECT` into a new temporary table followed by `DROP/RENAME`.  
   * Schedule with **AWS Glue** jobs (Python ETL) and orchestrate via **Step Functions** for idempotency.  
3. **Scalability & Cost** – The job runs on an **RA3 instance** at 2× the current size; we only pay for compute during execution, not for storage of the interim table.  
4. **Availability** – All operations are wrapped in a transaction to guarantee consistency; if the job fails, no data is lost.

**Result (R)**  
The deduplication job runs nightly in under 10 minutes, cutting duplicate rows by 99.8 % and saving ~\$1,200/month on storage and query costs. I documented the process in a shared SOP and trained two teammates, ensuring ownership continuity.  

---

> **Leadership Principles:** *Ownership* – I took full responsibility for the pipeline health; *Dive Deep* – I analyzed logs to pinpoint the duplication source; *Deliver Results* – Achieved measurable cost savings and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
