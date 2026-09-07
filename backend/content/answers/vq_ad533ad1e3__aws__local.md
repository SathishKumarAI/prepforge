---
qid: vq_ad533ad1e3__aws__local
question: 'Which set of commands must be added to handle the non-predefined error:
  ORA-02292?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 453
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:53-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** In a production data‑warehouse on AWS RDS for Oracle, a nightly ETL job failed with *ORA‑02292: integrity constraint violated – child record found*.  
> **Task:** I had to design an automated remediation that prevented manual intervention and ensured data consistency without impacting downstream analytics.  
> **Action:**  
> 1. **Diagnose** the offending FK by querying `USER_CONSTRAINTS` and `DBA_EDITIONABLE_VIEWS`.  
> 2. Create a **stored procedure** (`handle_oracle_02292`) that:  
>    - Accepts the table name, parent PK value, and child table list.  
>    - Executes `DELETE FROM <child_table> WHERE <fk_col> = :parent_pk` for each child (using dynamic SQL).  
> 3. Wrap the procedure in a **PL/SQL wrapper** that logs actions to an audit table (`oracledb_error_log`).  
> 4. Add a **DML trigger** on the parent table: `AFTER DELETE ON <parent_table> FOR EACH ROW BEGIN handle_oracle_02292(:OLD.id); END;`.  
> 5. Deploy the code via **AWS CodePipeline** (GitHub → Lambda → RDS).  
> 6. Add a **CloudWatch Alarm** on the audit table’s error count and trigger an SNS notification to Ops.  

> **Result:** The automated cleanup reduced manual ticket volume by **73%**, cut ETL downtime from 12 hrs to <30 min, and maintained data integrity across ~15 child tables (≈1.2 M rows).  

**What a bar‑raiser hears**

* Deep dive into Oracle internals (constraints, triggers).  
* Quantified impact on ops hours and business continuity.  
* Ownership: end‑to‑end solution from diagnosis to CI/CD deployment.  
* Learning: after the first rollout we discovered a race condition; added `LOCK TABLE` statements to serialize deletes, improving stability by 99%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
