---
qid: ing_59f144ae0b__fp__local
question: 'Explain: Consistency Across Nodes — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 407
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:32-05:00'
sources: []
---

**Why a distributed system needs “caching” for consistency**

In a cluster each node owns part of the data and serves requests locally.  
If a read is forwarded to its owner, the latency is low but every read must hit the network, which limits scalability.  
Conversely, if every node keeps a full copy (a naive cache) we avoid network traffic but risk *stale* data: an update on one node may never reach the others.

The fundamental problem is **balancing freshness against throughput**.  
A cache can be seen as a *probabilistic filter*: it predicts which items are likely to be requested soon and keeps them locally, reducing expected access time \(E[T]\).  
If we denote by \(p_i\) the probability of accessing key \(i\), the optimal policy (by minimizing \(E[T]\)) is to cache those with largest \(p_i\)—this is the **Gittins index** for a restless bandit problem.

The deeper principle: *information flow must satisfy causal consistency*.  
When an update arrives at node A, it creates new information that all readers should eventually see. The system can guarantee this by propagating the delta (write‑through) or by invalidating stale copies (cache‑coherence).  
Choosing the right strategy depends on the **read/write skew** and network topology.

**Non‑obvious insight:**  
Caching is not merely a performance trick; it *implements a distributed memory hierarchy*. By treating each node’s local store as a fast, volatile tier and the backing persistent storage as a slow, durable tier, we achieve the same benefits that CPU caches provide—speed for hot data while preserving consistency through explicit invalidation or versioning. This view unifies system‑design cache policies with classic hardware cache theory, revealing why many distributed databases adopt multi‑level caching layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
