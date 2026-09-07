---
qid: ing_142093c6c4__faang__local
question: 'Explain: MongoDB sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:56-05:00'
sources: []
---

**Clarify**  
*What you’re asking:* “How does a MongoDB sharded cluster work?”  
Assumptions: single‑tenant data set, horizontal scaling, read/write traffic is distributed, we care about consistency and fault tolerance.

**Approach**  
1. **Explain the architecture** – shards, config servers, query router (mongos).  
2. **Show how data is partitioned** – shard key, chunk ranges, balancing.  
3. **Highlight routing & operations** – mongos decides target shard(s), writes go to one shard, reads can hit multiple.

**Depth**  
- *Shards* are replica sets; each contains the same schema but a subset of documents defined by the shard key’s value range.  
- *Config servers* (3 for HA) store cluster metadata: collection namespaces, chunk ranges, and shard list. They also hold the sharding state.  
- *mongos* is stateless; it receives client queries, consults config servers to map a query’s shard key to one or more shards, forwards the request, aggregates responses.  
- *Chunking*: MongoDB splits collections into 64 MB chunks by default. When a chunk grows >100 MiB, it splits and is moved by the balancer.  
- *Balancing* runs in the background, ensuring even data distribution while respecting write‑load and network locality.

**Edge Cases**  
- *Hot shard key*: leads to uneven load; solution: use hashed keys or composite keys.  
- *Shard failure*: replica set elections keep availability; mongos routes around failed nodes.  
- *Unbalanced chunks*: manual balancer pause/resume, or moving chunks with `moveChunk`.

**Optimize & Communicate**  
Emphasize that sharding improves horizontal scalability and fault isolation but adds operational overhead (balancer tuning, shard key selection). In an interview, I’d note: “Choosing the right shard key is a 70 % win; it determines query performance, write latency, and cluster health.” This structured walk‑through shows clear reasoning, depth, and awareness of practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
