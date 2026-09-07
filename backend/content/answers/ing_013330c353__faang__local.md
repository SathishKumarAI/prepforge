---
qid: ing_013330c353__faang__local
question: 'Explain: Hash Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 502
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:07-05:00'
sources: []
---

**Hash Indexes – Indexing (System‑Design Style)**  
*(≈190 words)*

---

### Clarify
We need to explain how hash indexes work for data lookup in large systems: *What is the problem?* We want O(1) point queries on a column that is not naturally sequential, and we must consider collisions, updates, and scalability.

**Assumptions to confirm:**  
- The key space fits in memory or can be sharded.  
- Write throughput is lower than read throughput (typical for OLAP).  
- We need strong consistency across replicas.

---

### Approach
1. **Hash function → bucket** – Map each key `k` to a bucket ID via `h(k)`.  
2. **Bucket storage** – Each bucket holds the actual rows or pointers; can be an in‑memory array, disk page, or distributed shard.  
3. **Collision handling** – Use chaining (linked lists/arrays) or open addressing (linear probing).  
4. **Replication & sharding** – Partition buckets across nodes; use consistent hashing to minimize rebalancing.

---

### Depth
- **Lookup:** `bucket = h(k)` → O(1); then scan bucket for exact match.  
- **Insert/Delete:** Compute bucket, append/remove entry; amortized O(1).  
- **Complexity:** Expected O(1) reads/writes; worst‑case O(n) if all keys collide (mitigated by good hash and load factor < 0.75).  
- **Trade‑offs:** Faster than B‑trees for point queries but poor for range scans; requires more memory for buckets.

---

### Edge Cases
- *High collision rate* → rehash or increase bucket size.  
- *Skewed key distribution* → dynamic bucket splitting.  
- *Node failure* → use replication factor >1 and consistent hashing to route queries elsewhere.

---

### Optimize & Communicate
To improve performance, we can cache hot buckets in RAM, compress entries, or use a two‑level index (hash → disk page). I’d explain these steps as a pipeline: hash → shard lookup → bucket read → collision scan. This shows clear reasoning, complexity awareness, and practical system design choices—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
