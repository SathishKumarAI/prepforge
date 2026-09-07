---
qid: ing_acf1c5e4a2__faang__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 518
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:42-05:00'
sources: []
---

**Clarify**  
You’re asking how much RAM an on‑device transformer with **3 billion parameters** would need for a **KV cache** when generating text up to **4 k tokens**.  I’ll assume:  

- The model uses *standard* multi‑head self‑attention (no flash/rope tricks).  
- Each key/value vector is the same size as the hidden dimension (`d_model`).  
- We store keys and values separately in float32.  

**Approach**  
1. Compute `d_model` from parameter count.  
2. Multiply by number of tokens, heads, and 2 (KV).  
3. Convert to megabytes.  

**Depth**  

| Step | Calculation |
|------|-------------|
| Parameters → hidden size | 3 B ≈ 12×`d_model`² ⇒ `d_model` ≈ √(3 B/12) ≈ **1,000** (≈ 1024). |
| KV per token | `2 × d_model × num_heads`. For 16 heads: `2 × 1,024 × 16 = 32,768` floats. |
| Cache for 4 k tokens | `32,768 × 4,096 ≈ 134 M` floats. |
| Memory (float32) | `134 M × 4 B ≈ **508 MB**`. |

So a vanilla KV cache would need ~0.5 GB of RAM.

**Edge cases**  
- If the model uses *int8* or *fp16*, memory halves or quarters.  
- Larger context (e.g., 8 k) doubles the requirement.  
- Using *RoPE/flash‑attention* reduces per‑token KV size by ~2×.  

**Optimize & communicate**  
Levers to shrink cache:  

1. **Quantization** – int8 or fp16 keys/values cut memory 4×–2×.  
2. **Cache pruning** – discard or compress older tokens (e.g., sliding window).  
3. **Efficient attention** – flash‑attention, linear kernels reduce per‑token KV size.  
4. **Mixed precision** – keep only a subset of heads in full precision.  

I’d present this calculation to show my grasp of transformer internals and immediately suggest practical knobs that align with device constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
