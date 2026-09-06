---
qid: ing_9c100b934b__think__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 457
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:23:05-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Assume the reader knows basic MongoDB concepts (documents, collections).  
- Define “sharding” as horizontal partitioning across multiple servers for scalability and high availability.

**2️⃣ Choose a mental model**  
- Think of sharding as a *router + data‑store* architecture: a **mongos router** routes queries to the appropriate shards; each **shard** is a replica set that stores a subset of data.  
- Use an analogy: a library (database) split into sections (shards), with librarians (mongos) directing patrons to the right section.

**3️⃣ Step‑by‑step reasoning**  
1. **Shard key selection** – pick a field whose values are evenly distributed; it determines how documents map to shards.  
2. **Chunking** – data is divided into *chunks* (~64 MB by default) that move between shards as needed.  
3. **Router (mongos)** – receives client requests, looks up the chunk map in config servers, forwards to the correct shard’s primary node.  
4. **Replica sets per shard** – provide redundancy; writes go to primaries, reads can be served from secondaries.  
5. **Config servers** – store cluster metadata (chunk ranges, shard list); typically a replica set of 3 nodes for fault tolerance.

**4️⃣ Avoid common traps**  
- Don’t choose a key with low cardinality or skewed values; it causes hot shards.  
- Remember that *mongos* is stateless; scaling it horizontally is straightforward.  
- Assume network latency matters: keep chunks within the same rack if possible.

**5️⃣ Sanity‑check & communicate**  
- Ask “What happens when a new document arrives?” – trace through key → chunk → shard via mongos.  
- Explain that rebalancing is automatic but can be paused.  
- Wrap up by highlighting benefits: linear scalability, no single point of failure, and seamless reads/writes across shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
