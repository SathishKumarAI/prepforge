---
qid: ing_31c0694e08__star__local
question: 'Explain: Example: Overselling Inventory — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 386
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:45-05:00'
sources: []
---

**Situation:**  
When I joined the e‑commerce team, our checkout microservice was hitting a 12 % cart abandonment rate because users saw items “in stock” but were later blocked at payment due to inventory being sold out in real time. The database was a sharded MySQL cluster with eventual consistency; two orders could reserve the same SKU before the first commit flushed.

**Task:**  
I had to design a robust, high‑throughput inventory reservation system that prevented overselling while keeping latency under 200 ms for the checkout flow and scaling to millions of concurrent users during flash sales.

**Action:**  
I introduced an ACID‑compliant transactional layer using PostgreSQL with row‑level locking on the `inventory` table. Each order acquisition started a lightweight transaction: `SELECT FOR UPDATE` on the SKU row, checked the `available_qty`, decremented it, and committed atomically. To avoid bottlenecks, I sharded inventory by product category and used optimistic retry logic with exponential backoff for lock contention. For read‑heavy scenarios, I kept a Redis cache of available quantities, invalidated only after a successful commit. I also added an asynchronous “reconciliation” job that periodically reconciled the cache against the DB to guard against rare failures.

**Result:**  
After deployment, cart abandonment dropped from 12 % to 4 %, and we never saw an oversell event during a 10‑million‑user flash sale. The transaction throughput stayed above 5k ops/sec with average latency <150 ms. I learned that coupling strict ACID guarantees with sharding and cache invalidation can balance consistency, performance, and scalability in real‑world e‑commerce systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
