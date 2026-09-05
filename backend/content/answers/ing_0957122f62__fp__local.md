---
qid: ing_0957122f62__fp__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 451
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:37-05:00'
sources: []
---

**Problem in first‑principles terms**

You have *N* identical inference nodes that share a **prefix cache** (e.g., embeddings for the first *k* tokens).  
The objective is to **maximize cache hit probability** while keeping load balanced and avoiding stale state.

1. **Why round‑robin fails** – each request’s prefix may be unique; with 40 nodes, the chance that a repeated prefix lands on the same node is ≈ 1/40. The cache becomes useless.

2. **What the system must do** – map *prefixes* to nodes deterministically (so repeat prefixes hit the same cache) yet still spread traffic evenly across nodes.

3. **Core principle: locality‑preserving hashing**  
   Use a hash of the prefix that is **stable under extension**.  
   - Compute `h = FNV1a(prefix)` (or any rolling hash).  
   - Map to node `i = h mod N`.  

   When a new token arrives, recompute `h` for the extended prefix; the mapping only changes when the prefix crosses a bucket boundary. This keeps most requests on the same node until the cache is invalidated.

4. **Load balancing trade‑off** – If one prefix dominates, that node becomes a hotspot.  
   - **Solution**: add *sharding* within each node: maintain an LRU of recent prefixes; if a node receives > X% traffic, spill rare prefixes to a secondary pool or rotate the hash base.

5. **Non‑obvious insight** – *Prefix collision* can be exploited: use a **prefix trie** across nodes where each leaf corresponds to a cache entry. When a request arrives, traverse the trie to find the longest matching prefix; if none exists, assign it to the node that holds the closest ancestor. This guarantees maximal reuse of cached embeddings while preserving balance.

By treating routing as an optimization over *prefix locality* and *hash‑based assignment*, you achieve near‑perfect cache hit rates without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
