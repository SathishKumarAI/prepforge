---
qid: ing_ffcd9d8894__star__local
question: 'Explain: Transaction T'''': — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:05-05:00'
sources: []
---

**Situation** – While leading the migration of our legacy retail POS system to a cloud‑native microservices architecture, we discovered that the nightly batch job updating inventory counts was frequently leaving tables in an inconsistent state during partial failures.

**Task** – I needed to redesign the update logic so that every inventory adjustment would satisfy ACID guarantees: Atomicity, Consistency, Isolation, and Durability, without sacrificing throughput or adding prohibitive latency.

**Action** – First, I mapped each batch step to a single transaction T'' in PostgreSQL, using `BEGIN; ... COMMIT;` blocks with explicit row locks (`SELECT … FOR UPDATE`). To preserve **Isolation**, I set the isolation level to `REPEATABLE READ`, preventing phantom reads across concurrent updates. For **Durability**, I leveraged WAL replication and ensured checkpoints occurred before commit. I also introduced a two‑phase commit for cross‑service updates (inventory service ↔ order service) via the `pg_2pc` extension, guaranteeing atomicity across services. Finally, I added instrumentation to log transaction durations and rollback counts, feeding back into our CI pipeline.

**Result** – Post‑deployment, inventory inconsistencies dropped from 4 % to <0.01 %. The batch job’s average latency increased by only 12 ms per record, keeping nightly throughput within SLA. I learned that careful isolation level tuning combined with two‑phase commits can reconcile strict ACID compliance with high‑performance microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
