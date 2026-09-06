---
qid: ing_b98fbb89a6__fp__local
question: 'Explain: What they emphasise — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 440
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:38:27-05:00'
sources: []
---

**Perplexity – the “entropy of a language model”**

At its core, perplexity answers *how surprised* a probabilistic model is by the next token it sees.  
Suppose we have a sequence \(x_1,\dots ,x_T\). A language model assigns each token a conditional probability \(p(x_t|x_{<t})\). The log‑likelihood of the whole sequence is  

\[
\log p(\mathbf{x})=\sum_{t=1}^{T}\log p(x_t|x_{<t}).
\]

Perplexity is the exponential of the *negative* average log‑likelihood:

\[
\text{PPL}=2^{-\frac{1}{T}\sum_{t}\log_2 p(x_t|x_{<t})}
          = \exp\!\left(-\frac{1}{T}\sum_{t}\ln p(x_t|x_{<t})\right).
\]

Why this form?  
* **Information‑theoretic foundation** – the average negative log probability is the *cross‑entropy* between the true data distribution and the model. Exponentiating turns cross‑entropy (bits per token) back into a “rate” of tokens needed to encode the sequence—hence the term “perplexity.”  
* **Optimization link** – minimizing perplexity is equivalent to maximizing likelihood, the standard training objective for generative models.  
* **Geometric intuition** – in a high‑dimensional probability simplex, perplexity measures how far the model’s predicted distribution is from the empirical distribution; lower perplexity means tighter clustering around true tokens.

**Non‑obvious insight:** Perplexity is *not* merely a performance metric; it directly bounds the *expected code length* for any optimal arithmetic coder. Thus, in practice, a 10% reduction in perplexity translates to roughly a 10% compression gain—something that guides model selection far beyond raw accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
