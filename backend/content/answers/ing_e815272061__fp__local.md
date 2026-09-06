---
qid: ing_e815272061__fp__local
question: 'Explain: Types of ML Systems — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 427
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:38-05:00'
sources: []
---

**What is Machine Learning?**  
At its core, machine learning (ML) addresses the *inverse problem* of function approximation: given a set of input–output pairs \((x_i,y_i)\), we wish to infer a mapping \(f\) that predicts unseen outputs with minimal expected loss. Unlike classical programming, where rules are hand‑crafted, ML learns these rules from data by solving an optimization problem  
\[
\min_{\theta}\;\mathbb{E}_{(x,y)}[\ell(f_\theta(x),y)] .
\]
The *why* is that data often encode patterns too complex for human coders; learning distills those patterns into a compact parametric form. This process hinges on statistical estimation, regularization (to avoid overfitting), and the bias–variance trade‑off—deeply rooted in probability theory.

**Types of ML Systems**  
1. **Supervised Learning:** Uses labeled pairs \((x,y)\); solves regression or classification problems.  
2. **Unsupervised Learning:** No labels; discovers structure (clustering, dimensionality reduction).  
3. **Semi‑Supervised / Self‑Supervised:** Leverages both labeled and unlabeled data by constructing proxy tasks.  
4. **Reinforcement Learning:** Learns a policy \(\pi(a|s)\) maximizing cumulative reward through interaction with an environment; grounded in dynamic programming and stochastic control.  
5. **Generative Models (GANs, VAEs):** Learn probability distributions \(p(x)\) to synthesize new data, connecting to information theory via KL divergence or Jensen–Shannon distance.

A non‑obvious insight: *the choice of loss function implicitly defines the geometry of the hypothesis space.* For example, L1 loss induces sparsity (Manhattan geometry), whereas cross‑entropy aligns with information geometry. Recognizing this geometric link guides architecture and regularization design far beyond brute force experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
