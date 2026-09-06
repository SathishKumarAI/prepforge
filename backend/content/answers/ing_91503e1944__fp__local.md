---
qid: ing_91503e1944__fp__local
question: 'Explain: Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 352
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:07-05:00'
sources: []
---

**Consistent hashing – a geometric solution to dynamic load balancing**

Imagine you have \(N\) cache nodes and a stream of keys that must be assigned to them.  
The fundamental problem is: *when a node joins or leaves, only a minimal set of keys should move*.  

In a naïve hash‑to‑node scheme (e.g., `hash(key) mod N`), the removal or addition of any node forces \(\Theta(N)\) keys to be reassigned.  
The deeper principle here is **locality in a metric space**: we want the mapping to depend only on *distance* from a key to its nearest node.

Consistent hashing embeds both keys and nodes onto a unit circle (or ring).  
A key is routed to the first node encountered clockwise.  
When a new node appears, it takes responsibility for all keys that now sit between it and its predecessor; all other keys stay put.  
Similarly, when a node departs, only its successor’s keys are affected.

*Non‑obvious insight*: **The circle representation is not arbitrary—it is the quotient of \(\mathbb{R}\) by an equivalence relation that collapses distances modulo 1**. This turns the problem into one on a compact group where “nearest neighbor” can be defined unambiguously, guaranteeing the minimal movement property without any need for random probing or re‑hashing.

Thus consistent hashing is essentially a *continuous* hash function paired with a *cyclic metric*, yielding elegant, efficient load redistribution in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
