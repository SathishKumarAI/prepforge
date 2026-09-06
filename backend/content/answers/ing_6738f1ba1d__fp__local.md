---
qid: ing_6738f1ba1d__fp__local
question: What is vLLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 390
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:30-05:00'
sources: []
---

**vLLM (Very Large Language Model inference engine)**

At its core, vLLM tackles the *memory‑bandwidth bottleneck* that plagues GPU‑based inference of models with billions of parameters.  
When a transformer runs on a single GPU, every token requires reading all 12–24 k hidden states from global memory; this traffic dominates latency and limits batch size.  

vLLM’s insight is to **reorder computation so that each layer’s weights are streamed once per batch** rather than per token.  
It builds a *kernel‑level pipeline*:

1. **Tensor‑parallel partitioning** – split the weight matrix across GPUs, keeping all activations on one device.
2. **FlashAttention‑style blockwise softmax** – compute attention in memory‑efficient blocks that fit in L3 cache.
3. **Dynamic batching & request scheduling** – group queries of similar length to amortize kernel launch overhead.

This design turns inference into a *streaming linear algebra* problem, whose optimal solution is governed by the *roofline model*: maximize arithmetic intensity until GPU compute saturates, then hide memory latency with overlap.

**Non‑obvious insight:**  
Because each layer’s weights are reused across all tokens, vLLM can treat them as *static* during a request and exploit **kernel fusion**. This reduces kernel launch overhead by an order of magnitude—an effect that disappears when only a few layers (e.g., GPT‑2) are served.

Thus, vLLM achieves 3–10× speedup over vanilla PyTorch inference while keeping memory usage linear in model size, enabling production deployment of 70B+ parameter LLMs on commodity GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
