---
qid: ing_511247b7f9__star__local
question: 'Explain: Costs of Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 336
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:25-05:00'
sources: []
---

**Situation** – In a recent fraud‑detection project I was responsible for training a real‑time model on streaming transaction logs stored in a PostgreSQL cluster. The raw table had over 10 million rows per day, and every inference required a lookup of user features by `user_id`. Initial queries took ~350 ms, pushing latency beyond the SLA.

**Task** – I needed to reduce query time to under 50 ms while keeping storage costs reasonable, without sacrificing data consistency for the nightly batch retraining pipeline.

**Action** – I evaluated three indexing strategies: a single B‑tree on `user_id`, a composite index on `(user_id, last_update)`, and a partial index covering only active users. Using EXPLAIN ANALYZE, I benchmarked each against 1 million random lookups. The partial index cut disk usage by ~30 % and sped queries to 35 ms, but required a background job to keep it refreshed. I implemented that job with a lightweight WAL‑shipped trigger, ensuring minimal write amplification.

**Result** – Query latency dropped from 350 ms to 35 ms, meeting the SLA. Storage overhead fell by 30 %, and we avoided unnecessary index bloat on inactive rows. I learned that selective indexing combined with smart refresh logic can deliver both performance and cost efficiency in ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
