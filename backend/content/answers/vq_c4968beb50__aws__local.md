---
qid: vq_c4968beb50__aws__local
question: What is SELF JOIN?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 408
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:21-05:00'
sources: []
---

**Self‑join** is a relational‑database operation where a table is joined to itself—think of it as creating two “aliases” for the same dataset and linking rows that satisfy a predicate (e.g., `WHERE t1.manager_id = t2.id`).  

---

### Situation  
I was tasked with generating an **org chart** for a SaaS company’s employee database in Amazon Redshift. The requirement: list each employee alongside their manager, all in one query.

### Task  
Design a solution that is *scalable*, *high‑availability*, and *cost‑efficient* while delivering results within 30 s for millions of rows.

### Action  
1. **Self‑join** the `employees` table on `manager_id = id`.  
2. Use Redshift’s **sort keys** (`emp_id`) to keep data locality high.  
3. Enable **zone maps** to prune partitions early, cutting I/O by ~70%.  
4. Run the job as a scheduled AWS Glue crawler that refreshes a materialized view in **Athena** for ad‑hoc BI queries—reducing compute cost by 40% versus running the join each time.

### Result  
- Query runtime dropped from 12 min to **<30 s** on 5 M rows.  
- Cost per query fell from $0.25 to $0.07, saving ~$9k annually.  
- The org‑chart became a single table view, simplifying downstream analytics and improving developer velocity.

---

**Leadership Principles:** *Ownership* (I took full responsibility for the data pipeline) and *Dive Deep* (I profiled query plans, tuned sort keys, and measured impact). This showcases end‑to‑end ownership, measurable ROI, and learning from iterative performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
