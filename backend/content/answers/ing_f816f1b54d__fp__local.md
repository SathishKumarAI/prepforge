---
qid: ing_f816f1b54d__fp__local
question: 'Explain: Interview questions — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 472
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:18-05:00'
sources: []
---

**LLM‑Fundamentals Interview Questions: Why They Matter and How to Think About Them**

The core challenge any large language model (LLM) solves is *probabilistic sequence prediction*: given a prefix \(x_{1:\!t-1}\), it must estimate  
\[
P(x_t \mid x_{1:t-1}) = \frac{P(x_{1:t})}{P(x_{1:t-1})},
\]
a distribution over tokens that captures syntax, semantics, and world knowledge.  

Interviewers therefore ask questions that probe three intertwined principles:

| Principle | Typical question | Why it matters |
|-----------|------------------|----------------|
| **Optimization & Generalization** | “Explain the role of weight decay in transformer training.” | Weight decay implements an \(L_2\) prior, reducing overfitting by encouraging smoother parameter solutions that generalize to unseen contexts. |
| **Information Theory** | “What is perplexity and how does it relate to entropy?” | Perplexity is \(2^{H}\), a direct estimator of the model’s expected cross‑entropy; lower perplexity means higher mutual information between predicted and actual tokens. |
| **Geometry of Representations** | “Why do we use layer normalization rather than batch norm in transformers?” | LayerNorm preserves the scale of residual connections across variable‑length sequences, keeping representations on a stable manifold that facilitates gradient flow during deep stacking. |

A non‑obvious insight: *attention heads are not independent experts but coordinate via a shared **contextual geometry**.*  
When training, the self‑attention matrix implicitly learns a low‑dimensional embedding of the input’s causal structure; perturbing a single head can cascade through this geometry, altering downstream representations more than any isolated weight update would suggest. Understanding this coupling explains why fine‑tuning often requires freezing early layers—those that encode global geometry—while only adapting later layers that refine local semantics.

In sum, a strong LLM interview answer should start from the probabilistic objective, justify each architectural choice through optimization or information principles, and highlight how geometric couplings give rise to emergent behavior beyond what naive component‑wise reasoning predicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
