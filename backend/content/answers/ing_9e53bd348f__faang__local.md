---
qid: ing_9e53bd348f__faang__local
question: 'Explain: Directory-Based Sharding — Key Concepts to Understand Database
  Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 474
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep explanation of *directory‑based sharding*—a sharding strategy that uses an external lookup (the “directory”) to map keys to shards, rather than computing the shard directly from the key.

Key assumptions:  
- We have a distributed database with many shards.  
- The data is partitioned by a hash or range on a key.  
- Lookups can tolerate a small extra hop to a directory service.

**Approach**  
1. Define what a directory is (a lightweight metadata store).  
2. Show how keys → shard IDs are resolved via the directory.  
3. Contrast with direct hashing and discuss when each shines.  

**Depth**  
A directory‑based sharding system keeps a *shard map* that associates key ranges or hash buckets to physical shards. When a client issues a query, it first contacts the directory (often an in‑memory cache) to obtain the target shard’s address. The directory can be replicated and partitioned itself for scalability. This indirection allows:  
- **Dynamic rebalancing** – moving ranges between shards requires only updating the map, not recomputing keys.  
- **Fine‑grained control** – policies like hot‑spot mitigation or geo‑distribution are encoded in the directory.  
Performance cost is one extra network hop per request; latency can be mitigated with local caching and consistent hashing of the directory.

**Edge Cases**  
- *Directory failure* → fallback to a default shard or retry logic.  
- *Stale mapping* during rebalancing → use versioning or TTLs.  
- *Large directories* – partition them by key space to avoid bottlenecks.

**Optimize & Communicate**  
Explain that directory sharding trades minimal latency for operational flexibility, making it ideal for workloads with frequent schema evolution or uneven data distribution. Highlight that the directory itself can be a distributed hash table (DHT) to keep complexity linear in shards, and that monitoring should focus on directory hit‑rate and propagation lag. Conclude by noting that many FAANG services use this pattern behind the scenes for user‑session stores, recommendation caches, and more.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
