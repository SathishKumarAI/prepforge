---
qid: ing_9eb76a6ac7__star__local
question: 'Explain: Transactions and Consistency — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 371
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:29-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time inventory platform for an e‑commerce startup, our order processing had to keep stock counts accurate while handling 5k concurrent requests per second. A single product could be purchased from multiple warehouses simultaneously, and any inconsistency would lead to overselling.

**Task:**  
I needed to design a data layer that guaranteed strong consistency for inventory updates without sacrificing the throughput required by the flash‑sale traffic spikes.

**Action:**  
I evaluated both SQL and NoSQL options. With PostgreSQL I leveraged row‑level locking (`SELECT … FOR UPDATE`) and the ACID guarantees of its MVCC engine, but the lock contention dropped latency from 20 ms to 150 ms during peak load. Switching to a distributed NoSQL store (Cassandra) allowed us to use lightweight transactions (LWT) on the “inventory” column family; we used Paxos‑based consensus under the hood and set `read_repair_chance` to 1.0 for strong consistency. To keep throughput high, I partitioned inventory by warehouse key and used a write‑through cache in Redis to batch updates, reducing write latency to ~30 ms while maintaining serializable reads.

**Result:**  
The LWT‑based design kept oversell errors below 0.01% during the Black Friday sale, with average read/write latency at 35 ms under 10k RPS. I learned that SQL’s ACID model excels for small, tightly coupled transactions, whereas NoSQL’s tunable consistency can deliver comparable guarantees when carefully engineered and combined with caching layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
