---
qid: ing_e07eadf1ac__fp__local
question: 'Explain: Evaluation Dimensions — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 425
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:08-05:00'
sources: []
---

**Evaluation Dimensions – A First‑Principles View**

When we *build an agent*—a policy that maps states to actions—we implicitly solve a **decision optimization problem**: maximize expected cumulative reward while respecting constraints (budget, safety). To judge how well the agent does, we must quantify *how much* of this objective it achieves. This leads naturally to three orthogonal evaluation dimensions:

| Dimension | Why it matters | Typical metric |
|-----------|----------------|----------------|
| **Performance** | Captures the primary goal: reward attainment. It is a direct proxy for the objective function we minimized during training. | Cumulative/average reward, return distribution statistics. |
| **Robustness** | Reflects *generalization* beyond the training environment; an agent must tolerate unobserved perturbations or adversarial inputs. | Success rate under domain randomization, worst‑case performance over a set of perturbed test scenarios. |
| **Efficiency** | Measures resource usage—time, memory, energy—that governs deployability on edge devices or real‑time systems. | Inference latency, FLOPs per decision, battery consumption. |

These dimensions are *independent* yet *interlinked*: improving performance often costs efficiency; robustness may require additional data that inflates training time. A principled evaluation therefore treats them as **multi‑objective constraints** rather than a single scalar score.

> **Non‑obvious insight:**  
> The *robustness* dimension can be expressed as an **information‑theoretic divergence** between the agent’s policy under nominal and perturbed distributions. Minimizing this divergence during training (e.g., via adversarial KL penalties) yields agents that are not only high‑performing but also intrinsically stable, turning robustness from a post‑hoc test into a *regularizer* in the learning objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
