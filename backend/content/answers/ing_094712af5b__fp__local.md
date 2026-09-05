---
qid: ing_094712af5b__fp__local
question: 'Do the GPU memory math: why can''t you full-fine-tune a 7B model on a single
  24 GB GPU with Adam?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 405
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:29-05:00'
sources: []
---

### Why a 7‑B parameter LLM can’t be fully fine‑tuned on one 24 GB GPU with Adam

The **fundamental problem** is that training an autoregressive transformer requires storing, for every parameter θ, not only the value but also two *momentum* vectors (m and v) in Adam.  
- Parameters: \(7\times10^9\) × 4 bytes ≈ **28 GB**.  
- Adam moments: two copies → another 56 GB.  
Already exceeds 24 GB, ignoring activations.

Activations dominate the rest of the memory budget. For a single forward‑backward pass through a transformer with \(L\) layers and hidden size \(H\), each layer stores its activations for backpropagation:  
\(O(L \times H^2)\). With typical hyper‑parameters (\(L=32, H=4096\)), this alone is ~12 GB.  

Thus the total memory ≈ 28 + 56 + 12 ≈ 96 GB—far beyond a single GPU.

**Non‑obvious insight:** The bottleneck is not just Adam’s extra states; it is that *activations grow quadratically with hidden size*. Reducing parameter count (e.g., pruning) does little unless you also shrink the hidden dimension or employ activation checkpointing, which trades compute for memory. Only by restructuring the model (smaller \(H\), fewer layers) or using distributed training can a 7‑B model be fully fine‑tuned on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
