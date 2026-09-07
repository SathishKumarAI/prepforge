---
qid: ing_a1118bbf50__faang__local
question: 'Explain: Pros : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 786
total_tokens: 1023
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:58:52-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise rundown of the most common cache‑eviction policies used in production systems (e.g., Memcached, Redis, CDN edge caches). We’ll assume an LRU‑style cache with fixed capacity and that “cache hit/miss” statistics are available for evaluation.  

**Approach**  
1. List the seven key strategies.  
2. For each: what it optimizes (recency, frequency, size), how it is implemented, typical use case, and trade‑offs.  
3. End with a quick comparison chart to aid decision‑making.

**Depth**

| Strategy | Core Idea | Implementation Notes | Typical Use Case | Trade‑Offs |
|---|---|---|---|---|
| **LRU (Least Recently Used)** | Evict the entry that was accessed longest ago. | Doubly linked list + hash map; O(1) access & update. | Web session caches, CDN edge nodes. | Favors recency over frequency; can thrash with hot‑spot patterns. |
| **LFU (Least Frequently Used)** | Evict the entry with fewest hits. | Count frequencies in a min‑heap or counting Bloom filter; O(log n) updates unless approximated. | Recommendation engines where popularity matters. | More memory overhead; stale data can stay if hit count never drops. |
| **ARC (Adaptive Replacement Cache)** | Combines LRU and LFU adaptively via two stacks and ghost lists. | Maintains `T1`, `T2` (real) and `B1`, `B2` (ghost) lists; O(1) with hash maps. | General‑purpose caches where workload shifts. | Higher implementation complexity; overhead of ghost tracking. |
| **LRU-K** | Uses the Kth most recent access to decide eviction. | Stores timestamps for last K accesses; requires extra storage per entry. | Workloads with bursty traffic patterns (e.g., video streaming). | Needs tuning of K; higher memory usage. |
| **Random Replacement** | Pick a random key to evict. | O(1) via array or hash map iteration. | Very high‑throughput, low‑latency systems where hit ratio is already high. | Poor hit ratio in skewed workloads; unpredictable performance. |
| **Time‑to‑Live (TTL)** | Evict entries after a fixed expiration time. | Simple timestamp comparison during lookup; can be combined with other policies. | Session stores, API rate limiting caches. | Requires periodic cleanup or lazy eviction; stale data may linger until access. |
| **Size‑aware LRU** | Same as LRU but tracks byte size and evicts enough entries to free required space. | Maintains cumulative size; O(1) updates. | Caches holding large objects (images, binaries). | Complexity in multi‑unit eviction; can under‑utilize capacity if many small items remain. |

**Edge Cases**  
- *Hot data*: LRU may thrash; LFU or ARC mitigates.  
- *Large object skew*: Size‑aware LRU prevents memory fragmentation.  
- *Burst traffic*: LRU-K adapts better than pure LRU.  

**Optimize & Communicate**  
When choosing, first profile hit/miss patterns and access recency vs frequency. Start with LRU for simplicity; if hot spots dominate, switch to LFU or ARC. Document the policy in the cache config and expose metrics (`eviction_rate`, `avg_age`) so future tuning is data‑driven. This structured assessment aligns with FAANG expectations: clear problem framing, systematic evaluation, depth of knowledge, edge‑case awareness, and actionable recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
