---
qid: ing_5f34ff8187__fp__local
question: 'Explain: Load Balancing — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 331
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:27:15-05:00'
sources: []
---

**Load‑balancing as a geometric optimisation problem**

At its core, a distributed system is a set of *resources* (servers) that must service a stream of *requests*.  
If we treat each request as a point in a high‑dimensional space (time, size, locality, etc.) and each server as a *center*, the goal is to minimise the **maximum load**—the worst‑case distance from any point to its assigned center.  

Why this matters for fault tolerance:  
*When a node fails the remaining nodes must absorb its workload without exceeding their capacity.*  
If the assignment was made by naïve round‑robin, the failure may cause an instant overload that triggers cascading failures—an **avalanche effect**.  
Instead, we pre‑compute *load‑aware* mappings that leave slack on every node: a buffer equal to at least one expected failure load.  

A non‑obvious insight is that **probabilistic hashing (e.g., Rendezvous or Consistent Hashing) implicitly solves this geometry**.  
By weighting each server by its capacity, the hash function assigns requests to the *closest* (most capable) node in a stochastic sense, guaranteeing that after any single failure, the reassignment cost is bounded by the ratio of the failed node’s capacity to the total slack.  

Thus, load balancing is not just “split evenly”; it is a constrained optimisation that guarantees graceful degradation and efficient recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
