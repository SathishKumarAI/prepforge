---
qid: ing_2b600f9cbc__think__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 501
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:32:44-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “sharding” in this context?* (horizontal partitioning of data across machines).  
   - *Why “directory‑based”?* – a lookup table that maps key ranges or hash buckets to shard locations, rather than relying on deterministic hashing alone.  
   - Assume we’re designing a distributed storage layer for ML training data or feature store.

**2. Adopt a mental model**  
   - Think of the system as two layers: **Directory Service** (metadata + routing) and **Shard Nodes** (actual data).  
   - The directory acts like a DNS: clients ask “where is key X?” and receive the address of the shard that owns it.

**3. Step‑by‑step reasoning**  
   1. *Identify access patterns*: sequential scans vs point lookups; ML pipelines often scan large feature tables.  
   2. *Determine partitioning strategy*: hash on a key, range on timestamps, or feature value buckets.  
   3. *Design the directory* – a consistent‑hash ring with virtual nodes or a distributed key‑value store (e.g., etcd) that stores shard metadata.  
   4. *Handle rebalancing*: when adding/removing shards, update only affected directory entries; clients cache routes to reduce lookup latency.  
   5. *Integrate with ML workloads*: expose an API or client library that transparently consults the directory before accessing data.

**4. Common traps to avoid**  
   - **Over‑centralizing**: a single directory can become a bottleneck; use sharded directories or gossip protocols.  
   - **Stale routing info**: ensure clients refresh or validate routes, especially after topology changes.  
   - **Ignoring data locality**: in ML training, co‑locate shards with compute nodes to reduce network I/O.

**5. Sanity‑check & communicate**  
   - Verify that the directory size grows sub‑linearly with data volume (only metadata).  
   - Run a small prototype: insert keys, trigger shard splits, observe routing updates.  
   - Explain to stakeholders by analogizing to DNS + load balancer: “We keep a lightweight map of where each piece of data lives so queries can jump straight to the right machine.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
