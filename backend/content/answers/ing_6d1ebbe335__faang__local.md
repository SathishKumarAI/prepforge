---
qid: ing_6d1ebbe335__faang__local
question: 'Explain: Implementation — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 501
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:17-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a high‑throughput, memory‑efficient “seen‑set” service (e.g., de‑duplication for URLs) using Bloom Filters in a distributed system. Assume: *query latency < 5 ms*, *false positive ≤ 1 %*, *write throughput 10k ops/s*, *data is append‑only*.

**Approach**  
1. **Choose filter size & hash count** from false‑positive formula \(m = -\frac{n \ln p}{(\ln 2)^2}\).  
2. **Partition the key space**: use consistent hashing to route keys to one of *k* Bloom Filter shards (e.g., 64 nodes) so each shard handles ~\(n/k\) items.  
3. **Write path**: client hashes key → shard, updates local bit‑array via atomic OR; optionally batch writes for IO efficiency.  
4. **Read path**: same hash routing; single round‑trip read to the responsible shard.  
5. **Eviction / compaction**: when a shard reaches capacity or after a TTL, replace it with a new empty filter (or use Scalable Bloom Filters).  

**Depth**  
- *Complexity*: O(1) per op for both query and insert; memory ~ \(m\) bits per shard.  
- *Consistency*: eventual consistency is acceptable because Bloom filters are idempotent on false positives.  
- *Scalability*: adding shards scales linearly in throughput and memory.  

**Edge Cases**  
- *Burst writes*: temporarily buffer in RAM then flush to disk; use LRU cache for hot keys.  
- *Skewed key distribution*: rebalance shards or use a virtual node scheme.  
- *False positives leading to missed deduplication*: mitigate by cascading to a secondary exact store (e.g., Redis set) on hit.  

**Optimize & Communicate**  
Explain that the system trades space for speed and negligible false‑positive rate, which is acceptable for de‑duplication use cases. Highlight how consistent hashing keeps routing O(1), and that shard replacement avoids rehashing all data. Conclude by stressing monitoring (false positive rate, latency) and auto‑scaling policies to maintain SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
