---
qid: ing_3d1084329f__faang__local
question: What’s the issue with simple hashing? — Consistent Hashing Explained
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:50-05:00'
sources: []
---

**Clarify**  
*Question:* “What’s the issue with simple hashing in distributed systems, and how does consistent hashing solve it?”  
Assumptions: we’re mapping keys to a set of servers; server membership can change (nodes added/removed); goal is minimal data movement.

**Approach**  
1. Describe classic hash‑to‑server mapping.  
2. Identify the churn problem.  
3. Explain consistent hashing mechanics and its benefits.

**Depth**  
- *Simple hashing:* `hash(key) mod N` → server index. When a node joins/leaves (`N` changes), all keys recompute to new indices, causing ~100 % data movement.  
- *Consistent hashing:* Servers are placed on a logical ring (0–2³²). Each key is hashed to a point on the ring; it maps to the first server clockwise. Adding/removing a node only affects keys that fall between its predecessor and itself—roughly `1/N` of the data.  
- *Virtual nodes* reduce variance: each physical server owns multiple ring positions, smoothing load.

**Edge cases**  
- Extremely skewed hash functions → cluster imbalance.  
- Too few virtual nodes → uneven key distribution.  
- Node failure detection delay can temporarily misroute keys.

**Optimize & Communicate**  
Mention that consistent hashing trades a slight overhead (maintaining the ring) for near‑constant data movement, essential in large‑scale services like CDN or distributed cache. Conclude by highlighting its adoption in systems such as Amazon’s Dynamo and Google’s Cloud Spanner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
