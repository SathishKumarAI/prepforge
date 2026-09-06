---
qid: ing_64008e5793__fp__local
question: 'Explain: Active-active — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 408
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:46-05:00'
sources: []
---

**Active‑Active Architecture – why it’s a necessity, not an option**

At its core an active‑active system is a *redundant* service that guarantees **zero single point of failure** while maintaining **high throughput**.  
The fundamental problem: when multiple clients issue requests concurrently, a single node can become the bottleneck or crash, causing latency spikes or outages.  The solution is to let every request be handled by *any* healthy instance—hence “active‑active”.

Why must it work this way?  
1. **Load balancing** – each node receives a share of traffic proportional to its capacity; mathematically, the overall throughput \(T = \sum_i t_i\) where \(t_i\) is per‑node throughput.  
2. **Fail‑over without downtime** – if one instance fails, remaining nodes instantly absorb its load because they already hold the same state (or can rebuild it). The system’s availability \(A = 1 - P(\text{all active fail})\) becomes astronomically high when many replicas are active.  
3. **Consistency vs latency trade‑off** – to keep all replicas in sync, we use *eventual consistency* or *conflict‑free replicated data types (CRDTs)*. These structures let nodes update independently and converge deterministically, so the system stays responsive even under partition.

A non‑obvious insight: **state locality matters more than raw replication**. If each node keeps only the subset of data it most frequently accesses (sharding + local caching), the network traffic for synchronizing updates shrinks dramatically, turning an active‑active architecture into a *low‑latency* one without sacrificing fault tolerance.

In short, active‑active design is the mathematical guarantee that “every request finds a live node and every failure is invisible to users.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
