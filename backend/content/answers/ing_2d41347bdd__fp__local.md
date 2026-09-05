---
qid: ing_2d41347bdd__fp__local
question: 'Explain: More partitions may increase unavailability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 330
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:46-05:00'
sources: []
---

**Why more partitions can hurt availability**

In a distributed learning system, each partition holds a shard of the training data and a replica of the model parameters.  
When an update arrives, every partition must *synchronize* with all others to keep the global state consistent (e.g., via a consensus or lock).  

1. **Fundamental problem** – we need a *single source of truth* for the model while allowing concurrent updates.  
2. **Coordination cost** grows super‑linearly: if there are \(P\) partitions, a naïve all‑to‑all protocol requires \(\Theta(P^2)\) message exchanges per iteration.  
3. **Latency amplification** – each communication hop adds round‑trip delay; with more hops the probability that at least one node becomes slow or fails rises (by the union bound).  
4. **Availability loss** – if any partition stalls, the whole system can stall until a timeout triggers a fallback (e.g., rollback), because the consistency protocol treats a single lagging node as a fault.

Thus, increasing \(P\) reduces the *effective* update rate even though raw compute grows.  
A non‑obvious insight: **the bottleneck is not CPU or bandwidth but the *stochastic latency tail***—the rare slowest partition dominates overall performance. Reducing partitions shrinks this tail, improving availability at the cost of parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
