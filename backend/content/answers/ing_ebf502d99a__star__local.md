---
qid: ing_ebf502d99a__star__local
question: 'Explain: Fully Sharded Data Parallel (FSDP): Nobody Holds Everything'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:53-05:00'
sources: []
---

**Situation** – At my last company we were training a transformer with 1.2 B parameters on 8 NVIDIA A100 GPUs. The model didn’t fit in GPU memory because each replica held a full copy of all weights, so we hit OOM after just two forward passes.

**Task** – I had to redesign the training pipeline so that each GPU only stored its own shard of the model while still keeping the backward pass efficient and the communication overhead minimal. The goal was to reduce peak memory by at least 70 % without sacrificing accuracy or training speed.

**Action** – I implemented Fully Sharded Data Parallel (FSDP) using PyTorch’s `torch.distributed.fsdp` module. First, I wrapped each submodule with `FSDP`, enabling automatic sharding of parameters and gradients across the 8 GPUs. Then I added gradient compression by quantizing gradients to 16‑bit before all‑reduce, which cut communication bandwidth by ~50 %. To avoid excessive synchronization, I used `mixed_precision=True` so only master copies were kept in FP32 while workers operated in BF16. Finally, I monitored memory with `torch.cuda.memory_summary()` and tweaked the `reshard_policy` to move shards only when necessary.

**Result** – The model now fits on each GPU with a 4‑GB buffer, reducing peak memory from ~48 GB to ~12 GB (75 % savings). Training time increased by just 8 %, and validation loss stayed within 0.002 of the baseline. I learned that sharding combined with smart communication strategies can unlock large‑scale models on modest hardware, and that careful profiling is key to balancing memory and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
