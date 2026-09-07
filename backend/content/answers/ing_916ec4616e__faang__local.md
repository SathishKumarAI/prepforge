---
qid: ing_916ec4616e__faang__local
question: 'Explain: Adding a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 460
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:36-05:00'
sources: []
---

**Clarify**  
We’re asked how consistent hashing handles the addition of a new node in a distributed key‑value store (e.g., caching layer). Assume: *N* nodes, *M* keys uniformly hashed to a 0–1 circle, and we want minimal remapping when a node joins.

**Approach**  
1. Place each node on the hash ring via one or more virtual replicas.  
2. When a new physical node arrives, compute its replica positions.  
3. For each replica, locate its successor (the next node clockwise).  
4. The key range that maps to this successor is now owned by the new node; re‑balance only those keys.

**Depth**  
- **Hash function**: e.g., SHA‑1 → 160‑bit space; map nodes/keys to [0, 2¹⁶⁰).  
- **Virtual replicas** (k ≈ 100 per node) reduce variance and improve load balance.  
- **Reassignment cost**: O(k·log N) for locating successors plus O(Δ keys) data transfer, where Δ is the number of affected keys (~1/N of total).  
- **Complexity**: Insertion O(log N); minimal data movement vs. naive sharding (O(N)).  
- **Trade‑offs**: More replicas → better balance but higher memory and lookup cost; fewer replicas → potential hotspots.

**Edge Cases**  
- Node removal or failure: similar logic, keys reassigned to successor.  
- Extremely uneven hash distribution: use consistent hashing with virtual nodes to smooth it.  
- Large key set vs. small replica count: may cause skew; test with real‑world traffic patterns.

**Optimize & Communicate**  
Explain that adding a node only pulls ~1/N of keys, so the system scales gracefully. Highlight monitoring for replica placement and dynamic adjustment of replica counts if load imbalance persists. Conclude by stressing that consistent hashing’s key advantage is predictable, bounded data movement—critical for high‑availability caching layers in FAANG‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
