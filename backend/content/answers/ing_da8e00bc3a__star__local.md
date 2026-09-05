---
qid: ing_da8e00bc3a__star__local
question: 'Explain: Status and Lock Lifecycle — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:10-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time recommendation engine that pulled user interaction events from Kafka and refreshed feature vectors in Redis every 5 minutes. The nightly batch job would re‑compute millions of vectors, but a failure mid‑run left some keys partially updated, causing stale recommendations.

**Task** – I had to design an idempotent status‑and‑lock lifecycle so that each vector update could be safely retried without corrupting data or duplicating work, while keeping latency low for real‑time requests.

**Action** – I introduced a two‑phase commit pattern:  
1. **Lock Phase** – Before updating a key, the job writes a short‑lived lock entry in Redis (`lock:<user_id>`) with a 30 s TTL and an “owner” field containing the batch run ID. The lock is acquired via `SETNX`. If it already exists, the worker skips that key and logs a retry count.  
2. **Status Phase** – After computing the new vector, the job writes the result to Redis under a temporary key (`tmp:<user_id>`) and then atomically renames it to the final key with `RENAME`. The status of each key is tracked in a side table (PostgreSQL) with columns: `user_id`, `last_run_id`, `status` (“in_progress”, “completed”), and `updated_at`. If a failure occurs, the next run checks the status table; if the last run ID matches the current one, it knows the key is already up‑to‑date and skips recomputation.  

**Result** – The idempotent lifecycle reduced duplicate work by 87 % and eliminated stale vector incidents. Real‑time recommendation latency dropped from 120 ms to 65 ms on average, and our SLA for data freshness improved from 12 h to under 30 min. I learned that combining lightweight Redis locks with a persistent status table gives both speed and recoverability in large ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
