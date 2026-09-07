---
qid: vq_a79bc101cd__aws__local
question: To find duplicate record in table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 551
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:36-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was asked to audit a 4 TB transactional data lake for duplicates before migrating it to Redshift Spectrum. The business needed a clean dataset for downstream analytics; any duplicate could skew KPIs by up to 3 % and cost $2K/month in storage.

**Task (T)**  
Build an automated, scalable pipeline that flags duplicate rows on the primary key (`order_id`) across all partitions, reports counts, and writes results back to S3 for audit. I had to do this within a two‑week sprint while keeping costs under $1 k/month.

**Action (A)**  
1. **Requirements & Design** – Defined “duplicate” as identical `order_id` + `customer_id`.  
2. **AWS Services** –  
   - *Glue* for ETL orchestration (Python Spark jobs).  
   - *Athena* to run a quick `SELECT order_id, COUNT(*) … HAVING COUNT(*) > 1`.  
   - *S3* as the landing zone for raw data and audit logs.  
   - *SNS* + *Lambda* to notify downstream teams when thresholds are exceeded.  
3. **Scalability & Availability** – Glue jobs run on a DPUs‑based cluster; I enabled auto‑scale so peak loads (up to 10 TB/day) were handled without manual intervention. Athena’s serverless model kept availability high and avoided provisioning overhead.  
4. **Cost Control** – Used partitioned tables in Glue catalog, limiting Athena scans to relevant partitions (≈15 GB per run). Estimated monthly spend: $650 (Glue + Athena + S3 I/O).  

**Result (R)**  
The pipeline flagged 12,374 duplicate groups (total 24 k rows) across the lake. By removing them we reduced storage by 0.5 % and prevented a projected $1.2 K/month in downstream data‑quality costs. The solution ran on schedule, earned a “quick win” badge from leadership, and I documented lessons that lowered duplicate detection time from weeks to minutes for future projects.

---

**Leadership Principles Highlighted**

- **Ownership** – Took full responsibility from design through deployment and monitoring.  
- **Dive Deep** – Analyzed data partitions, Spark job logs, and Athena query plans to optimize cost & performance.  

*Bar‑raiser cue:* Look for evidence that the candidate not only solved the problem but also quantified impact, considered trade‑offs, and reflected on learning (e.g., how partitioning improved costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
