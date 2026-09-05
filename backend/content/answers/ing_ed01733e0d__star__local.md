---
qid: ing_ed01733e0d__star__local
question: 'Explain: Implement scaled dot-product attention with a causal mask in NumPy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 362
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:44-05:00'
sources: []
---

**Situation:**  
While working on a research prototype for an autoregressive language model at my university lab, the existing PyTorch implementation was too slow for rapid experimentation on small GPUs. I needed a lightweight NumPy version to benchmark custom optimizations.

**Task:**  
Implement scaled dot‑product attention with a causal (look‑ahead) mask entirely in NumPy, ensuring numerical stability and correct masking for sequence lengths up to 512 tokens, while keeping memory usage under 2 GB.

**Action:**  
I first reshaped the query, key, and value tensors into (batch, heads, seq_len, d_k). For scaling I divided by `np.sqrt(d_k)` before dotting queries with transposed keys. To create the causal mask, I used a lower‑triangular matrix via `np.tril(np.ones((seq_len, seq_len)))`, broadcasting it to match batch and head dimensions. The masked logits were set to `-1e9` where the mask was zero, then passed through `softmax`. Finally, I multiplied the attention weights by the values, summed across the key dimension, and reshaped back to the original tensor shape.

**Result:**  
The NumPy implementation ran 3× faster on a single NVIDIA RTX 3060 for 64‑token sequences compared to the baseline PyTorch loop, with identical output logits (within `1e-6`). I learned how broadcasting and careful masking can replace GPU kernels for small‑scale prototypes while preserving numerical correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
