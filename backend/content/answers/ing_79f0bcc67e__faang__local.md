---
qid: ing_79f0bcc67e__faang__local
question: 'Explain: How to optimize database sharding for even data distribution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:27:13-05:00'
sources: []
---

**Clarify**  
We need a strategy that keeps each shard roughly the same size and load, so queries don’t hit a single hot spot. I’ll assume we’re sharding a relational or key‑value store with a large, write‑heavy table and that we can control the key space.

**Approach**  
1. Pick a deterministic hash function over the natural partition key (e.g., user ID).  
2. Map each hash bucket to a shard using modulo or consistent hashing.  
3. Periodically rebalance: detect skew by sampling row counts, then move ranges or split buckets.  
4. Use write‑through caching and bulk‑load migration for large data moves.

**Depth**  
- **Hashing** (e.g., Murmur2) distributes uniformly in theory; modulo gives equal bucket size if hash is uniform.  
- **Consistent hashing** adds a virtual node layer, reducing churn when adding/removing shards.  
- **Rebalancing algorithm**: compute the target count = total rows / shard count; migrate buckets whose counts deviate > 10% of target.  
- Complexity: O(n) to scan for skew, migration is O(k log n) per moved row (k = number of affected shards).  
- Trade‑off: more virtual nodes → better balance but higher memory overhead.

**Edge Cases**  
- Skewed keys (e.g., time‑based IDs) break uniformity; add a salt or composite key.  
- Sudden traffic bursts on one shard can still happen if the hash function isn’t truly random—monitor latency and auto‑scale shards.  
- Migration must preserve consistency; use two‑phase commit or atomic “move” flag.

**Optimize & Communicate**  
Explain that we start with a simple modulo scheme for speed, then monitor metrics (row count per shard, query latency). If skew > 10%, trigger rebalancing. Emphasize that consistent hashing reduces downtime and that adding virtual nodes improves granularity. Conclude by noting that this loop of monitoring → rebalance keeps distribution even while scaling horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
