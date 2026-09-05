---
qid: ing_c31f8bef44__star__local
question: 'Explain: Isolation Levels — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:06-05:00'
sources: []
---

**Situation**  
While building a real‑time recommendation engine, our microservice pipeline processed user clickstreams and updated a click‑through rate (CTR) model stored in a PostgreSQL database. During peak traffic we noticed the CTR metrics drifted by up to 12% after batch updates.

**Task**  
I needed to guarantee that concurrent writes from the streaming layer and scheduled retraining jobs did not corrupt the CTR table, while keeping latency below 200 ms for read queries used in live recommendations.

**Action**  
First, I mapped out the isolation requirements: reads must never see partially updated rows, and writes should block only when they modify the same key. I switched from READ COMMITTED to REPEATABLE READ, adding explicit SELECT…FOR UPDATE locks on the `ctr_stats` table for each user segment. To avoid lock contention, I partitioned the table by hash of user_id, so concurrent updates hit different partitions. I also introduced a write‑ahead log that batches updates and applies them in a single transaction every 500 ms, reducing the number of active locks. Finally, I added monitoring to detect deadlocks and automatically retry transactions.

**Result**  
The CTR drift dropped from 12% to <1%, read latency stayed under 180 ms, and we saw a 4% lift in conversion rates due to more accurate recommendations. I learned that choosing the right isolation level and fine‑grained locking can reconcile consistency with high throughput in ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
