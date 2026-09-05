---
qid: ing_3db4c5a226__fp__local
question: 'Explain: Cache Consistency — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 379
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:31-05:00'
sources: []
---

**Cache consistency in machine‑learning systems**

The *fundamental problem* a cache solves is the latency–throughput trade‑off between fast local memory and slow distributed storage. In ML pipelines, model parameters or inference results are accessed millions of times per second; fetching each from disk or a parameter server would choke the system.

A **cache** stores a copy of a data item in a faster tier (RAM, SSD). The *consistency* question asks: when the underlying source changes, how should cached copies be updated so that every request sees a coherent view?  
The answer follows an optimization principle: *minimise staleness while keeping update overhead below the system’s capacity*. This is formalised by the **stale‑data cost** \(C_s\) versus the **update‑cost** \(C_u\). A cache policy must satisfy  

\[
\frac{d}{dt}\bigl(\text{Expected error}\bigr) \leq C_u,
\]

ensuring that any increase in staleness is justified by a reduction in update traffic.

Typical strategies (write‑through, write‑back, invalidation, versioning) arise from this inequality. For example, **invalidation** guarantees zero staleness at the expense of high \(C_u\), while **write‑back** reduces updates but tolerates bounded stale reads.  

A *non‑obvious insight*: in distributed ML training, consistency can be relaxed by exploiting **parameter sharding and lock‑free commutators**; the system can tolerate *eventual* consistency because stochastic gradient descent converges even with slightly out‑of‑date parameters—turning a hard constraint into an algorithmic advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
