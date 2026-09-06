---
qid: ing_bd2eb437fa__fp__local
question: 'Explain: Scaling laws — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 404
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:45:46-05:00'
sources: []
---

**Why do larger language models (LLMs) keep getting better?**

The core problem is *statistical inference*: an LLM learns a probability distribution \(p_\theta(\mathbf{x})\) over token sequences \(\mathbf{x}\). Training minimizes the cross‑entropy loss, which equals the negative log‑likelihood of the data. For a fixed dataset, this loss decomposes into two terms:

1. **Bias** – the model’s capacity to represent the true distribution.
2. **Variance** – the uncertainty due to limited training examples.

Adding parameters shrinks bias (the network can express more complex functions) but increases variance. The *bias–variance trade‑off* predicts an optimal size, yet in practice we observe a monotonic improvement until thousands of billions of tokens and parameters.

The resolution comes from **self‑regularizing scaling laws** discovered empirically: for a fixed dataset size \(N\), the loss scales as

\[
L(M,N) \approx c_1 M^{-\alpha} + c_2 N^{-\beta},
\]

with exponents \(\alpha,\beta \approx 0.07–0.08\). This relation follows from the *law of large numbers* applied to neural‑network training: each additional parameter acts as an independent estimator that averages over noise, and each new token provides a fresh sample reducing statistical error.

**Key insight:** The exponents are universal because they encode how information propagates in deep networks. A larger network effectively partitions the data space into finer subspaces; the *effective dimensionality* grows sublinearly, so each parameter contributes diminishing returns. Thus, scaling is not merely “bigger is better” but a consequence of balancing capacity and sample complexity under the geometry of high‑dimensional probability spaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
