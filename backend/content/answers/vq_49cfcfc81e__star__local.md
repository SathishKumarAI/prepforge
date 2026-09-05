---
qid: vq_49cfcfc81e__star__local
question: What happens when Clustered Index is created?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 328
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:47-05:00'
sources: []
---

**Situation:** In my previous role at a fintech startup, our transactional database was growing fast—over 10 M rows per month—and the nightly batch job that generated fraud‑alert reports was timing out by 45 minutes after we hit the last quarter of 2023.

**Task:** I needed to reduce the report generation time to under 20 minutes without rewriting any application code, while ensuring that read performance for our primary key queries stayed fast enough for real‑time dashboards.

**Action:** I analyzed the query plans and discovered that most scans were full‑table because the `transaction_id` column was a non‑clustered index. I created a clustered index on `(customer_id, transaction_date DESC)` to align with the most common filter patterns (`WHERE customer_id = ? AND transaction_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)`). I also updated statistics and rebuilt fragmented pages. To mitigate write overhead, I scheduled the index rebuild during off‑peak hours and monitored the lock escalation using `sys.dm_db_index_physical_stats`.

**Result:** The report job dropped from 45 minutes to 12 minutes—a 73% reduction—while real‑time query latency improved by ~30%. This exercise taught me how clustering can dramatically improve data locality for range scans, but also that careful scheduling and monitoring are essential to avoid write stalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
