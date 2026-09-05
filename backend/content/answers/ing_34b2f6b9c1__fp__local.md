---
qid: ing_34b2f6b9c1__fp__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 412
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:48-05:00'
sources: []
---

### Why CAP Exists  
Large‑scale services must keep data **consistent** (every node sees the same value), **available** (any request returns a result), and **partition‑tolerant** (the system keeps working when network links fail). These are three independent goals, but in practice they conflict because of *information propagation limits*.

### Derivation from First Principles  
Consider two replicas, A and B, that must agree on the value of key `x`. If a message is lost (partition), either:

1. **Consistency** forces A to block until it receives the update from B (no availability).
2. **Availability** lets A serve stale data while waiting for B (consistency lost).

Thus, under partition, you cannot simultaneously satisfy both consistency and availability. The *network* supplies a *finite bandwidth*; the *latency* of message delivery is unbounded in worst‑case partitions. By treating each replica as an independent information source, we see that a node can only be consistent with others if it waits for them—a violation of availability.

### Connection to Information Theory  
The theorem is essentially a statement about **information flow**: the system cannot guarantee *all* of the following simultaneously because information cannot instantaneously propagate across partitions. The trade‑off curve is linear—choosing one side (C or A) forces the other to be “eventually” satisfied.

### Non‑Obvious Insight  
Most people think CAP merely limits design choices; in reality, it tells you **where latency matters**. If your service can tolerate a *small* consistency lag (e.g., eventual), you can achieve high availability and partition tolerance—exactly what many NoSQL databases do by relaxing the “strong consistency” axiom. Thus, CAP is not a hard wall but a guide for quantifying acceptable staleness versus responsiveness in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
