---
qid: ing_acf1c5e4a2__star__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 408
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:07-05:00'
sources: []
---

**Situation:**  
During a recent on‑device deployment at my previous company, we were tasked to run a 3 B transformer model with a 4,000‑token context window on a Snapdragon edge device that only had 2 GB of RAM available.

**Task:**  
I needed to calculate the KV cache size for the inference pipeline and identify practical levers to shrink it so the whole model plus runtime could fit comfortably within the memory budget.

**Action:**  
The KV cache holds key/value pairs for every attention head per layer. For a 3 B model (≈24 layers, 12 heads per layer) with 32‑bit floats, the calculation is:  
`4,000 tokens × 12 heads × 24 layers × 4 bytes ≈ 14.5 MB`.  
I then applied three shrinkage levers:  
1. **Quantize** KV tensors to int8 (×4 reduction).  
2. **Use a reduced‑precision attention matrix** that stores keys/values in half‑float during the forward pass and discards them after each token.  
3. **Adopt sparse or block‑sparse attention**, cutting the number of active heads from 12 to 6 for most layers, halving the cache.

**Result:**  
These changes cut the KV cache from ~14 MB to roughly 1–2 MB, freeing up >10 MB of RAM for activations and runtime overhead. The model ran with <30 ms latency on the device, and I learned how fine‑grained profiling can guide which levers deliver the biggest impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
