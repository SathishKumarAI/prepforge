---
qid: ing_a7dda07790__faang__local
question: 'Explain: Sources — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 584
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:07-05:00'
sources: []
---

**Clarify**  
You’re asking for the *sources* that give rise to eXplainable‑AI (XAI) methods—i.e., where the explanations come from, what data or models they rely on, and how those sources are used. I’ll assume we want a concise overview of the main explanatory mechanisms rather than an exhaustive taxonomy.

**Approach**  
1. Identify core explanation *sources*: model internals, training data, surrogate models, counterfactuals, and human‑centric signals.  
2. For each source, describe its role, typical techniques, and when it’s most useful.  
3. Wrap up with a quick comparison of strengths/weaknesses.

**Depth**

| Source | What it provides | Typical methods | When to use |
|--------|------------------|-----------------|-------------|
| **Model internals (weights, activations)** | Direct insight into learned representations. | Saliency maps, SHAP, LIME, Integrated Gradients. | Black‑box models where gradients exist; need local feature importance. |
| **Training data** | Reveals biases and decision boundaries. | Counterfactual generation, dataset shift diagnostics. | Debugging model fairness or detecting spurious correlations. |
| **Surrogate models** | Simplified approximations that are human‑readable. | Decision trees, rule lists fitted to predictions. | Auditing complex models; providing global explanations. |
| **Counterfactuals / perturbations** | “What‑if” scenarios showing minimal changes for different outcomes. | CEM (Counterfactual Explanation Method), DICE. | Regulatory compliance, user trust, debugging. |
| **Human‑centric signals** | Align explanations with user mental models. | Concept activation vectors, prototype selection. | Explainability in high‑stakes domains where interpretability matters more than fidelity. |

**Edge cases**  
- Highly stochastic or ensemble models can make local explanations unstable; averaging over multiple runs is needed.  
- Models without gradients (e.g., decision trees) require surrogate‑based methods.  
- Counterfactuals may be infeasible if the data manifold is sparse; generative priors help.  

**Optimize & communicate**  
For a production system, start with *local* gradient‑based explanations for quick insights, then validate with *surrogate* global models to ensure consistency. When deploying to regulators or end‑users, pair saliency maps with counterfactuals so the user sees both “why” and “what if.” Communicate trade‑offs: higher fidelity often means lower interpretability; choose based on stakeholder needs.  

This structured view lets interviewers see that you understand where explanations originate, how to extract them, and when each source is appropriate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
