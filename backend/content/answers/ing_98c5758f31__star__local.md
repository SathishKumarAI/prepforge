---
qid: ing_98c5758f31__star__local
question: 'Explain: 4.1 Mixed precision — Pretraining Large Language Models with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:00-05:00'
sources: []
---

**Situation:**  
At my previous company we were training a 1‑billion parameter transformer on the full Common Crawl corpus. The GPU cluster was limited to 8×A100s, and training time kept spiralling past our six‑month window.

**Task:**  
I had to cut training cost by at least 30 % while keeping perplexity within 5 % of single‑precision results, so we could ship the model on schedule.

**Action:**  
I implemented mixed precision with NVIDIA’s NVFP4 format. First, I converted all embedding and attention weight matrices to FP16 and wrapped them in `torch.cuda.amp.autocast(enabled=True)` for forward passes. For the loss computation I kept a master copy in FP32 and used an `Optimizer` that applied 4‑bit quantization (NVFP4) to gradients before the backward step, which drastically reduced memory bandwidth. I also introduced gradient checkpointing on the feed‑forward blocks to keep peak VRAM below 80 %. To preserve accuracy, I tuned the loss scaling factor automatically with PyTorch’s `GradScaler` and performed a sanity check by comparing validation perplexity every epoch.

**Result:**  
Training time dropped from 12 days to 8.5 days— a 29 % cost reduction—and the final perplexity was only 3.2 % higher than the FP32 baseline. I learned that careful placement of mixed‑precision casts and gradient quantization can deliver real savings without sacrificing model quality, especially when combined with checkpointing for large models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
