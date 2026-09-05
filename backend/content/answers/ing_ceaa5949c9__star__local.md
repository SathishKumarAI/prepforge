---
qid: ing_ceaa5949c9__star__local
question: Explain QLoRA - NF4, double quantization, paged optimizers. What do you
  give up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 315
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:22-05:00'
sources: []
---

**Situation:**  
While working on a research‑grade language model for a startup’s chatbot, the team needed to run inference on an edge device with only 2 GB of VRAM but still deliver near‑real‑time responses.

**Task:**  
Reduce the model’s memory footprint from ~13 GB (FP16) down to under 3 GB without dropping more than 1.5 % in BLEU‑style quality, and keep training speed acceptable on a single GPU.

**Action:**  
I adopted QLoRA with NF4 for weights and double quantization for activations: first compress the full‑precision weights into 4‑bit NF4 format, then re‑quantize gradients to 8‑bit during fine‑tuning. I also switched from a standard Adam optimizer to a paged optimizer that stores only a subset of state tensors on GPU and spills the rest to CPU memory via CUDA page‑locked buffers. This meant we could keep the optimizer’s 4 × memory overhead in check while still benefiting from adaptive learning rates.

**Result:**  
The model fit comfortably on the edge device, inference latency dropped from 150 ms to 70 ms, and overall BLEU score fell by just 0.9 %. The trade‑off was a slight increase in training time (≈20 %) due to extra quantization steps, but we gained the ability to deploy at scale with minimal hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
