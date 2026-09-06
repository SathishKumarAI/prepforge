---
qid: ing_b9354f6367__fp__local
question: 'Explain: 2.2 Service Level Agreements (SLA) — Amazon''s Dynamo | All Things
  Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 629
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:41-05:00'
sources: []
---

## 2.2 Service Level Agreements (SLA) – Amazon’s Dynamo

### The underlying problem  
A key‑value store that must serve millions of requests per second across a global network faces two conflicting goals:

| Goal | Cost |
|------|------|
| **Availability** – every read/write should succeed quickly even if some nodes fail. | Requires replication and fast conflict resolution. |
| **Consistency** – all clients see the same value for a key at any time. | Requires coordination (e.g., consensus) that hurts latency. |

Dynamo resolves this tension by **tuning consistency** per operation: *read‑repair*, *hinted handoff* and *vector clocks*. The SLA therefore must describe **what success looks like** under these tunable parameters.

### Why the SLA is probabilistic, not deterministic  

1. **Eventual consistency** means a write may be visible only after some replicas have updated.  
2. Latency of each operation depends on network delays and node load; these are random variables.  
3. Dynamo’s *quorum* policy (R reads + W writes ≤ N replicas) guarantees that, with high probability, at least one replica holds the latest value.

Thus Amazon quantifies service quality as a **probability distribution over latencies** and a **bounded failure rate** rather than a hard “always consistent” promise. The SLA states, for example:

> *“99.9 % of read requests will complete in ≤ 200 ms, and no more than 0.1 % of writes will be lost.”*

### Connection to deeper principles  

* **Optimization:** Choosing R+W < N trades consistency for lower latency; the SLA captures this trade‑off by bounding acceptable inconsistency probability.  
* **Information theory:** The vector clock encodes causal histories; the probability that two clocks conflict is a function of write frequency and network partition size—quantified in the SLA’s “conflict resolution delay.”  
* **Probability & statistics:** The SLA’s latency percentile is derived from the empirical distribution of round‑trip times, ensuring that service quality metrics are statistically sound.

### Non‑obvious insight  

Most people think an SLA for a NoSQL store guarantees *exact* consistency. In Dynamo, the SLA actually guarantees **a statistical bound on the likelihood of stale reads**, not absolute staleness avoidance. The system’s design deliberately accepts that some read may see an older value; the SLA simply limits how often this can happen and how long it persists. This probabilistic view is what makes Dynamo scalable while still offering measurable, contractual quality guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
