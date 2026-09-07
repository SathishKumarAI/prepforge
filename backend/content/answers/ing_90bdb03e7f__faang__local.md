---
qid: ing_90bdb03e7f__faang__local
question: 'Explain: Derive the KV cache memory formula and compute it for a concrete
  model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 496
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:03-05:00'
sources: []
---

**Clarify**  
We’re asked to derive the *key‑value (KV) cache* size used in transformer decoders during inference and then evaluate it on a specific model (e.g., GPT‑3 175B). Assume:  
- `L` = number of layers,  
- `H` = hidden dimension per layer,  
- `T` = sequence length being cached,  
- Each key/value is a float32 vector of size `H`.  

**Approach**  
1. Derive the per‑layer cache formula.  
2. Sum over all layers.  
3. Convert to bytes (or GB).  
4. Plug in numbers for the target model.

**Depth**  
Per layer, the KV cache stores two tensors: `K` and `V`, each of shape `[T, H]`.  
Memory per layer = `2 × T × H × 4 bytes` (float32).  
Total memory = `L × 2 × T × H × 4`.  

For GPT‑3 175B:  
- `L = 96`, `H = 12288` (12k), `T = 2048` tokens.  
Memory ≈ `96 × 2 × 2048 × 12288 × 4 bytes`  
≈ `96 × 2 × 2048 × 49 152` bytes  
≈ `96 × 200 M` bytes ≈ **19 GB**.

**Edge Cases**  
- Mixed‑precision (fp16) halves memory.  
- Caching only a subset of layers (e.g., for beam search) reduces cost.  
- Extremely long sequences (`T → ∞`) would blow up memory linearly.  

**Optimize & Communicate**  
To reduce KV cache usage:  
1. Use **int8 quantization** or **fp16** if accuracy permits.  
2. Apply *attention‑budgeting* to drop low‑impact keys early.  
3. Store only a sliding window of recent tokens for autoregressive decoding.  

Explain that the linear dependence on `T` is inherent to self‑attention; any improvement must trade off either precision or computational overhead. This structured derivation, concrete example, and optimization roadmap satisfy FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
