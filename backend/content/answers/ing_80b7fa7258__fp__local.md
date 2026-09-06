---
qid: ing_80b7fa7258__fp__local
question: How does serving a large sparse mixture-of-experts model differ from serving
  a dense model, and what does expert parallelism change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 579
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:56-05:00'
sources: []
---

When a neural network is *dense*, every layer applies the same weight matrix to all tokens; inference time grows linearly with both batch size \(B\) and hidden dimension \(H\). The cost per token is fixed: \(\mathcal O(H^2)\) for a fully‑connected block, independent of input content.

A *sparse mixture‑of‑experts* (MoE) breaks this uniformity. Each token selects one or a few experts out of a large pool \(K\). The fundamental problem it solves is **parameter efficiency**: the total number of learnable parameters can be multiplied by \(K\) while keeping per‑token compute bounded. Mathematically, the expected FLOPs per token become  
\[
\mathbb{E}[\text{FLOPs}] = \frac{\alpha}{K}\times K\,\mathcal O(H^2)=\alpha\,\mathcal O(H^2),
\]
where \(\alpha<1\) is the *load factor* (average experts per token). Thus, MoEs keep compute comparable to a dense model but scale capacity.

**Serving differences**

| Dense | Sparse MoE |
|-------|------------|
| A single GPU processes all tokens in parallel. | Tokens are routed to potentially different GPUs; each expert runs on its own device. |
| Memory is shared uniformly; every layer’s activations live on one accelerator. | Activations are *sparsely* distributed: only the experts that receive tokens store their intermediate tensors, reducing memory footprint per GPU. |
| Bandwidth is a bottleneck when scaling \(B\) or \(H\). | Communication shifts from intra‑layer all‑to‑all to **expert parallelism**: each expert communicates only with its own input slice, dramatically lowering inter‑GPU traffic. |

**Expert parallelism** changes the computation graph itself: instead of a global matrix multiplication, we perform *independent* multiplications per expert. This yields:

1. **Reduced contention:** GPUs no longer compete for shared weight matrices; each runs an independent kernel.
2. **Load imbalance risk:** If the router is poorly calibrated, some experts may be idle while others are overloaded. The deeper insight here is that **routing entropy** (how uniformly tokens spread) becomes a critical hyper‑parameter; a small drop in entropy can cause *stragglers* that dominate latency.

In short, MoEs trade uniform compute for selective execution. Serving them requires rethinking memory layout and inter‑GPU communication, but when balanced correctly, expert parallelism lets us scale model capacity without inflating per‑token FLOPs or bandwidth—precisely the bottleneck that dense models hit as they grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
