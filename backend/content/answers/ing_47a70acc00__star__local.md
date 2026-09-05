---
qid: ing_47a70acc00__star__local
question: 'Explain: Step 8 - Lock Manager — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 381
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:52-05:00'
sources: []
---

**Situation**  
During a migration of our e‑commerce platform from MySQL 5.7 to MariaDB 10.6, we noticed that order processing queries were stalling under peak traffic. The transaction logs showed repeated “deadlock” errors while inserting into the `orders` table.

**Task**  
I had to identify why the lock manager was causing contention and redesign the transaction flow so that the system could handle 4 k concurrent orders per minute without deadlocks, keeping latency below 150 ms.

**Action**  
First, I profiled the query plan using `EXPLAIN ANALYZE` and discovered that every insert acquired an exclusive lock on the entire table because of a missing index on `user_id`. I added a composite key (`user_id`, `created_at`) to reduce lock granularity. Next, I rewrote the transaction in two phases: (1) a lightweight “insert‑only” phase that used `INSERT … ON DUPLICATE KEY UPDATE` with `NOWAIT` to avoid blocking, and (2) a separate “status update” phase that ran asynchronously via a worker queue. I also tuned MariaDB’s innodb_lock_wait_timeout from 50 s to 5 s and enabled adaptive hash index for faster lookups.

**Result**  
After deployment, deadlocks dropped from ~12% of transactions to <0.1%. Throughput rose from 2.3 k orders/min to 4.7 k orders/min while maintaining sub‑150 ms latency. I learned that fine‑grained indexing combined with transaction isolation tuning can dramatically reduce lock contention in high‑write workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
