---
qid: vq_2124d2f59e__aws__local
question: What is SYSTEM Tablespace and when is it created?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 475
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:16-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Situation:** While redesigning the on‑premises data warehouse for a fintech client, I discovered that queries were hitting the *SYSTEM* tablespace at 95 % capacity during peak hours, causing latency spikes.  
> 
> **Task:** My goal was to understand why the SYSTEM tablespace was so heavily used, eliminate unnecessary growth, and ensure high availability with cost control.  
> 
> **Action:** I first mapped out the Oracle architecture: the SYSTEM tablespace is a *data dictionary* space that stores metadata (e.g., data dictionary views) and must exist at database creation. It is automatically created when `CREATE DATABASE` runs and cannot be dropped. I identified that user tables had been inadvertently placed in SYSTEM via an automated script that defaulted to the system schema.  
> 
> 1. **Dive Deep** – I queried `DBA_TABLESPACES` and `DBA_SEGMENTS`, revealing that 70 % of SYSTEM’s space was occupied by user segments (≈ 2 TB).  
> 2. **Ownership & Bias for Action** – I rewrote the ETL scripts to redirect all new tables to a dedicated *USER_DATA* tablespace, then executed `ALTER TABLE … MOVE` on legacy objects.  
> 3. **AWS‑style Design** – In future migrations, I would use Amazon RDS for Oracle with automated storage scaling and enable the *Storage Autoscaling* feature, ensuring that SYSTEM remains lean while user data scales independently.  
> 
> **Result:** Post‑migration, SYSTEM usage dropped to < 5 % of capacity, query latency improved by 40 %, and we avoided an estimated $3k/month in unnecessary storage costs. The client’s SLA compliance rose from 92 % to 99.8 %.  

**Leadership Principles Anchored:**  
- **Customer Obsession & Deliver Results** – Directly impacted the client's uptime and cost savings.  
- **Ownership & Dive Deep** – Took responsibility, investigated root cause, and implemented a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
