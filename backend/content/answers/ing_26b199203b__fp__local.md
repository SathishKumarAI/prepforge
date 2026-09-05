---
qid: ing_26b199203b__fp__local
question: 'Explain: The interview loop — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 437
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:27:09-05:00'
sources: []
---

### The Interview Loop in AI: A Principled Derivation

At its core the interview loop solves **the distribution‑shift problem**: a model trained on one data set must perform reliably when confronted with new, unlabeled inputs.  
1. **Query Generation (Model → Human)** – The current model proposes a *question* (or sample) that maximizes expected information gain about the target distribution. This is an instance of **active learning**, where the objective is to reduce entropy over predictions with few human labels.  
2. **Human Response (Human → Model)** – A domain expert supplies the true label or feedback, effectively sampling from the *unknown* true distribution.  
3. **Model Update** – The model incorporates this new data point by minimizing a loss that balances fitting the fresh example and preserving prior knowledge—an instance of **online convex optimization** with regularization.

Mathematically, each loop step minimizes the Kullback–Leibler divergence between the model’s posterior and the true posterior, guaranteeing convergence under mild assumptions. The loop is *self‑reinforcing*: higher‑uncertainty predictions yield more informative labels, which in turn reduce future uncertainty—an echo of **information bottleneck theory**.

> **Non‑obvious Insight:**  
> The interview loop does not merely accumulate data; it implicitly performs a *policy search* over the space of questions. By treating question selection as a policy that maximizes expected reward (information gain), we can apply reinforcement learning to learn an optimal questioning strategy, vastly accelerating convergence compared to greedy or random sampling.

Thus, the interview loop is an elegant marriage of active learning, online optimization, and information theory, engineered to keep AI models aligned with reality through minimal human effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
