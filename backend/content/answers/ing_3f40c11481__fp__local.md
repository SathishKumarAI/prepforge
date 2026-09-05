---
qid: ing_3f40c11481__fp__local
question: 'Explain: There are two general approaches when it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 544
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:18:52-05:00'
sources: []
---

In a nutshell, machine‑learning systems are built to solve two complementary statistical problems:

1. **Prediction** – given an input \(x\), produce the correct label or value \(y\).  
2. **Discovery** – from raw data alone, infer structure that explains it.

These map to the **discriminative** and **generative** paradigms, respectively.  

### 1. Discriminative (supervised) learning  
We posit a conditional distribution \(p_\theta(y|x)\) parameterised by \(\theta\). The training set supplies pairs \((x_i,y_i)\); the goal is to choose \(\theta\) that minimises expected loss, typically via empirical risk minimisation:
\[
\hat{\theta}=\arg\min_{\theta}\frac{1}{n}\sum_{i=1}^{n}\ell(f_\theta(x_i),y_i).
\]
This directly optimises the quantity we care about (accuracy). The optimisation is convex for many loss–model pairs, guaranteeing a global optimum.  

### 2. Generative (unsupervised) learning  
Here we model the joint distribution \(p_\theta(x,y)\) or just \(p_\theta(x)\), aiming to capture the data manifold. Maximising likelihood,
\[
\hat{\theta}=\arg\max_{\theta}\prod_{i=1}^{n} p_\theta(x_i),
\]
yields a density that can be sampled, imputed, or used for semi‑supervised tasks. The key insight is that learning the full distribution gives richer information than merely predicting labels.

**Non‑obvious insight:** In both frameworks the *capacity* of \(p_\theta\) (e.g., VC dimension, Rademacher complexity) governs generalisation. Rather than treating overfitting as a nuisance, it is an optimisation constraint: we must balance fit against expressiveness to minimise true risk. This unifies regularisation, cross‑validation, and model selection under one principle—control the function class’s ability to shatter data rather than merely fitting noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
