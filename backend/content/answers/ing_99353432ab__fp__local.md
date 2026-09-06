---
qid: ing_99353432ab__fp__local
question: 'Explain: Part 1: The Software: What Each GPU Holds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 422
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:46-05:00'
sources: []
---

**Part 1 – The software that lives on a single GPU**

When an AI model is trained, the *software* on one GPU can be viewed as a miniature laboratory:  
1. **Parameters** – every weight and bias in the network is stored as a tensor (usually 16‑ or 32‑bit floats). These are the knobs that the optimizer will turn.  
2. **Gradients** – during back‑propagation each parameter receives a partial derivative of the loss; these gradients are accumulated on the same device before an update step.  
3. **Optimizer state** – algorithms such as Adam keep per‑parameter momentum and variance buffers; they live next to the parameters so that every update is local.  
4. **Micro‑batch activations** – for a forward pass the GPU keeps the intermediate feature maps of each layer. They are needed immediately for the backward pass and are discarded afterward, keeping memory usage bounded.  
5. **Auxiliary tensors** – e.g., running statistics for batch‑norm or caches for transformer attention keys/values.

Why must all this stay on one GPU? Because every operation in a forward–backward step is *data‑parallel*: the same computation pattern runs over different slices of a tensor, and the only way to avoid costly PCIe traffic is to keep all operands local. The deeper principle here is *locality of reference* in high‑performance computing: latency dominates bandwidth when tensors are large, so the algorithm is designed to reuse data already resident on the device.

**Non‑obvious insight:**  
The optimizer state often ends up being *larger than* the parameters themselves (e.g., Adam’s two buffers per weight). In practice this means that the memory budget for a GPU can be dominated by these auxiliary tensors, not by the model weights. Understanding this trade‑off is crucial when scaling models to hundreds of billions of parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
