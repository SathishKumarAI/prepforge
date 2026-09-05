---
qid: vq_7bd37ba727__star__local
question: WHAT IS A DEADLOCK IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 298
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:16-05:00'
sources: []
---

**Situation:** While leading a migration of our legacy e‑commerce platform to Azure SQL Database, we noticed a spike in transaction latency during peak checkout hours—latency was up to 3 seconds, pushing us over the SLA.

**Task:** I had to identify the root cause and eliminate the delays without impacting user experience or data integrity.

**Action:** I started by enabling the “Show deadlock graph” option on our SQL Server instance and replayed a production workload in a test environment. The graph revealed a classic read‑write deadlock between two stored procedures: `sp_UpdateCart` (locking rows in `Carts`) and `sp_PlaceOrder` (locking rows in `Orders`). I refactored the code to enforce a consistent lock order—first updating `Orders`, then `Carts`. Additionally, I added row‑level locking hints (`UPDLOCK`) and increased the isolation level to `READ COMMITTED SNAPSHOT` to reduce blocking. Finally, I introduced retry logic with exponential backoff in the application layer.

**Result:** Post‑deployment, deadlocks dropped from 12 per minute to zero, and average checkout latency fell below 200 ms—well within SLA. The exercise reinforced that proactive monitoring and consistent locking strategies are key to robust transactional systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
