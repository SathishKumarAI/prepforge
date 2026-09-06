---
qid: ing_88dfdfc15b__fp__local
question: 'Explain: Hands-On Exercises (Upcoming) — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 358
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:47-05:00'
sources: []
---

**Hands‑On Exercises (Upcoming) – Course Introduction**

The *problem* we face when teaching system design for machine learning is that theory alone does not reveal the constraints of real deployments: latency budgets, consistency guarantees, and failure modes are only felt through interaction. Therefore each exercise must be a *mini‑optimization problem*:  
1. **Define the objective** (e.g., minimize end‑to‑end inference time).  
2. **Identify the decision variables** (model choice, batch size, sharding strategy).  
3. **Enumerate constraints** (budget, fault tolerance, data locality).  

From this we derive a *Lagrangian* that balances cost and performance, revealing why a seemingly “cheaper” GPU cluster can be suboptimal if it violates the latency constraint. This mirrors convex optimization’s dual‑price intuition: the multiplier attached to each constraint tells us which resource is most scarce.

A non‑obvious insight that emerges in the exercises is **“compositionality of consistency.”**  
When a system splits data across shards, *local* consistency can be maintained cheaply, but global ordering—often assumed necessary for correctness—can be achieved by a lightweight commit protocol only when the workload’s *entropy* (i.e., the probability that two concurrent updates touch the same key) is low. Thus, measuring entropy early in the design phase can guide whether to invest in distributed consensus or accept eventual consistency.

By grounding each hands‑on task in this principled framework, students learn not just “how” to build a system but *why* certain architectural choices are mathematically necessary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
