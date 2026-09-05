---
qid: ing_1c7d89d092__star__local
question: 'Explain: Isolation — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 399
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:32-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection model deployment at a fintech startup, we had to update the user risk scores every minute. The production database held both real‑time transaction logs and the pre‑computed score table used by the scoring API. A batch job would run nightly to recalc scores, but it also needed to read fresh logs that were being written concurrently.

**Task** – I had to design a system where the nightly recomputation did not see partially updated data, yet still allowed the real‑time ingestion pipeline and API queries to operate without blocking or returning stale scores. The goal was to preserve ACID isolation for the write‑heavy update process while keeping latency low for consumers.

**Action** – I introduced a two‑phase commit protocol around the recomputation job: first, the job opened a transaction on a read replica that had a snapshot of the log table as of the last checkpoint; second, it performed all score calculations in memory and staged writes to a new versioned score table. Once ready, an atomic “swap” operation replaced the old scores with the new ones. To avoid locking the main database, I used PostgreSQL’s MVCC snapshots for reads and implemented optimistic concurrency control on the API layer so that any read that hit a stale row would retry against the updated snapshot.

**Result** – The nightly job completed 30 % faster (from 12 min to 8 min) while guaranteeing 100 % isolation; no user ever received an intermediate score during recomputation. The API latency stayed under 20 ms, and we reduced data‑consistency incidents by 90 %. This exercise taught me how to blend ACID principles with scalable system design by leveraging versioned tables and snapshot isolation rather than heavy locking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
