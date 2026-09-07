---
qid: ing_4bb3e50ab9__faang__local
question: What is Regularization? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 523
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:17-05:00'
sources: []
---

**Regularization in Machine Learning**

| Step | Description |
|------|-------------|
| **1️⃣ Clarify** | *Problem:* “What is regularization?” – I’ll explain it as a technique that penalizes model complexity to avoid over‑fitting. *Assumptions to confirm:* Is the focus on linear models, neural nets, or both? Do we need to cover L1/L2, dropout, etc.? |
| **2️⃣ Approach** | 1. Define the objective function (loss + penalty). <br>2. List common penalties (L1, L2, elastic‑net, dropout). <br>3. Explain how each influences weights and sparsity. <br>4. Mention trade‑offs: bias–variance, interpretability vs. performance. |
| **3️⃣ Depth** | Regularization augments the empirical risk `R_emp(h) = (1/n) Σ L(y_i, ŷ_i)` with a penalty term `Ω(θ)` scaled by λ: `J(θ)=R_emp(h)+λ Ω(θ)`. <br>• **L2 (ridge):** Ω=||θ||² → shrinks all weights uniformly; keeps all features but reduces variance. <br>• **L1 (lasso):** Ω=||θ||₁ → induces sparsity, performing feature selection. <br>• **Elastic‑net:** combination of L1+L2. <br>• **Dropout (NNs):** randomly zeros activations during training; approximates model averaging. Complexity: Training cost increases linearly with λ choice; hyperparameter tuning via cross‑validation. |
| **4️⃣ Edge Cases** | • Too large λ → under‑fitting, high bias.<br>• Too small λ → over‑fitting, high variance.<br>• For highly correlated features, L1 alone may drop useful ones—elastic‑net helps.<br>• In deep nets, dropout rate must be tuned; too high kills signal. |
| **5️⃣ Optimize & Communicate** | Highlight that regularization is a bias‑variance trade‑off tool. Emphasize that selecting λ (or dropout rate) via validation curves or Bayesian optimization yields optimal generalization. Conclude by noting that modern frameworks expose `weight_decay` or `dropout` parameters, making implementation straightforward. |

*Word count: ~215.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
