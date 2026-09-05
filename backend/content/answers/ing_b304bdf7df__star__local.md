---
qid: ing_b304bdf7df__star__local
question: 'Explain: 2 NVFP4 Format — Pretraining Large Language Models with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 360
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:46-05:00'
sources: []
---

**Situation**  
At my last company we were launching a new LLM pipeline and our GPU cluster was bottlenecked by the 16‑bit FP16 precision we used for training. The model size (350M parameters) required over 200 GB of memory per node, so we had to shard tensors across 8 GPUs.

**Task**  
I needed to find a way to reduce per‑GPU memory while keeping throughput high and without sacrificing accuracy during pretraining.

**Action**  
I introduced the NVFP4 (NVidia Float 4) format. It packs two 16‑bit FP32 numbers into a single 8‑byte word by representing each as an 8‑bit mantissa with a shared exponent, effectively giving us 12 bits of precision per value. I rewrote the embedding and transformer layers to perform mixed‑precision arithmetic: weights were stored in NVFP4 on disk, loaded into FP32 during forward/backward passes, then cast back to NVFP4 for checkpointing. I also added a dynamic scaling routine that monitored gradient norms and adjusted the shared exponent per layer to minimize overflow.

**Result**  
Memory usage dropped from 200 GB to 140 GB per node (30% reduction), allowing us to train on the same hardware in 18 hours instead of 24. Validation perplexity stayed within 0.5% of our FP16 baseline, and we saved roughly $2K/month in cloud GPU costs. I learned that careful numeric representation can unlock significant efficiency gains without touching model architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
