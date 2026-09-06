---
qid: ing_f10c6f6749__fp__local
question: 'Explain: Algorithm 1: Consistent Hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 382
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:50-05:00'
sources: []
---

**Consistent hashing: why it exists**

In a distributed key–value store, we need to map each key \(k\) to a node \(n\) so that updates are inexpensive and traffic is balanced.  
If we hash keys uniformly to the *nodes*, adding or removing one node forces every key to be remapped: \(O(N)\) churn.  
The fundamental problem is *minimal disruption*: when topology changes, only a small fraction of keys should move.

**Solution principle**

Map both keys and nodes onto a 1‑D ring \([0,1)\).  
For each node we place several “virtual replicas” (tokens) uniformly on the ring; for each key we compute its hash \(h(k)\) and assign it to the first token clockwise.  

*Why this works*:  
- The distance between consecutive tokens is proportional to their number of replicas, so load balances as a function of replica count.  
- When a node joins or leaves, only keys whose nearest token changes (i.e., those that fall into the newly created or removed segment) are remapped—typically \(1/N\) of all keys.

**Deep insight**

Consistent hashing is an instance of *circular‑order statistics* combined with *load balancing via virtual nodes*.  
The key non‑obvious point: **the ring’s topology turns a global rehashing problem into a local one.**  
Because the mapping depends only on the nearest token, we can treat node addition/removal as a simple interval cut/merge on the circle—no need to recompute hashes for all keys.

Thus consistent hashing solves the “minimal‑disruption” requirement by embedding nodes and keys in the same metric space and using local ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
