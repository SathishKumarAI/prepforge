---
qid: vq_de1dffcb09__aws__local
question: Why are the DML operations are slower on Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 390
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:39-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce firm we were hitting a 30 % latency spike in nightly ETL jobs that updated millions of rows in our PostgreSQL fact table. The team suspected the new composite index on `(customer_id, order_date)` was to blame.

**Action**  
I owned the investigation:  
1. **Dive Deep** – profiled each DML statement with `EXPLAIN ANALYZE`. I discovered that every UPDATE/INSERT triggered a full index rebuild because the column used in the WHERE clause (`order_status`) changed frequently, forcing index maintenance for every row.  
2. Re‑engineered the schema: split the heavy composite index into two smaller ones—one on `(customer_id)` (used for reads) and one on `(status_timestamp)` (used only by the nightly job).  
3. Leveraged **AWS RDS Aurora PostgreSQL**’s “parallel query” feature to run the rewrite in parallel, cutting the maintenance window from 4 hrs to 45 min.

**Result**  
- DML latency dropped from ~120 ms/row to ~35 ms/row (a 70 % improvement).  
- The nightly job now completes within its SLA, freeing up resources for real‑time analytics.  

**Reflection & Learning**  
Ownership taught me to question default index designs; the deep dive revealed a classic “write amplification” problem that would have cost us $10k/month in compute if left unchecked. I documented the trade‑off: fewer indexes mean slightly slower point reads but dramatically faster bulk writes—an optimal balance for our use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
