---
qid: ing_4da3cffb0d__fp__local
question: 'Explain: How It Works — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 470
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:32-05:00'
sources: []
---

**Why we need “attention” in neural language models**

When a model reads a sentence, every word should influence the prediction for each other word, but not all words are equally relevant. The core problem is *selective weighting*: given a query vector \(q\), we want to aggregate information from a set of key‑value pairs \(\{(k_i,v_i)\}\) so that only the keys most similar to \(q\) contribute strongly.

**Derivation**

1. **Similarity score** – compute a scalar relevance \(s_i = q^\top k_i / \sqrt{d_k}\).  
   The division by \(\sqrt{d_k}\) keeps gradients stable, akin to scaling in the dot‑product kernel of Gaussian processes.

2. **Softmax normalisation** – turn scores into probabilities \(a_i=\frac{\exp(s_i)}{\sum_j\exp(s_j)}\).  
   This is a *log‑concave* distribution; it ensures differentiability and that small changes in \(q\) smoothly re‑weight contributions.

3. **Weighted sum** – output \(z = \sum_i a_i v_i\).  
   The result lies in the convex hull of the values, guaranteeing it cannot lie “outside” the observed evidence.

This is an instance of *soft assignment* in mixture models and can be viewed as a stochastic encoder that marginalises over latent alignment variables. It satisfies the optimal transport principle: the softmax weights minimise the Kullback–Leibler divergence between the empirical attention distribution and a uniform prior, while respecting the similarity structure.

**Non‑obvious insight**

Attention is *not* merely an interpretability tool; it implicitly regularises the model by constraining its capacity to focus on local patterns. Because the softmax weights are differentiable, gradients flow through them in a way that favours sparse, yet smooth, alignments—effectively performing **adaptive feature selection** without explicit sparsity penalties. This explains why attention layers often converge faster and generalise better than dense feed‑forward alternatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
