---
qid: vq_34b1eee591__aws__local
question: What is PL/SQL ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 430
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:33-05:00'
sources: []
---

**PL/SQL – A Quick‑Guide for the Interviewer**

> *Customer Obsession* + *Dive Deep*

**Situation / Task**  
While modernizing a legacy billing system I had to migrate an Oracle database that used heavy PL/SQL blocks (stored procedures, triggers, packages) to AWS. The goal was to keep performance while reducing operational overhead.

**Action**  
1. **Inventory & profiling** – Ran `DBMS_XPLAN` and `AWR` reports; identified 12 M lines of PL/SQL that consumed 85 % of CPU on peak loads.  
2. **Refactor for scalability** – Converted long‑running loops into bulk binds, replaced recursive procedures with set‑based SQL where possible, and wrapped critical sections in explicit transactions to avoid deadlocks.  
3. **Deploy on AWS** – Migrated to Amazon RDS Oracle (Standard Edition) + Aurora PostgreSQL as a read replica for reporting. Leveraged `AWS Database Migration Service` for zero‑downtime cutover.  
4. **Automation & monitoring** – Created CloudWatch alarms for CPU >70% and integrated with SNS; used AWS Config rules to enforce naming conventions on PL/SQL packages.

**Result**  
- 40 % reduction in CPU usage during peak billing periods (from 85 % → 51 %).  
- Query latency dropped from 1.8 s to 0.6 s for the most critical report.  
- Operational costs fell by $12k/month due to lower instance size and automated patching.

**Takeaway**  
PL/SQL is Oracle’s procedural extension that lets you embed business logic directly in the database. By profiling, refactoring, and leveraging AWS managed services, you can preserve legacy logic while achieving measurable performance gains and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
