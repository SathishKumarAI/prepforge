---
qid: ing_6432dc6a0d__fp__local
question: 'Explain: The Chinchilla Paradigm (2022-2024) — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 387
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:16-05:00'
sources: []
---

**The Chinchilla Paradigm – why “data‑first” matters**

At its core a language model is an estimator of the joint distribution  
\(P(x_{1},\dots ,x_{T})\) over token sequences.  
Training reduces the Kullback–Leibler divergence between this true
distribution and the model’s parametric approximation.  
The evidence lower bound (ELBO) tells us that *every* additional example
provides an unbiased gradient estimate; the variance of that estimate is
inversely proportional to the amount of data, not to the number of
parameters.

In practice, however, researchers increased parameters while keeping
the training dataset fixed. The resulting “parameter‑heavy” models
suffered from *diminishing returns*: more capacity could not be exploited
without a commensurate increase in data, because each parameter still
had to learn from the same noisy signal.

Chinchilla’s insight is that **training cost scales linearly with both
parameters and dataset size**, but the *effective* learning signal per
parameter drops as \(1/N_{\text{data}}\).  
By reallocating budget from a 70B‑parameter model trained on 300 B tokens
to a 20B‑parameter model trained on 2.5T tokens, one achieves roughly the
same KL divergence with far fewer compute hours.

**Non‑obvious takeaway:** *More data can be cheaper than more parameters*.
Because each token contributes to all parameters simultaneously,
doubling the dataset often yields a larger reduction in loss than
doubling model size, yet the cost grows only linearly.  
Thus, optimal scaling is governed by the **data–parameter ratio**, not
by sheer parameter count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
