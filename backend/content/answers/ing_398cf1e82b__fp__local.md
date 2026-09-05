---
qid: ing_398cf1e82b__fp__local
question: 'Explain: Consistent Hashing — Top 4 Data Sharding Algorithms Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 367
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:24-05:00'
sources: []
---

**Consistent Hashing – the “minimal‑movement” sharding rule**

When a distributed store must map keys to nodes, a naïve hash (e.g., `hash(key) mod N`) forces *every* key to be re‑routed whenever the node count changes.  That churn is unacceptable for large caches or key–value stores.

Consistent hashing fixes this by treating both keys and servers as points on a unit circle (or a ring of integers).  
A key maps to the first server encountered when walking clockwise from its hash value.  Adding or removing a server only re‑assigns keys that fall between the new node’s predecessor and itself—at most \(1/N\) of the space.  

The algorithm is an instance of **minimizing disruption under perturbation**: it preserves locality (keys stay near their previous owner) while keeping load balanced, because each node owns a contiguous arc whose expected length is \(1/N\).  By using *virtual nodes* (replicas placed at multiple hash positions), the distribution smooths out variance and satisfies the **law of large numbers**, ensuring that even with few physical servers the load per server stays near‑uniform.

**Non‑obvious insight:**  
Consistent hashing is essentially a *circular convolution* of two independent random processes (key hashes and node hashes).  This independence guarantees that the probability of any key moving to a particular new node depends only on the ratio of ring lengths, not on the identities of the nodes—hence the algorithm’s robustness against heterogeneous server capacities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
