---
qid: ing_f8ac3b6248__fp__local
question: 'Explain: Machine Learning — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 451
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:48:15-05:00'
sources: []
---

**Why FAANG asks “what is the bias‑variance tradeoff?”**  
At its core, a model learns a function \(f_{\theta}\) mapping inputs to outputs. The *training error* measures how well \(f_{\theta}\) fits the data we have; the *test error* gauges generalization to unseen samples.  

- **Bias** captures systematic deviation from the true relationship—too simple a hypothesis class (e.g., linear regression on nonlinear data) yields high bias.  
- **Variance** reflects sensitivity to fluctuations in the training set—an overly flexible model (deep nets with many parameters) can memorize noise, inflating variance.

Mathematically,
\[
\mathbb{E}_{S}\!\left[(y - \hat f_S(x))^2\right]
= \underbrace{\bigl(\mathbb{E}_S[\hat f_S(x)]-f^*(x)\bigr)^2}_{\text{bias}^2}
+\underbrace{\operatorname{Var}_S[\hat f_S(x)]}_{\text{variance}}
+ \sigma_{\varepsilon}^2,
\]
where \(S\) is a training sample, \(f^*\) the true function, and \(\sigma_{\varepsilon}^2\) irreducible noise.  
FAANG interviews probe this decomposition because every engineering decision—choice of architecture, regularization strength, data augmentation—manipulates bias and variance in subtle ways.

**Non‑obvious insight:** *Regularization is not merely a penalty on parameters; it reshapes the hypothesis space’s geometry.* L1 or L2 constraints shrink parameter norms, effectively shrinking the “effective volume” of functions considered. This geometric contraction reduces variance by discarding high‑frequency components that would otherwise fit noise, while simultaneously increasing bias if the true function lies outside this contracted manifold. Understanding regularization as a geometric lens helps candidates articulate why dropout, weight decay, or early stopping work, rather than reciting formulas alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
