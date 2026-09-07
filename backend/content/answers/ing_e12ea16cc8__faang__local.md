---
qid: ing_e12ea16cc8__faang__local
question: 'Explain: Binary Search Variations — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks how you’d design a *binary‑search–style* service that supports multiple query types (e.g., range, nearest, prefix) in a distributed system. I’ll assume we have:  

1. A sorted key space (numeric or lexicographic).  
2. High read throughput, low latency, eventual consistency is acceptable.  
3. Queries arrive as “find value ≥ X”, “find closest to X”, or “count values in [L,R]”.

**Approach**  
1. Partition the key space into shards (e.g., hash‑range) and store each shard on a dedicated node.  
2. Each shard maintains an in‑memory B‑Tree/Bin‑Array for O(log n) lookups.  
3. Expose a lightweight API gateway that routes a request to the responsible shard(s).  

**Depth**  
*Range queries*: single shard if [L,R] lies within; otherwise merge results from multiple shards—O(k log n + m), where *k* is shards hit and *m* returned items.  
*Nearest*: binary search per shard, then take the global min distance across shards (parallel reduce).  
*Scalability*: add shards by rebalancing key ranges; replication for fault tolerance.  
Complexity: O(log n) per lookup, constant extra overhead for routing.

**Edge Cases**  
- Skewed data → hot shards → throttling or sharding by prefix.  
- Late writes may cause stale reads—use read‑repair or version tags.  
- Network partitions → use quorum reads to avoid stale data.

**Optimize & Communicate**  
- Cache recent queries in a distributed LRU cache (Redis) for sub‑ms latency.  
- Use Bloom filters per shard to quickly reject empty ranges.  
- Present the design as “sharded sorted index + API gateway + caching” and walk through a sample request path, highlighting how binary search logic is preserved while scaling horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
