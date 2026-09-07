---
qid: ing_0ed4b3724a__faang__local
question: 'Explain: How Consistent Hashing Works — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:18:07-05:00'
sources: []
---

**Consistent Hashing – Quick Overview**

*Consistent hashing* maps keys (e.g., cache requests) to a set of nodes such that adding or removing a node causes minimal remapping.

---

### 1️⃣ Clarify  
We need to explain the algorithm and why it reduces key movement when cluster size changes. Assume:  
- Nodes are in a hash ring; each has a unique ID.  
- Keys are hashed onto the same ring.  
- Each key goes to the first node clockwise on the ring.

### 2️⃣ Approach  
1. Hash nodes → positions on [0, M) ring.  
2. Hash keys → points on same ring.  
3. For each key, find its successor node (the next node in the ring).  
4. When a node joins/leaves, only keys that map to it or to its predecessor are affected.

### 3️⃣ Depth  
- **Hash functions**: use MD5/SHA‑1; collisions negligible.  
- **Virtual nodes**: each physical node gets *k* replicas at different ring positions → load balance and reduce skew.  
- **Lookup complexity**: O(log N) with a balanced tree or O(1) using an array of sorted positions + binary search.  
- **Resilience**: when a node fails, its keys redirect to the next live node; minimal rehashing (~1/N of keys).

### 4️⃣ Edge Cases  
- *Single node*: all keys map there.  
- *Node removal*: wrap‑around at ring end must be handled correctly.  
- *Large virtual nodes count*: memory overhead increases linearly.

### 5️⃣ Optimize & Communicate  
- **Optimization**: use a skip list or hash‑based jump pointers for faster successor lookup.  
- **Narration**: “Consistent hashing turns the key–node assignment into a circular lookup, so when we add a node only the keys that fall between its predecessor and itself move—roughly 1/N of the total.”  

This structure shows clear problem framing, algorithmic steps, complexity, edge considerations, and practical optimizations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
