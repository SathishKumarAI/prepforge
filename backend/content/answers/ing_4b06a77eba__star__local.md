---
qid: ing_4b06a77eba__star__local
question: 'Explain: Cassandra vs. MongoDB: ACID Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 326
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:22-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with migrating a real‑time inventory system from a legacy SQL database to a NoSQL solution. The product team needed both high write throughput and strict consistency for stock levels, but also wanted the flexibility of document storage.

**Task**  
I had to evaluate whether Cassandra or MongoDB would better satisfy our ACID requirements while maintaining performance at 50k writes per second across multiple regions.

**Action**  
I set up side‑by‑side prototypes: in Cassandra I used lightweight transactions (LWT) on the “stock” table, leveraging Paxos for linearizable updates and configuring a replication factor of 3 with QUORUM consistency. In MongoDB I enabled multi‑document ACID transactions via replica sets, using session‑based writes with snapshot isolation. I benchmarked both under simulated load, measuring write latency, conflict resolution time, and durability guarantees.

**Result**  
Cassandra’s LWT kept average write latency below 10 ms but incurred a 30% overhead during conflicts; MongoDB’s transactions maintained sub‑20 ms latency but required more memory for snapshot storage. Ultimately we chose Cassandra for its lower write cost at scale, accepting occasional “last‑write wins” scenarios mitigated by application logic. I learned that ACID in NoSQL is often a trade‑off between consistency guarantees and throughput, and the choice depends on workload patterns rather than a single metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
