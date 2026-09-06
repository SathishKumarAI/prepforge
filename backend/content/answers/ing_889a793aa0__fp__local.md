---
qid: ing_889a793aa0__fp__local
question: 'Explain: Quantization Aware Training — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 496
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:17-05:00'
sources: []
---

**Quantization‑Aware Training (QAT) in Kaiju: a principled view**

The core problem is *deployment latency*: a 1 B‑parameter LLM requires 16 bit weights to fit on commodity GPUs, yet inference time scales linearly with bit‑width. Naïvely post‑training quantization introduces rounding noise that the network cannot compensate for, because its gradients were optimized under full precision.

QAT solves this by **embedding the quantizer in the training graph**: each weight \(w\) is represented as a *stochastic* discrete value \(\hat w = Q(w;Δ)\), where \(Δ\) is the step size and \(Q\) rounds to the nearest representable integer. The forward pass uses \(\hat w\), so the loss \(L(\hat w)\) directly measures performance under quantization. In the backward pass we employ a *straight‑through estimator* (STE): \(\frac{\partial L}{\partial w} ≈ \frac{\partial L}{\partial \hat w}\). Thus gradients flow through the discrete operation as if it were identity, preserving optimization dynamics.

This construction links to **information theory**: quantization is a lossy channel; QAT learns weight distributions that are *robust* to this channel’s noise, effectively shaping the posterior over weights to be flat around decision boundaries. Geometrically, training with \(Δ\) forces embeddings into “quantization‑friendly” manifolds where small perturbations (due to rounding) do not cross class borders.

**Non‑obvious insight:** QAT implicitly regularizes *activation sparsity*. The STE makes the gradient insensitive to large quantization steps, which pushes intermediate activations toward values that lie in flat regions of the quantizer’s piecewise constant function. This reduces the probability mass on boundary edges, yielding more stable inference even when batch‑norm statistics shift during deployment.

In Kaiju, QAT is applied layer‑by‑layer with per‑tensor step sizes tuned by a lightweight calibration set, allowing us to keep 8‑bit precision without sacrificing perplexity or conversational coherence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
