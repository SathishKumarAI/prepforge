---
qid: ing_0cd0b0021b__fp__local
question: In this round you can use a coding agent, and we'll be watching how you
  use it. How do you approach that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 370
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:00-05:00'
sources: []
---

**Why a coding agent is indispensable for the “AI‑in‑a‑round”**

The core problem is *efficiently transforming human intent into executable logic* while guaranteeing correctness and adaptivity.  
1. **Formal specification → search space**: We encode the task as a formal specification (type signatures, pre/postconditions). This turns the problem into a constrained search over program space—an optimization landscape where each candidate’s cost is its semantic distance from the spec plus resource usage.  
2. **Guided exploration via gradient‑like signals**: The agent receives gradients not from numeric loss but from symbolic feedback (type errors, unit‑test failures). These are sparse yet highly informative; they prune vast swaths of invalid code and steer the search toward feasible regions—an instance of *symbolic optimisation*.  
3. **Probabilistic inference over syntax**: A language model supplies a prior \(P(\text{code})\), while the specification defines a likelihood \(P(\text{spec}\mid \text{code})\). The agent samples from the posterior, balancing creativity (high‑entropy regions) with precision (high‑probability clauses).  
4. **Iterative refinement**: Each run of the code generates new data—runtime traces, counterexamples—which update the prior. This mirrors Bayesian learning and ensures convergence to a robust solution.

**Non‑obvious insight:** The *error signal* itself is more informative than the final output; by treating compile‑time failures as “gradient steps,” we convert static typing into an active learning loop that dramatically accelerates synthesis compared to blind search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
