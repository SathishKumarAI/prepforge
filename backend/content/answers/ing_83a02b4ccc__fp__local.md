---
qid: ing_83a02b4ccc__fp__local
question: 'Explain: xAI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 378
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:45:04-05:00'
sources: []
---

**Why “explainable‑AI” (xAI) interview questions matter**

The *fundamental problem* is that modern deep nets are black boxes: they map high‑dimensional inputs \(X\) to outputs \(Y\) by optimizing a loss function, yet the learned weights \(\theta\) encode no human‑readable semantics. In regulated domains (healthcare, finance), stakeholders demand *trust*: an algorithm must be auditable, fair, and robust. Hence interviewers probe whether you can **recover interpretable structure** from \((X,\theta,Y)\).

The solution rests on **information bottleneck theory**: a model compresses input information while preserving predictive relevance. Explainability methods (saliency maps, SHAP values, LIME perturbations) effectively *invert* this compression—estimating the contribution of each feature to the prediction. They must satisfy two constraints:

1. **Local fidelity** – the explanation must approximate the model’s behavior around a specific input.
2. **Global sanity** – the explanation should reflect genuine data‑model interactions, not artefacts of random noise.

Thus interview questions often ask you to implement or critique such methods, ensuring you understand both *optimization* (gradient‑based attribution) and *probabilistic inference* (Shapley value estimation).

**Non‑obvious insight:**  
Many practitioners treat explanations as post‑hoc outputs, ignoring that the *choice of perturbation distribution* in LIME directly affects its bias. Selecting a distribution aligned with the true data manifold (e.g., sampling from a generative model) can dramatically improve explanation fidelity—something most interviewers overlook but is critical for deploying trustworthy AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
