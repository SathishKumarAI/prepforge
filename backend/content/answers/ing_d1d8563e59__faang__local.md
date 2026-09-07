---
qid: ing_d1d8563e59__faang__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 495
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:48:20-05:00'
sources: []
---

**Clarify**  
You’re asking why a 7 B‑parameter model can’t be fully fine‑tuned on a single 24 GB GPU. The core issue is the *training memory footprint*—the sum of parameters, activations, gradients, optimizer states, and auxiliary tensors that must reside in device RAM during back‑prop.

**Approach**  
1. Estimate per‑parameter storage (float32 → 4 B).  
2. Add overhead for optimizer moments (Adam ≈ 8 B/param).  
3. Account for activations (≈ 5–10× the model size) and gradient buffers.  
4. Compare to 24 GB.

**Depth**  
- Parameters: 7 B × 4 B = **28 GB**.  
- Adam moments: 7 B × 8 B = **56 GB**.  
- Activations (forward pass): ~2–3× parameters → **≈ 70 GB**.  
Total ≈ 154 GB, far exceeding 24 GB. Even with mixed‑precision (float16) the memory halves but still > 30 GB for activations alone. Gradient checkpointing reduces activations to a fraction of this, yet optimizer states dominate.

**Edge Cases**  
- Using larger batch sizes inflates activation memory.  
- Switching to SGD (no moment buffers) helps but not enough.  
- Extremely aggressive quantization or pruning could reduce size below 24 GB, but at accuracy cost.

**Optimize & Communicate**  
1. **Gradient checkpointing** → drop activations to ~10–15 GB.  
2. **Optimizer state sharding** (e.g., LAMB with shard‑wise Adam) → lower per‑GPU memory.  
3. **Distributed training** across multiple GPUs or TPUs; each device handles a shard of the parameters and optimizer states.  
4. **Mixed‑precision + activation recomputation** to fit within 24 GB, accepting extra compute.

Explain that without such techniques the raw memory requirement dwarfs a single GPU’s capacity, which is why full fine‑tuning of a 7 B model on 24 GB is infeasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
