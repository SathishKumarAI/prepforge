---
qid: ing_5bf4d50ff2__fp__local
question: 'Explain: Mapping a Key — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 378
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:35-05:00'
sources: []
---

### Why we need it

When a distributed system stores data on many machines, adding or removing a node should **minimize reshuffling** of keys.  
If each key were assigned by simple modulo (`key % N`), a change in `N` would move ~100 % of the keys.

### The principle

Treat every machine as a point on a unit circle and hash each key to a point on that same circle.  
A key is stored on the **first node encountered clockwise** from its hash value.  

When a node joins, it only claims the region between itself and its predecessor; all other nodes keep their ranges untouched.  
Similarly, when a node leaves, its range reverts to its successor—only those keys in that slice move.

### Connection to geometry & probability

The circle guarantees **uniform distribution** of both nodes and keys (hashing is assumed random).  
Thus each node owns roughly the same arc length → balanced load.  
Moreover, the expected number of key movements when adding/removing a node is \(1/N\) of all keys, an O(1/N) fraction.

### Non‑obvious insight

The “clockwise” rule can be swapped for any deterministic order (e.g., reverse).  
What matters is that **every key has exactly one predecessor** in the ordering.  
This guarantees *idempotence*: the same set of keys will always map to the same nodes, even if hash functions change slightly—crucial for incremental upgrades.

In short, consistent hashing turns a load‑balancing problem into a simple geometric assignment on a circle, yielding stability and scalability with minimal data movement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
