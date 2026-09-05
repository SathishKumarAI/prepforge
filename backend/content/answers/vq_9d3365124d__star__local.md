---
qid: vq_9d3365124d__star__local
question: How to improve performance of SQL queries?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 305
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:52-05:00'
sources: []
---

**Situation** – In my last role I was on a reporting team that delivered daily sales dashboards for the executive office. The dashboards pulled data from a 12‑million row fact table and our queries were taking 4–5 minutes, causing the reports to miss their 9 a.m. deadline.

**Task** – I needed to cut query runtime to under 30 seconds so that the dashboards could refresh in real time without impacting other workloads.

**Action** – First, I ran `EXPLAIN` plans and discovered a full table scan on the fact table because of a non‑indexed foreign key join. I created composite B‑tree indexes on `(store_id, sale_date)` and a covering index for the most frequently selected columns. Next, I rewrote the query to use window functions instead of correlated subqueries, reducing row materialization from 12M to 200K intermediate rows. Finally, I partitioned the fact table by month and set `ANALYZE` to refresh statistics, enabling the optimizer to pick the right index.

**Result** – Query time dropped from 4 minutes to 25 seconds, a 95% improvement. The dashboards now update instantly, and we saw a 30% reduction in database lock contention during peak hours. I learned that profiling, targeted indexing, and query refactoring together can deliver dramatic performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
