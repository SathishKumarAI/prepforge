---
qid: ing_48b7988ef7__fp__local
question: 'You''re splitting a research agent into an orchestrator and subagents.
  Design the interface: what exactly crosses the boundary in each direction?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 574
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:58-05:00'
sources: []
---

### Why the split matters

A **research agent** is essentially a *policy* that maps observations of the world (the research environment) into actions (experiments, queries, analyses). Splitting it into an **orchestrator** and **subagents** trades off two competing desiderata:

1. **Modularity & reusability** – subagents can be swapped or updated without touching the high‑level strategy.
2. **Optimality** – the orchestrator must still guarantee that the joint policy remains close to the optimum for the original problem.

The interface must therefore carry exactly what is *necessary* for each side to maintain these guarantees while keeping the other side agnostic.

---

### What crosses from **orchestrator → subagents**

| Symbol | Meaning | Why it’s required |
|--------|---------|-------------------|
| `state_t` | Full research state at time t (data, hypotheses, resource constraints). | Subagent needs context to decide *what* to do. |
| `policy_spec` | High‑level goal vector (e.g., “maximize information gain about hypothesis X”). | Encodes the orchestrator’s objective; subagents act as constrained optimizers. |
| `budget_t` | Remaining computational or experimental budget. | Prevents subagents from over‑expending resources that the orchestrator must preserve for future steps. |

---

### What crosses from **subagent → orchestrator**

| Symbol | Meaning | Why it’s required |
|--------|---------|-------------------|
| `action_t` | Concrete experiment, query, or computation chosen by the subagent. | Orchestrator must commit to this action and update its belief accordingly. |
| `value_estimate_t` | Expected reward (e.g., expected KL‑divergence reduction) of `action_t`. | Enables the orchestrator to evaluate trade‑offs between competing subagents. |
| `feasibility_flag_t` | Boolean indicating whether the subagent could feasibly perform the action under current constraints. | Allows the orchestrator to fall back gracefully if a subagent fails or is over‑constrained. |

---

### Non‑obvious insight

The *policy_spec* and *value_estimate* together form a **dual pair**: the orchestrator’s objective is a linear functional of the subagents’ value estimates, while each subagent solves a constrained optimization that yields precisely those values. This duality guarantees that any improvement in a subagent’s estimate translates directly into an improved global policy, provided the budget constraint is respected. Hence, the interface is not just a communication channel but a *mathematical contract* ensuring global optimality from local decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
