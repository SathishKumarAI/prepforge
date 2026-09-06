---
qid: ing_ea35ed0f32__fp__local
question: 'Explain: this table we have to keep all — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 417
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:10-05:00'
sources: []
---

### Why “keep all” is the only sane choice for a hyper‑scale key/value store

At its core DynamoDB is **a distributed hash table that guarantees O(1) lookups** while still offering linear scalability and high availability.  
To achieve this, every partition key must be known to *every* node that might service it; otherwise the routing algorithm would need an external directory, breaking the “single‑table” abstraction.  

1. **Routing without a global index** – DynamoDB uses consistent hashing over the entire key space. If a node only knew part of the table, a lookup could miss its local copy and have to query a coordinator, adding latency and a single point of failure.  
2. **Strong consistency with minimal coordination** – With all replicas locally aware of every partition key, they can resolve conflicts via timestamps or version vectors without consulting a central broker. This keeps read‑latency constant even under 10⁵ TPS.  
3. **Seamless scaling and fault tolerance** – When a node is added or removed, the hash ring rebalances; all nodes already hold the full key set, so data migration reduces to shuffling a few ranges rather than recomputing routing tables.

#### Non‑obvious insight  
The *entire* key space must be locally visible not because we store every record on every node (that would explode storage), but because **the hash function itself is deterministic and stateless**. Each node can compute the destination of any key instantly; the only “global” knowledge required is the current hash ring, which is tiny compared to the data set. Thus “keep all” refers to *all partition keys*, not *all data*. This subtle distinction is what lets DynamoDB deliver elastic performance at petabyte scale without sacrificing consistency or availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
