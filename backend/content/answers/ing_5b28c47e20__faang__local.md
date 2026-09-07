---
qid: ing_5b28c47e20__faang__local
question: 'Explain: Opening the box: a quick tour of interpretability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 437
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:15-05:00'
sources: []
---

**Opening the Box: A Quick Tour of Interpretability**

| Step | What I’ll Do |
|------|--------------|
| **Clarify** | *Goal:* Explain how we peek inside an AI model to understand its decisions. <br>Assumptions: 1) Audience knows basic ML concepts, 2) We focus on supervised models (e.g., trees, neural nets). |
| **Approach** | 1️⃣ Identify the “black‑box” component.<br>2️⃣ Choose a lens: feature importance, local explanations, or counterfactuals.<br>3️⃣ Build an example pipeline to illustrate each lens. |
| **Depth** | *Feature Importance* (Tree‑based): Gini/entropy splits → SHAP values quantify each input’s contribution. <br>*Local Explanations:* LIME approximates the model around a point with a linear surrogate; good for any model. <br>*Counterfactuals:* Find minimal changes to flip prediction, offering actionable insights. Complexity: SHAP is O(n·d) for tree‑based models; LIME runs a local regression (O(k²)). Trade‑offs: global vs. local fidelity, speed vs. precision. |
| **Edge Cases** | • Models with correlated features → importance may be misleading.<br>• High‑dimensional data → SHAP can become expensive.<br>• Non‑deterministic models (dropout) need sampling to stabilize explanations. Test on synthetic datasets where true relevance is known. |
| **Optimize & Communicate** | 1️⃣ Cache feature attributions for repeated queries.<br>2️⃣ Parallelize LIME perturbations. <br>When presenting, start with a concrete example (e.g., loan approval), show the explanation heatmap, and end by tying interpretability back to compliance or bias mitigation. |

*Result:* A concise, structured walkthrough that balances technical depth, practical implementation, and clear communication—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
