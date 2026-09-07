---
qid: ing_f1150aba4a__faang__local
question: 'Explain: Range-Based Sharding — Top 4 Data Sharding Algorithms Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 559
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:00:11-05:00'
sources: []
---

**Range‑Based Sharding – The Four Classic Algorithms**

| # | Algorithm | How it works | Typical use‑case |
|---|-----------|--------------|------------------|
| **1** | *Uniform Range* | Split a numeric key space (e.g., user_id) into equal‑sized intervals. Each shard owns one interval. | When data is evenly distributed and write patterns are uniform. |
| **2** | *Modulo Hash + Range* | Apply a hash to the key, then map the hash value to a range bucket. This adds randomness before range partitioning. | Hot keys that would otherwise cluster; useful for load‑balancing while still keeping range queries efficient. |
| **3** | *Custom Weighted Ranges* | Define ranges of varying width based on historical traffic or data size per key segment. Shards receive a proportionate share of the key space. | When certain key prefixes (e.g., top 10% of users) generate disproportionate load; shards can be sized accordingly. |
| **4** | *Dynamic Range Re‑sharding* | Periodically analyze access patterns and merge/split ranges to rebalance shards on‑the‑fly, often via a background rebalancer. | Systems with evolving workloads (e.g., seasonal spikes) where static ranges become imbalanced over time. |

---

### Clarify
- **Goal**: Distribute data across nodes while supporting efficient range queries and even load.
- **Assumptions**: Key space is numeric or can be ordered; write/read patterns are somewhat predictable.

### Approach
1. Identify key distribution (uniform vs skewed).  
2. Choose a base algorithm (Uniform, Modulo‑Hash, Weighted, Dynamic).  
3. Implement metadata mapping shards → ranges.  
4. Add monitoring to trigger rebalancing for dynamic strategies.

### Depth
- **Complexity**: O(1) shard lookup via binary search on range boundaries; rebalancing is O(n log n).  
- **Trade‑offs**: Uniform reduces complexity but risks hotspots; weighted and dynamic add overhead but improve throughput.

### Edge Cases
- Key collisions or gaps in ranges → fallback to hash routing.  
- Sudden traffic surges → ensure rebalancer can split without downtime.

### Optimize & Communicate
- Use consistent hashing for seamless shard addition/removal.  
- Expose a “shard‑map” API to clients; document range boundaries and migration windows.  

This structured view balances clarity, scalability, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
