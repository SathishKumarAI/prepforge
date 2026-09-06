---
qid: ing_452861ef4a__fp__local
question: 'Explain: High Availability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 464
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:52-05:00'
sources: []
---

### Why “High‑Availability” is a *must* for ML systems

An ML model is only useful if the service that hosts it can **return correct predictions on demand**.  
The fundamental problem is the *uncertainty of failure*: every component—compute nodes, storage tiers, network links, and even the model itself (weight corruption, drift)—can fail at any time.  
To guarantee uninterrupted operation we need to satisfy two invariants:

| Invariant | Why it follows from first principles |
|-----------|--------------------------------------|
| **Redundancy** | A system that can tolerate *k* simultaneous failures must hold *k+1* independent copies (information‑theoretic lower bound). |
| **Fail‑fast detection** | The time to notice a failure must be less than the mean time between user requests; otherwise latency spikes break service level agreements. |

These invariants map naturally onto the classic **CAP theorem**: in an ML serving environment we sacrifice *consistency* for *availability* and *partition tolerance*. We therefore design *stateless, idempotent request handlers*, deploy them behind a load balancer, and use *distributed consensus (e.g., Raft)* only for model‑weight updates.

#### Deeper principle: *Probabilistic reliability*

Treat each component’s uptime as a random variable. The overall system uptime is the product of these probabilities (independent failures). By allocating more resources to the **bottleneck**—often the inference GPU cluster—we exponentially increase the joint probability of success, following the law of large numbers.

#### Non‑obvious insight

Many engineers focus on *horizontal scaling* alone. The key missing piece is **model versioning as a stateful resource**: each deployment must be immutable and recoverable from a cold start. Using *immutable containers* with *snapshotting* guarantees that any node can instantly replace a corrupted model without affecting the live traffic, turning “availability” into a *stateless property of the service layer*, not just the underlying hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
