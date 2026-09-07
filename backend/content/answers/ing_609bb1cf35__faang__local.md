---
qid: ing_609bb1cf35__faang__local
question: 'Explain: OLTP database - DynamoDB — Tech-Stacks-Live-Apps/Grab/OrderProcessing
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 499
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:45-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how Amazon’s **OLTP (Online Transaction Processing)** workloads map to **DynamoDB**, and why it powers live‑app services like Grab’s order processing stack. Assume the goal is low latency, high throughput, and horizontal scalability for read/write heavy transactions.

**2️⃣ Approach**  
*Identify key OLTP requirements*: ACID‑like guarantees (or eventual consistency), strong reads/writes, minimal latency, fault tolerance.  
*Map DynamoDB features*: single‑partition key access, provisioned/auto‑scaling throughput, built‑in replication, conditional writes, and transaction APIs.  
*Explain integration*: API gateway → Lambda → DynamoDB; use Streams for event sourcing; employ DynamoDB Accelerator (DAX) for caching.

**3️⃣ Depth**  
- **Throughput & Partitioning**: Each partition key gets a 10 GB slice; throughput is split across partitions, so hot keys are avoided.  
- **Consistency Models**: Default eventual consistency for reads; strong consistency can be requested at the cost of latency.  
- **Transactions**: `TransactWriteItems` guarantees atomicity across up to 25 items/keys (≈4 MB).  
- **Durability & Replication**: Multi‑AZ, automatic backups, point‑in‑time recovery.  
- **Latency**: Single‑digit ms read/write under normal load; DAX reduces it further.  

**4️⃣ Edge Cases**  
- *Hot partitions*: shard key design is critical—e.g., using a composite key (`userId#timestamp`).  
- *Large items*: DynamoDB caps at 400 KB per item; large blobs go to S3 + pointer in DB.  
- *Write‑heavy bursts*: provisioned throughput may hit limits; use auto‑scaling or increase capacity pre‑emptively.

**5️⃣ Optimize & Communicate**  
Highlight that Grab’s order service uses **DynamoDB Streams** for real‑time analytics and a **Lambda** layer to enforce business rules, ensuring eventual consistency without locking. Explain trade‑offs: higher write cost vs. no RDBMS overhead; use of TTL to auto‑expire stale orders. Conclude by stressing how DynamoDB’s managed nature lets engineers focus on domain logic rather than sharding or replication concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
