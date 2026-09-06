---
qid: ing_8a890cb877__fp__local
question: 'Explain: don''t let you put into your dynamodb — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 405
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:08-05:00'
sources: []
---

### Why DynamoDB *“doesn’t let you put”* in the way you expect

At its core, DynamoDB is a key‑value store that guarantees **linearizability** for each partition key while scaling horizontally by sharding that key across many nodes.  
When a client issues a `PutItem`, DynamoDB must decide *which node will own the item* and *when that write can be considered durable*.  
The fundamental problem is that the data owner (a shard) may be replicated on several nodes for fault‑tolerance, but those replicas cannot all be updated atomically without incurring the coordination cost of a distributed lock.  

**Solution:** DynamoDB uses **asynchronous replication with quorum writes**.  
A `PutItem` succeeds after the coordinator node acknowledges receipt and forwards the write to *k* replicas (typically 3). The client is allowed to continue, but the write becomes visible only when at least one replica has persisted it. If a replica fails before acknowledging, the write is retried; if all replicas fail, the operation returns an error.  

**Non‑obvious insight:**  
Because each partition key maps deterministically to a *hash bucket*, the system can **predict which nodes will be involved in any put**. This predictability allows DynamoDB to pre‑allocate “write slots” on those nodes, ensuring that even under extreme load the coordinator can immediately accept writes without waiting for network round‑trips to all replicas.  
Thus, “don’t let you put into your DynamoDB” is not a limitation—it’s an architectural choice that trades immediate consistency for massive write throughput while still guaranteeing durability through eventual quorum confirmation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
