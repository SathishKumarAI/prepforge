---
qid: vq_4a5ff2b3ad__star__local
question: WHAT IS OPTIMISTIC VS. PESSIMISTIC LOCKING?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 295
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:02-05:00'
sources: []
---

**Situation:** In the middle of a high‑traffic e‑commerce platform upgrade, our order service was experiencing frequent deadlocks on the inventory table as multiple microservices updated stock levels concurrently.

**Task:** I had to redesign the locking strategy so that we could keep throughput high without compromising data integrity, all while meeting a two‑hour release window.

**Action:** I first profiled lock contention using PostgreSQL’s `pg_locks` and found that most deadlocks were caused by long‑running SELECT‑FOR‑UPDATE statements. To avoid pessimistic locking’s heavy impact, I implemented an optimistic approach: each service read the current stock value and version number, performed the decrement in memory, then attempted a conditional UPDATE (`WHERE version = old_version`). If the row had changed, the update failed; the service would retry with the new values. For critical paths where consistency was paramount (e.g., final payment confirmation), I kept a lightweight pessimistic lock only on the last commit step.

**Result:** The change reduced deadlock incidents by 85% and increased transaction throughput from 1,200 to 2,500 ops/sec during peak hours. I learned that blending optimistic locks for bulk operations with selective pessimistic locks for critical checkpoints can deliver both performance and correctness in a distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
