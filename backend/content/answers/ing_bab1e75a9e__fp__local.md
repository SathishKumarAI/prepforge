---
qid: ing_bab1e75a9e__fp__local
question: 'Q: Why is "Plan Revision" often more expensive than "Plan Generation"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 401
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:41-05:00'
sources: []
---

**Why revising an AI plan costs more than generating it**

When a planner creates a plan, it explores a *search space* once: it picks actions, checks constraints, and records the sequence that satisfies the goal. The cost is largely proportional to the size of the search tree—\(O(b^d)\) where \(b\) is branching factor and \(d\) depth.  

A revision, however, must **re‑optimize** in a *modified* environment: some action may become infeasible, a new constraint may appear, or an objective weight may shift. The planner can’t simply “patch” the old plan; it has to rebuild the search tree from scratch or perform expensive local re‑planning (e.g., A* with dynamic edge costs). Each node now requires recomputation of feasibility and cost under the new model, often involving additional simulations or constraint satisfaction checks.  

This extra layer is an instance of *incremental optimization* in non‑convex spaces: small perturbations can move a solution from one basin to another, forcing the planner to explore entirely different subtrees. The combinatorial explosion is amplified because the planner must consider not only alternate actions but also their interactions with the new constraints—an exponential blow‑up that rarely reuses the old plan’s structure.

**Non‑obvious insight:**  
Many planners assume a *greedy* patching strategy (replace only the offending action). Yet, unless the problem is linear or convex, such local fixes almost always miss global optima. The true cost stems from the need to recompute feasibility for *all* downstream actions, not just the immediate one, because each action’s success depends on the entire causal chain. Recognizing this dependency explains why “Plan Revision” can be orders of magnitude more expensive than “Plan Generation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
