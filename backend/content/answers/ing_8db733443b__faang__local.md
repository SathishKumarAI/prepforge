---
qid: ing_8db733443b__faang__local
question: 'Explain: Static (Plan-and-Solve) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:34-05:00'
sources: []
---

**Clarify**  
You’re asking about the *Static* or *Plan‑and‑Solve* paradigm in AI—where a problem is decomposed into sub‑tasks that are solved sequentially before execution. Confirm whether we’re focusing on classical planning (e.g., STRIPS, PDDL) or on hierarchical task networks (HTNs), and if the environment is deterministic or stochastic.

**Approach**  
1. **Model the domain**: Define states, actions, preconditions, effects.  
2. **Decompose**: Break the goal into a hierarchy of subtasks; each subtask becomes an independent planning problem.  
3. **Plan**: Use search (A*, IDDFS) or planners (e.g., Fast Downward) to generate a plan for each sub‑module.  
4. **Assemble**: Combine sub‑plans respecting ordering constraints.  
5. **Execute**: Roll out the final plan in the real world.

**Depth**  
- *Complexity*: Planning is PSPACE‑complete; decomposition can reduce branching but may introduce overhead if sub‑tasks overlap.  
- *Trade‑offs*: Static planning guarantees optimality under deterministic assumptions but fails to adapt when the environment changes mid‑execution.  
- *Tools*: HTN planners (JSHOP2) or hierarchical reinforcement learning for more flexible decompositions.

**Edge Cases**  
- Non‑deterministic actions → need contingency plans.  
- Inter‑subtask conflicts → require re‑planning or dynamic scheduling.  
- Cyclic dependencies → break with topological sorting.

**Optimize & Communicate**  
- Use *dynamic replanning* hooks to recover from failures.  
- Cache sub‑plans for reusable components (e.g., “pick up object”).  
- Explain the hierarchy clearly: “First we plan a path, then we plan grasping, finally we combine them.” This demonstrates clear reasoning and foresight—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
