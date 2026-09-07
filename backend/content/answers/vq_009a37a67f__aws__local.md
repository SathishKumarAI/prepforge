---
qid: vq_009a37a67f__aws__local
question: Can one rename a column in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 510
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:12-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with modernizing a legacy on‑prem MySQL schema for the **Customer Insights** service. A key requirement from product was to rename the `cust_id` column to `customer_uuid` so that downstream analytics could join across services. The table had ~12 M rows, 40 GB of data, and was live 24/7 with >200 concurrent writes.

**Action**  
1. **Design** – I chose a *zero‑downtime* strategy:  
   - Create a new column `customer_uuid` (UUID type).  
   - Run an incremental migration script that copies values from `cust_id` to `customer_uuid` in batches of 50 k rows, updating the application code to read the new column.  
   - Use **AWS RDS for MySQL** with *Read Replica* to offload the bulk copy and keep the primary available.  
   - Leverage **Amazon S3 + Athena** to validate data integrity after migration.

2. **Execution** – The script ran on the replica, took 4 h, and used <10 % CPU. After switchover, I dropped `cust_id` from the primary in a single maintenance window (30 min).  
3. **Post‑mortem** – Added automated monitoring: CloudWatch alarms for replication lag >1 s and Lambda to trigger rollback if validation fails.

**Result**  
- Zero customer impact; no service downtime.  
- Migration completed in 4.5 h versus the 24 h baseline of a full table rebuild.  
- Cost savings: avoided an extra RDS instance by using replicas; total migration cost <$200.  
- Learned that incremental column copy + read replica is far more scalable than `ALTER TABLE RENAME COLUMN` for large tables.

**Leadership Principles Reflected**  
- **Ownership** – I owned the end‑to‑end process, from design to rollback plan.  
- **Dive Deep & Bias for Action** – Chose a data‑driven, low‑risk migration path and executed it quickly.  

Bar‑raisers will note my ownership, deep technical reasoning, quantified impact, and proactive learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
