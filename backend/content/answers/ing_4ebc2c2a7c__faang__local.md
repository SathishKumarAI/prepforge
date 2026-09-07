---
qid: ing_4ebc2c2a7c__faang__local
question: 'Explain: What does it take, memory-wise, to fine-tune a 7B model? Compare
  full fine-tuning, LoRA, and QLoRA.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 582
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:47:36-05:00'
sources: []
---

**Clarify**

You’re asking for the RAM required when you take a 7‑billion‑parameter transformer (≈ 28 GB of FP16 weights) and adapt it to a new task.  
Assumptions: *single GPU*, *FP16* base model, *no gradient checkpointing*, *typical micro‑batch size of 8*, *training for ~10 k steps*.  

**Approach**

1. Estimate the peak memory of each strategy (full fine‑tune vs LoRA vs QLoRA).  
2. Break it into components: base weights, optimizer states, activations, and auxiliary buffers.  
3. Compare numbers and explain trade‑offs.

**Depth**

| Strategy | Base FP16 weight ≈ 28 GB | Optimizer (Adam) ≈ 56 GB | Activations (≈ 2× batch × hidden size) | Total ≈ |
|----------|------------------------|-------------------------|---------------------------------------|---------|
| **Full FT** | 28 GB | 56 GB | ~12 GB | **~96 GB** |
| **LoRA (rank = 4)** | 28 GB + LoRA matrices (~0.1 GB) | 56 GB | ~12 GB | **~96 GB** – *no change* because optimizer still updates all weights |
| **QLoRA (int8 adapters)** | 28 GB | 56 GB | ~12 GB | **~96 GB** – *same memory* but lower compute and faster inference |

*Key difference*: LoRA/QLoRA reduce FLOPs and inference cost, not training RAM. Only the adapter matrices are small; optimizer still holds gradients for all parameters unless you use a “gradient‑free” scheme.

**Edge Cases**

- Very large batch sizes or hidden layers inflate activations → memory spikes.  
- Mixed‑precision (BF16) halves weight size but keeps optimizer overhead.  
- Gradient checkpointing can cut activations to 1–2 GB, drastically lowering peak RAM.

**Optimize & Communicate**

To truly lower training memory you’d need *optimizer‑parameter partitioning* or *sharded Adam*, reducing the optimizer from 56 GB to ~28 GB per device. That brings full FT down to ~70 GB. For LoRA/QLoRA, the same trick yields ~70 GB too.  

When explaining this to an interviewer: start with the raw numbers, highlight that LoRA/QLoRA mainly save compute and inference latency, then pivot to optimizer sharding as the real memory win, closing with a quick cost‑benefit table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
