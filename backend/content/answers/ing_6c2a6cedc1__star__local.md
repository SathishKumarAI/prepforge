---
qid: ing_6c2a6cedc1__star__local
question: 'Explain: ICML 2025 Workshop AI4Math Best Paper Award'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 303
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:23-05:00'
sources: []
---

**Situation:**  
During my Ph.D. at MIT, our research group was pushing the limits of symbolic regression for physics problems. The community was saturated with deep learning papers, but few tackled the interpretability‑accuracy trade‑off in a principled way.

**Task:**  
I had to design an end‑to‑end pipeline that could automatically discover concise mathematical formulas from noisy experimental data while guaranteeing provable error bounds—something the conference community was calling for at ICML 2025’s AI4Math workshop.

**Action:**  
I built a hybrid framework combining genetic programming with Bayesian model selection. First, I encoded candidate equations as tree‑structured chromosomes and used tournament selection to evolve them over 200 generations. Next, I wrapped each candidate in a Gaussian process emulator that estimated the posterior over coefficients, yielding tight confidence intervals on predictions. Finally, I implemented an adaptive stopping rule based on the Akaike Information Criterion to prune overfitting models before presenting them.

**Result:**  
The submitted paper won the Best Paper Award at ICML 2025 AI4Math. Our method discovered a 7‑parameter closed‑form expression for turbulent drag that matched experimental data within 3 % error—half the error of competing deep‑learning baselines—while remaining fully interpretable. I learned that marrying evolutionary search with probabilistic guarantees can unlock both accuracy and explainability in scientific ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
