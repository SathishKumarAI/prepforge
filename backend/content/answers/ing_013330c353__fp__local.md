---
qid: ing_013330c353__fp__local
question: 'Explain: Hash Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 385
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:55-05:00'
sources: []
---

**Hash indexes: the “direct‑address” of data**

The core problem a database faces is *rapidly locating* rows that satisfy a predicate on a key column.  
A hash index solves this by turning the key value into an array address via a deterministic function
\(h(k)\). If every possible key mapped to a unique slot, retrieval would be \(O(1)\); collisions are inevitable, so each bucket holds a small linked list or balanced tree.  

Why must it work that way?  
* **Uniform distribution** – The hash function is chosen to spread keys evenly over the table, turning an adversarial input sequence into random‑like probes. This guarantees expected constant time even under skewed data.  
* **Space locality** – Because all entries for a key reside in a single bucket, cache performance improves; a single memory read often suffices.  

From a deeper perspective this is an instance of *information‑theoretic compression*: the hash function encodes a key’s identity into a fixed‑size address, discarding entropy that would otherwise require linear search. The trade‑off—collision resolution—mirrors error‑correcting codes: you sacrifice a little redundancy (bucket size) to keep decoding (lookup) fast.

**Non‑obvious insight:**  
When the key domain is *small* (e.g., status flags), a hash index degenerates into a perfect lookup table. In that regime, the overhead of maintaining a separate structure disappears entirely; the “index” becomes just an array of pointers, and updates are trivial. Recognizing this can save space and simplify logic in systems with limited cardinality columns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
