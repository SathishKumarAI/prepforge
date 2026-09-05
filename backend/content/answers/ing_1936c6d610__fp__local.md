---
qid: ing_1936c6d610__fp__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 375
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:50-05:00'
sources: []
---

### Why Redlock needs a *synchrony* window

A distributed lock must be **reliable** (no two nodes think they own it) and **timely** (the owner can release it before the lease expires).  
Redlock achieves this by letting each replica set a key with an expiry, then considering the lock “acquired” only if *majority* of replicas agree within a small time window.  

The synchrony assumption is that all messages sent during that window arrive **before** any expiry occurs on any node. If this holds, two things follow:

1. **Consistency** – No other client can obtain the key in that window because every replica will see the same set of operations; the majority vote guarantees a single owner.
2. **Safety‑liveness trade‑off** – The lock duration (expiry) must be long enough to cover network delays but short enough that a crashed node cannot hold it forever.

Formally, let \(d\) be the maximum message delay and \(t_{\text{lease}}\) the lock timeout. Redlock requires  
\(t_{\text{lease}} > 2d + \varepsilon\).  
If this inequality fails, a client might think it holds the lock while another node has already timed out, leading to *lost updates*.

**Non‑obvious insight:** The synchrony window is not about clock skew; it’s about **message ordering**. Even if clocks are perfect, a single delayed message can break the majority agreement. Thus Redlock’s safety hinges on *all* replicas seeing the same set of operations in the same order—an elegant embodiment of *causal consistency* within a probabilistic network model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
