---
qid: ing_525d949e11__fp__local
question: 'Explain: AI/ML Deep Dive — Perplexity AI Interview Prep 2026: Process,
  Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 504
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:20-05:00'
sources: []
---

**Perplexity: a bridge between language modeling and information theory**

At its core, a language model predicts the next token \(w_t\) given history \(\mathbf{h}\). The *log‑likelihood* of a test set is  

\[
\mathcal{L}=\frac1N\sum_{i=1}^{N}\log p_\theta(w_i|\mathbf{h}_i),
\]

where \(p_\theta\) is the model’s distribution. If we exponentiate \(-\mathcal{L}\), we obtain

\[
\text{Perplexity}=2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 p_\theta(w_i|\mathbf{h}_i)}.
\]

This is nothing but the *exponential of cross‑entropy*, i.e., the expected number of choices a perfect predictor would have to make. The lower the perplexity, the more “certain” the model is about its predictions.

**Why it works**

1. **Probabilistic foundation:** Perplexity equals \(2^{H(p_{\text{true}}, p_\theta)}\), where \(H\) is cross‑entropy. It measures how far the learned distribution is from the true one.
2. **Unit consistency:** Unlike raw loss, perplexity has units of *tokens*, making it comparable across vocabularies and datasets.
3. **Geometric interpretation:** In a high‑dimensional simplex of token probabilities, perplexity captures the effective “spread” of the model’s mass.

**Interview angle**

- Expect questions on deriving perplexity from first principles, its relation to entropy, and why it is preferred over raw loss for language tasks.
- Be ready to discuss how perplexity behaves under different smoothing or sampling strategies, and what it reveals about over‑confidence vs. uncertainty.

**Non‑obvious insight:**  
Perplexity *does not* just quantify accuracy—it reflects the **model’s entropy budget**. A model with low perplexity but high variance in predictions can still be useful for downstream tasks that require diverse outputs (e.g., creative generation). Understanding this nuance shows mastery of both theory and practical implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
