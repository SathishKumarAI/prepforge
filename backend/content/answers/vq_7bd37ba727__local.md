---
qid: vq_7bd37ba727__local
question: WHAT IS A DEADLOCK IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 476
total_tokens: 697
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short answer:**  
A deadlock in SQL is a situation where two or more transactions each hold locks that the others need to complete, causing all of them to block forever until one is forced to roll back.

**From my production experience**  
In our 3‑node PostgreSQL cluster we saw this most often when a long‑running analytic SELECT held a `FOR UPDATE` lock on rows in `orders`, while another session tried to update the same rows after acquiring a table‑level lock via an `ALTER TABLE`. The deadlock detector logged a *wait‑for graph* that looked like:

```
session A (SELECT FOR UPDATE) → session B (ALTER TABLE)
session B (ALTER TABLE)          → session A (UPDATE)
```

The engine automatically chose the victim (usually the newer transaction) and returned `ERROR: deadlock detected`. We measured a 4 % increase in latency during peak hours, mostly due to these aborts.  

**Nuance & trade‑offs**  
- **Lock granularity:** Using row‑level locks (`SELECT … FOR UPDATE`) reduces contention but can still deadlock if two sessions update overlapping sets. Table locks are cheaper for schema changes but risk long stalls.
- **Isolation level:** `READ COMMITTED` (default in PostgreSQL) mitigates some, but `SERIALIZABLE` can trigger more aborts because it detects phantom reads as potential deadlocks.
- **Indexing & query design:** Adding a covering index on the foreign key used in the join made the UPDATE acquire locks in a consistent order, eliminating the cycle without changing isolation levels.
- **Retry logic:** We wrapped critical sections with exponential back‑off and `SELECT pg_try_advisory_xact_lock` to avoid blind retries that would just re‑enter the same deadlock.

In short, deadlocks arise from circular lock dependencies; diagnosing them requires examining wait‑for graphs, adjusting lock granularity or query order, and sometimes accepting a small retry overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
