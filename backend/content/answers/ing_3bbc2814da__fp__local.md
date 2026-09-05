---
qid: ing_3bbc2814da__fp__local
question: 'Explain: The Problem with Modulo Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 370
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:11:48-05:00'
sources: []
---

### Why “mod N” shuffling fails

Imagine a distributed cache that assigns key k to bucket  
\(b(k)=k \bmod N\). When we add or remove a node (changing \(N\)), every key whose residue changes must be migrated. Since the mapping is a simple modulo, **every** key is affected with probability ≈ 1/N. If one node fails, ~\(1/N\) of all keys are lost and must be recomputed elsewhere. This churn destroys locality, inflates traffic, and makes capacity planning brittle.

### The deeper principle: *constrained uniformity*

A hash function should distribute keys uniformly **and** preserve stability under changes to the set of buckets. Modulo hashing satisfies uniformity but violates stability because it ties a key’s bucket directly to the current count of nodes rather than to an intrinsic property of the key.

Consistent hashing solves this by embedding both keys and nodes on a unit circle (or hash ring). Each node occupies an interval proportional to its weight, and each key maps to the first node encountered clockwise. Adding or removing a node only affects the keys that lie in its adjacent intervals—on average **\(1/N\)** of the total, independent of how many nodes are present.

### A non‑obvious insight

The “ring” construction is essentially a *geometric median* of the hash space: it turns the discrete modulo operation into a continuous cyclic order. This yields an implicit *load balancing* property that any node’s load equals its assigned arc length, guaranteeing perfect balance in expectation without global reshuffling. The trick—using a circle rather than a linear index—is what makes consistent hashing both simple and powerful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
