---
qid: ing_a3cf06ea03__fp__local
question: 'Explain: Weak consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 324
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:48-05:00'
sources: []
---

**Weak consistency – why it exists and what it really guarantees**

When a system replicates data across many nodes, the *fundamental problem* is that writes cannot propagate instantly everywhere.  
If we demanded that every read see the most recent write, the network would have to be synchronous and the latency would grow with the number of replicas—an impossibility in large‑scale systems.

Weak consistency relaxes this requirement: a system only promises that *eventually*, all replicas will converge to the same state.  
Mathematically, if we view each replica’s value as a point in a metric space (the set of possible states), weak consistency guarantees that the sequence of updates forms a **Cauchy sequence**—differences shrink over time but may never be zero immediately.

The deeper principle is *stochastic convergence*: under an asynchronous network model, with bounded message delays and no failures, repeated application of update functions yields convergence almost surely. This aligns with probability theory’s law of large numbers: as more replicas receive updates, the distribution of states concentrates around a single value.

**Non‑obvious insight:**  
Weak consistency is *not* “any read might be stale”; it guarantees that **the staleness decays at a predictable rate** if updates are applied frequently. This allows designers to bound read latency while still ensuring eventual correctness, a trade‑off that underpins many modern NoSQL stores (e.g., Dynamo, Cassandra).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
