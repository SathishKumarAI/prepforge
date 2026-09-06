---
qid: ing_600d850056__fp__local
question: 'Explain: Rules and constraints — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 357
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:29:47-05:00'
sources: []
---

### Why an “AI‑Coding Workflow” needs Rules & Constraints

At its core, building a model that *writes code* is a **meta‑optimization** problem: we want a system to discover a program \(P\) that satisfies a specification \(S\). The search space of all syntactically valid programs is astronomically large; without guidance the optimiser (a language model or evolutionary algorithm) will wander into nonsensical or unsafe code.  

Neo Kim and Louis‑François Bouchard formalise this intuition by imposing **three layers of constraints** that mirror classical optimisation techniques:

| Layer | Purpose | Example |
|-------|---------|---------|
| **Syntactic grammar** | Guarantees every candidate is a valid parse tree | LL(k) parser for the target language |
| **Semantic type‑checking** | Prevents runtime errors before execution | Type inference on variable bindings |
| **Specification‑driven scoring** | Aligns the objective with user intent | Unit‑test success rate, static analysis metrics |

By treating each layer as a *projection* that eliminates infeasible directions in the search space, the optimiser can focus its gradient or evolutionary pressure on genuinely promising regions. This mirrors Lagrangian multipliers: constraints are enforced by penalty terms rather than hard cuts, preserving differentiability.

**Non‑obvious insight:** The semantic checker itself becomes an *implicit curriculum*. Early generations learn basic type safety; later generations can exploit higher‑order abstractions because the cost of violating types has already been amortised. Thus, constraints not only prune but actively shape learning trajectories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
