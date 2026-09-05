---
qid: ing_0a4439a0bf__star__local
question: 'Explain: ZeRO: The Dial Between DDP and FSDP — Behind the Scenes of Distributed
  Training and Why Your GPU Wiring Matters as Much as Your Strategy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 337
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:19-05:00'
sources: []
---

**Situation**  
During a large‑scale language model run on our 8‑GPU cluster, I noticed the memory usage ballooned after just two epochs, causing frequent OOM crashes even though each GPU had 24 GB of VRAM.

**Task**  
I needed to re‑engineer the training pipeline so that we could keep the batch size and learning rate unchanged while fitting the model on all GPUs without hitting memory limits.

**Action**  
First I profiled the tensor allocations with NVIDIA Nsight to confirm that gradient tensors were the culprit. Then I swapped from plain Distributed Data Parallel (DDP) to Fully Sharded Data Parallel (FSDP), which shards optimizer state and gradients across devices. To fine‑tune the trade‑off, I enabled ZeRO‑2 mode: optimizer states are sharded but gradients stay replicated for faster communication. I also re‑wired the GPUs into a 4‑by‑2 topology to match the NCCL ring layout, reducing inter‑card latency. Finally, I added gradient checkpointing on the transformer blocks and tweaked the batch scheduler to maintain pipeline overlap.

**Result**  
Memory consumption dropped from ~21 GB per GPU to ~13 GB, eliminating crashes. Training throughput improved by 18 %, and we achieved a final perplexity of 8.2 versus the previous 9.1 on the same dataset. I learned that the choice between DDP and FSDP, combined with careful GPU wiring, can unlock significant performance gains without changing model hyperparameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
