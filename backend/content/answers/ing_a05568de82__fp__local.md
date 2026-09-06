---
qid: ing_a05568de82__fp__local
question: 'Explain: Key-Based Sharding (with a dash of %3 hash)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 539
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:43-05:00'
sources: []
---

**Key‑based sharding with `% N` (modulo hashing)**  

The goal is to partition a large keyspace \(\mathcal{K}\) into \(N\) disjoint shards so that each incoming key \(k\in\mathcal{K}\) deterministically maps to exactly one shard, and the mapping should be *balanced*—every shard receives roughly the same number of keys.  

Let \(h:\mathcal{K}\rightarrow \mathbb{Z}_{+}\) be a cryptographic hash that behaves like a random oracle (its outputs are uniformly distributed).  
Define the sharding function  
\[
s(k)=h(k)\bmod N .
\]
Because \(h\) is uniform, the residue classes modulo \(N\) each contain \(\frac{1}{N}\) of the hash values. Hence the probability that a random key lands in any particular shard is exactly \(\frac{1}{N}\). This satisfies *load balance* by construction and guarantees *determinism*: the same key always maps to the same shard.

The deeper principle at work is **probabilistic load balancing**: we reduce an arbitrary distribution of keys to a uniform one via hashing, then partition the universe into equal‑sized buckets. The modulo operation implements this partitioning with O(1) cost and negligible overhead.

### One non‑obvious insight  
Choosing \(N\) as a **prime** can improve hash quality if the underlying hash function is not perfectly random. When \(N\) shares factors with patterns in the hash output (e.g., low‑entropy keys), residues may cluster, breaking balance. A prime modulus forces the residue distribution to be more uniform because it eliminates common divisors that could align with systematic structure in \(h(k)\). Thus, even a good hash function can benefit from a prime shard count—an often overlooked optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
