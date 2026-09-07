---
qid: ing_fc038ef851__faang__local
question: 'Explain: Dynamic (Adaptive) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 438
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:25:52-05:00'
sources: []
---

**Clarify**  
We’re asked how an *adaptive* AI system plans and decomposes tasks—i.e., builds a high‑level plan that can be updated as the environment changes or new information arrives. Key assumptions: (1) the agent has a model of actions and their effects, (2) observations arrive incrementally, and (3) computational resources are limited so replanning must be efficient.

**Approach**  
1. **Hierarchical Planning:** Use a task‑decomposition tree where high‑level goals are split into subgoals until atomic actions.  
2. **Incremental Search:** Maintain a *partial plan* and apply *dynamic replanning* only on the affected subtree when new constraints appear.  
3. **Heuristic Guidance:** Employ learned heuristics (e.g., from reinforcement learning) to prune the search space quickly.

**Depth**  
- Represent the plan as a directed acyclic graph (DAG).  
- When an observation invalidates a node, trigger *local re‑optimization*: run A* or IDA* on that subgraph using updated cost estimates.  
- Complexity: worst‑case exponential in depth, but local replanning is linear in affected nodes; amortized cost stays near O(1) per update for shallow trees.  
- Trade‑off: more accurate models → less replanning but higher upfront inference cost.

**Edge Cases**  
- *Stale observations*: need a timeout or confidence threshold before discarding a plan fragment.  
- *Non‑deterministic actions*: incorporate probabilistic branching and maintain multiple concurrent subplans.  
- *Resource starvation*: fallback to “wait” actions if replanning time exceeds budget.

**Optimize & Communicate**  
Improvements: cache heuristic values, use incremental SAT solvers for constraint propagation, and parallelize independent subtrees. I’d explain that this design balances responsiveness with plan optimality—critical in real‑time domains like robotics or autonomous driving—while keeping the solution modular enough to scale across problem sizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
