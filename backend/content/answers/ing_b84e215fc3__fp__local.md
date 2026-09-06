---
qid: ing_b84e215fc3__fp__local
question: What is in-context learning, and how do you decide between it and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 425
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:36:12-05:00'
sources: []
---

**In‑context learning (ICL)** is a *zero‑shot* strategy that leverages the prompt itself as a training signal for a large language model (LLM).  
Fundamentally, an LLM estimates \(P(\mathbf{y}\mid\mathbf{x})\) by modeling the joint distribution of tokens. In ICL we supply a few **exemplars** \((x_i,y_i)\) followed by a new input \(x^\*\); the model is asked to output \(y^\*\). The exemplars are not memorized or re‑parameterized; they act as *conditioning data* that shift the internal activation patterns through attention weights. This is equivalent to performing a **Bayesian update** on the posterior over latent variables given the prompt context, without any gradient steps.

When deciding between ICL and fine‑tuning (FT), consider:

| Criterion | In‑Context Learning | Fine‑Tuning |
|-----------|--------------------|-------------|
| Data requirement | Few examples; no dataset needed | Requires a sizable labeled set |
| Adaptation speed | Instant, no retraining | Requires training epochs |
| Model integrity | No risk of catastrophic forgetting | Risk if new data conflicts with prior knowledge |
| Deployment cost | Single inference pass | Multiple passes for gradient updates |

**Rule of thumb:**  
- Use ICL when the task is *domain‑specific* and the prompt can be crafted to cover the variation.  
- Use FT when you need **robust, reproducible performance** across many inputs or when the target distribution shifts over time.

A subtle but powerful insight: *ICL implicitly performs a form of *attention‑based conditioning*, which is mathematically equivalent to Bayesian posterior inference in transformer architectures. This means that even a poorly tuned prompt can outperform a lightly fine‑tuned model if it induces the right attention pattern—an effect often overlooked when comparing ICL to FT.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
