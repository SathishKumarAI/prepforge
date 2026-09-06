---
qid: ing_f7404587b0__fp__local
question: 'Explain: Classification — What is Machine Learning? \u00a0|\u00a0 Google
  for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 401
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:45:30-05:00'
sources: []
---

**Classification in machine learning**

At its core, classification tackles the *decision‑making problem*: given an observation \(x\in\mathbb{R}^d\), assign it to one of a finite set of labels \(\{1,\dots,K\}\).  
Why must we learn this mapping? Because the world is noisy and high‑dimensional; a deterministic rule that works on training data will only generalize if it captures an underlying *statistical regularity*.  

Formally, we assume each class \(k\) generates data from a distribution \(p_k(x)\). The Bayes optimal classifier chooses the label maximizing the posterior probability
\[
\hat{y}(x)=\arg\max_{k} p(k|x)=\arg\max_{k}\frac{p_k(x)p(k)}{\sum_j p_j(x)p(j)}.
\]
A learning algorithm approximates this rule by estimating \(p_k(x)\) (or directly the decision boundary) from a finite sample. The *principle of maximum likelihood* or *maximum a posteriori* estimation turns this into an optimization problem: find parameters \(\theta\) that minimize expected loss, often the cross‑entropy.

**Non‑obvious insight:**  
The *decision boundary’s curvature* is dictated not by data density alone but by the *ratio* of class densities. Even if two classes occupy overlapping regions with equal marginal probabilities, the optimal separator may be highly non‑linear because it must weigh the relative likelihoods \(p_k(x)/p_j(x)\). Hence, algorithms that only model individual class distributions (e.g., naïve Bayes) can still achieve high accuracy by implicitly learning these ratios. Understanding this ratio perspective clarifies why seemingly simple models often rival more complex ones when data are scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
