---
qid: ing_a957d4044c__star__local
question: 'Explain: Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 329
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:25-05:00'
sources: []
---

**Situation:** At my previous startup we built a recommendation engine that stored user‑interaction logs in a PostgreSQL database. The “interactions” table had over 80 million rows, and our analytics queries were slow because they scanned the entire table to count actions per user.

**Task:** I needed to redesign the schema so that user‑centric aggregations ran under two seconds while keeping insert throughput high enough for real‑time ingestion.

**Action:** I added a clustered index on `(user_id, timestamp)` and switched the storage engine from default heap to a custom B‑Tree layout. This meant the table’s physical order matched the query order, eliminating random page reads. I also created a partial index on `action_type = 'click'` for the most frequent filter. During migration, I used PostgreSQL’s `CLUSTER` command in a rolling window: first backfilled the new index offline, then switched read replicas to the clustered version and gradually routed writes through a write‑ahead log that kept the order consistent.

**Result:** Post‑migration, our per‑user aggregation queries dropped from 18 s to 1.3 s (a 90% reduction), while ingestion latency stayed under 200 ms. I learned that clustering can be as powerful as sharding when the access pattern is predictable, but it requires careful planning of write paths and maintenance windows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
