---
qid: ing_8e52050891__star__local
question: 'Explain: Isolation — Acid Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 323
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:22-05:00'
sources: []
---

**Situation**  
During a production deployment of our recommendation engine, we noticed that nightly batch jobs were occasionally producing stale model scores. The pipeline ran in an SQL‑based feature store where the training data was continuously updated by a separate ingestion job.

**Task**  
I needed to ensure that each training run saw a consistent snapshot of features without being corrupted by concurrent writes, while keeping latency low enough for our 4 pm model refresh deadline.

**Action**  
I introduced explicit transaction isolation using PostgreSQL’s *REPEATABLE READ* level. For every training job I opened a single read‑only transaction at the start, captured a `transaction_snapshot`, and executed all feature queries against that snapshot. This prevented phantom reads from the ingestion process. To keep throughput high, I also added a lightweight advisory lock to batch write operations so they would wait only when a training job was in progress. Finally, I instrumented the pipeline with Prometheus metrics to track transaction aborts and retry counts.

**Result**  
Stale score incidents dropped from 7 % of predictions per day to <0.1 %. Training latency increased by just 12 %, staying well within our refresh window. I learned that careful isolation level selection can dramatically improve data consistency in ML pipelines without sacrificing performance, and that monitoring transaction metrics is essential for early detection of contention issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
