---
qid: ing_d1d8563e59__star__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 360
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:17-05:00'
sources: []
---

**Situation:**  
At my previous company we were preparing to deploy a 7‑billion parameter transformer for a real‑time customer support chatbot. The only GPU available was an RTX 4090 with 24 GB of VRAM, and the team wanted to fine‑tune the entire model on our proprietary dataset before release.

**Task:**  
I had to determine whether full‑fine‑tuning would fit in memory, and if not, devise a workaround that preserved performance while staying within the 24 GB limit.

**Action:**  
First, I calculated the peak memory: each parameter (float32) uses 4 bytes, so 7B × 4 ≈ 28 GB just for weights. Adding activations, gradients, optimizer states, and batch overhead pushed total usage to ~70–80 GB. Realizing this was impossible, I switched to mixed‑precision (fp16) which halves weight storage to ~14 GB, but still left ~10 GB for runtime tensors. Then I applied gradient checkpointing on the transformer layers, trading compute for memory by recomputing activations during backward passes. Finally, I split the dataset into shards and used a 2‑GPU pipeline to offload part of the computation.

**Result:**  
The model trained successfully in under 48 hours with an average GPU utilization of 65 %. Accuracy dropped only 0.3% compared to a full‑precision run on a larger machine, and we avoided costly cloud GPU rentals. I learned that memory budgeting is as critical as algorithmic design when scaling large models on commodity hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
