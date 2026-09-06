---
qid: ing_b01fa232e8__fp__local
question: 'Explain: Taxonomy of Agent Failures — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 484
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:59-05:00'
sources: []
---

**Why a taxonomy is inevitable**

An autonomous agent operates under *uncertainty* (unknown environment) and *resource constraints* (time, memory).  
Its control loop can fail only in ways that *break the invariant* that “the next action maximises expected reward”.  
Thus every failure must be reducible to one of three fundamental causes:

1. **Perceptual** – the agent’s internal state diverges from reality because observations are corrupted or missing.  
2. **Strategic** – the chosen plan no longer optimises the objective (e.g., a model is outdated).  
3. **Actuation** – the physical execution deviates from the intended action.

This decomposition follows directly from the *separation principle* in control theory: perception, planning, and actuation are orthogonal layers; errors in one layer cannot be corrected by the others without explicit recovery logic.

**Recovery as a constrained optimisation problem**

Given a failure type \(f\), the agent must minimise cost  
\(C = \sum_i w_i\, t_i + b_f\)  
where \(t_i\) are time to recover, \(w_i\) their weights (e.g., safety priority), and \(b_f\) a bias for the failure class.  
The optimal recovery strategy is the one that yields the lowest *expected* cost over all possible downstream failures.

**Non‑obvious insight**

Most frameworks treat each failure independently, but the *interaction term* between perceptual and strategic errors is often ignored.  
When a perceptual fault leads to an ill‑formed state estimate, it can propagate into a strategic mis‑plan that costs exponentially more to recover.  
Therefore, early detection of *state‑estimation drift* (e.g., via Bayesian surprise) should trigger a lightweight *re‑planning* rather than waiting for a full actuation failure.  

By grounding the taxonomy in orthogonal layers and framing recovery as an optimisation over cost‑time trade‑offs, we obtain a principled, extensible blueprint that aligns with deep learning, robotics, and safety‑critical AI systems alike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
