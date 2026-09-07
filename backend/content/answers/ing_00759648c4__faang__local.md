---
qid: ing_00759648c4__faang__local
question: 'Explain: Use a Stable Node Identity — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 423
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:24-05:00'
sources: []
---

**Clarify**  
You’re asking how a *stable node identity* can be achieved with consistent hashing in a distributed ML system (e.g., parameter server or feature store).  
Key assumptions:  
1. Nodes may join/leave frequently.  
2. Data items are sharded by hash key.  
3. We need to minimize data reshuffling when topology changes.

**Approach**  
1. Assign each physical node a unique, persistent identifier (e.g., UUID or MAC).  
2. Map that ID onto the hash ring using a strong hash function.  
3. Use *virtual nodes* (replicas) per physical node to smooth load.  
4. On topology change, only re‑balance keys whose position falls into the moved range.

**Depth**  
- **Hash Function:** SHA‑256 → 128‑bit space → uniform distribution.  
- **Virtual Nodes:** `k` replicas per machine; total ring size = `N * k`.  
- **Resharding Cost:** O(log N) for lookup + O(1/k) expected moves per key when a node joins/leaves, because only its contiguous slice changes.  
- **Fault Tolerance:** Replicate each shard across multiple nodes (e.g., 3‑replica quorum).  

**Edge Cases**  
- *Node identifier collision*: use cryptographically secure UUIDs.  
- *Sudden mass churn*: temporary consistency window; use versioned ring metadata.  
- *Skewed key distribution*: increase `k` or apply range hashing.

**Optimize & Communicate**  
Explain that stable IDs eliminate “key hopping” seen with IP‑based hashes, preserving cache locality and reducing network traffic—critical for low‑latency ML inference pipelines. Highlight trade‑offs: more metadata (virtual nodes) vs. fewer data movements. End by noting this design scales linearly with cluster size and is widely adopted in systems like Cassandra and DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
