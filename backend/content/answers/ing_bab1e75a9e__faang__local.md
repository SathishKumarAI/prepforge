---
qid: ing_bab1e75a9e__faang__local
question: 'Q: Why is "Plan Revision" often more expensive than "Plan Generation"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 403
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:56-05:00'
sources: []
---

**Clarify**  
We’re comparing the cost of *creating* an AI plan (the first time we compute a sequence of actions) versus *re‑evaluating* that plan when circumstances change—i.e., plan revision. Assume both use the same planner, search algorithm, and model size; the only difference is that during revision some state information has changed.

**Approach**  
1. Identify what changes trigger revision (new observations, constraints).  
2. Determine how much of the original search tree can be reused versus rebuilt.  
3. Estimate computational overhead for each case.

**Depth**  
Plan generation typically starts from scratch: a full breadth‑first or heuristic‑guided exploration over all relevant actions. In contrast, plan revision often requires *re‑planning* in the presence of new constraints—this may involve re‑expanding nodes that were previously pruned, recomputing heuristics, and potentially backtracking deeper than the original depth. Moreover, many planners store expensive intermediate data (heuristic values, partial plans) only for a single run; on revision this cache is invalidated, forcing a fresh computation of these costly components. Consequently, the effective branching factor during revision can be higher because constraints prune fewer paths early, leading to more node expansions.

**Edge cases**  
- Minor observation changes: might be handled by incremental updates and thus cheaper.  
- Structural changes (new actions or goals): often force a complete rebuild, matching generation cost.

**Optimize & communicate**  
To reduce revision cost we can employ *incremental planning* (reuse partial plans), maintain *dynamic heuristics*, and use *lazy evaluation* of constraints. I’d explain that while plan generation is inherently expensive, the extra work during revision stems from the need to re‑evaluate constraints that invalidate large portions of the original search space, making it often more costly than a fresh run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
