---
qid: ing_bf6c96650d__faang__local
question: 'Explain: Estimate the KV-cache memory for serving Mistral 7B, and design
  the rolling-buffer cache that sliding-window attention enables.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 533
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:16-05:00'
sources: []
---

**Clarify**  
We’re asked to (1) estimate how much KV‑cache memory a 7 B‑parameter Mistral model needs when serving, and (2) sketch the rolling‑buffer cache that underpins sliding‑window attention. I’ll assume a single GPU with 24 GB RAM, batch size = 1, and that we only keep past keys/values for the current sequence.

**Approach**  
* Compute per‑token KV memory:  
  * Hidden dim ≈ 4096 (≈ 7B / 64 heads).  
  * Key/value each = hidden dim × float32 → 16 KB.  
  * Two tensors per head → 32 KB per head.  
* Aggregate over all heads, then multiply by the window size we plan to keep.

**Depth**  
- **Per‑token KV memory**: 4096 × 4 bytes ≈ 16 kB for key or value; two give 32 kB.  
- **Total per token**: 32 kB × heads (64) = 2 MB.  
- **Window size**: Sliding‑window attention typically keeps 512 tokens.  
- **Cache footprint**: 2 MB × 512 ≈ **1 GB**.  
- This fits comfortably in a 24 GB GPU while leaving room for activations, gradients, and model weights.

The rolling‑buffer cache is a circular buffer indexed by token position modulo the window size. When a new token arrives:
1. Compute its KV vectors.  
2. Write them into the buffer slot `pos % window`.  
3. During attention, read only the last *window* entries; older slots are overwritten automatically.

**Edge cases**  
- **Longer sequences**: exceed window → need checkpointing or hierarchical caching.  
- **Multiple batches**: buffer must be per‑sequence to avoid cross‑contamination.  
- **Precision changes**: FP16 halves memory but doubles bandwidth; mixed precision may require scaling factors.

**Optimize & communicate**  
We could compress keys/values (e.g., 8‑bit quantization) to reduce the 1 GB to ~250 MB, trading off a tiny accuracy hit. For clarity I’d diagram the circular buffer and annotate memory usage per slot during a walkthrough of token insertion and attention read.

---  

**Word count: 212**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
