---
qid: ing_08641e14b2__fp__local
question: 'Explain: Critical Detail for Reservations — Airbnb System Design - by Neo
  Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 350
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:39-05:00'
sources: []
---

### Why a “Critical‑Detail” flag is necessary

When an AirBnB reservation is created the system must **reserve** inventory (the unit of stay) and lock it for a finite window before payment succeeds.  
If two concurrent requests hit the same listing at the same instant, the naïve “check‑and‑reserve” pattern can let both succeed, because each reads the same available count *before* either writes back.  This is a classic **lost update** problem in distributed systems.

The critical detail flag solves this by turning reservation into an *optimistic concurrency control* step:

1. **Read‑only pass** – A query fetches `available_units` and assigns a provisional ID.  
2. **Critical‑detail flag** – The write operation includes the current `version` (or timestamp).  
3. **Conditional update** – The database updates only if the stored version matches the supplied one.

If two requests collide, one succeeds; the other receives an “out‑of‑stock” error and must retry with a fresh read.  This guarantees *serializability* without locking the entire table, preserving throughput while ensuring correctness.

#### Non‑obvious insight

Most designs treat the flag as just a “check”. In reality it is a **distributed transaction watermark**: by coupling the version to the write, we convert an idempotent read into a *single‑write atomicity* guarantee.  This pattern scales because it eliminates lock contention and allows multiple replicas to accept reservations independently while still reconciling conflicts at commit time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
