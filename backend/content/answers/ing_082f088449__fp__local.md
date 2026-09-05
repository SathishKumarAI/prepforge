---
qid: ing_082f088449__fp__local
question: 'Explain: 14.1.2.1. Multi-GPU Training ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 491
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:22:58-05:00'
sources: []
---

### Why multi‑GPU training *must* split the gradient, not the data

In a mini‑batch of size \(B\) each GPU processes \(b=B/N_{\text{GPUs}}\) samples.  
The loss for sample \(i\) is \(\ell_i(w)\); the overall objective is
\(L(w)=\frac1B\sum_{i=1}^{B}\ell_i(w)\).  
When we compute a gradient on one GPU, we obtain
\[
g_j=\nabla_w \Bigl[\frac{1}{b}\sum_{i\in S_j}\ell_i(w)\Bigr],
\]
where \(S_j\) is that GPU’s subset.  
Because the loss is *additive*, the true gradient satisfies
\(L'(w)=\frac1N_{\text{GPUs}}\sum_{j}g_j\).
Hence the natural parallelism is to **aggregate gradients** rather than split the data distribution itself.

If we were to naïvely copy the same mini‑batch to every GPU (data‑parallel), each would compute the *same* gradient and waste compute.  
Conversely, if we simply ran independent optimizers on disjoint subsets (model‑parallel) without communication, the updates would drift apart, yielding a biased objective.

Thus, **gradient aggregation** preserves the unbiased estimate of \(\nabla L\) while exploiting all GPUs’ FLOPs. The only extra cost is an all‑reduce step—cheap compared to forward/backward passes—and it guarantees that every weight update moves in the direction that would have been taken with a single GPU.

### One non‑obvious insight

The speed‑up saturates not because each GPU becomes slower, but because **gradient variance shrinks** as \(B\) grows.  
When you split a *large* batch across many GPUs and average gradients, the stochastic noise decreases roughly as \(\sigma^2/B_{\text{global}}\).  
Consequently, larger global batches can be trained with fewer epochs, offsetting the communication overhead of all‑reduce. This variance reduction is why recent works (e.g., Megatron‑LM) push batch sizes to millions while still converging quickly—an effect that often goes unnoticed when people focus solely on raw FLOPs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
