---
qid: ing_916ec4616e__fp__local
question: 'Explain: Adding a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 372
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:26-05:00'
sources: []
---

**Adding a Node in Consistent Hashing**

When we add a new server (node) to a distributed key‑value store, the fundamental problem is *redistributing keys* with minimal movement. In naive hashing, every key’s hash maps to a node; adding one node forces all keys to recompute their hashes and potentially migrate everywhere—O(n) traffic.

Consistent hashing solves this by mapping **both** nodes and keys onto the same cyclic key space (e.g., 0–2⁶³‑1). Each node is placed at a hash position, and every key is assigned to the first node clockwise from its hash. This geometric arrangement guarantees that adding a node only affects the keys whose hashes fall between the new node’s position and its predecessor—exactly **1/|N|** of the keys on average.

Why does this work? Think of the ring as a *probability space* where each point has equal probability for any key. Adding a node slices the circle, creating a new interval whose size is 1/(N+1). The expected number of keys in that slice equals its length times the total key count, yielding O(1/N) migration.

**Non‑obvious insight:**  
The *balance* property (equal load) emerges not from explicit redistribution but from the *continuity* of the hash function and the circular topology. As nodes join or leave, the only keys that change ownership are those whose hash lies in the newly created or removed arc—no global reshuffling is needed. This continuity is why consistent hashing scales gracefully to millions of nodes: each operation touches a constant fraction of data regardless of system size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
