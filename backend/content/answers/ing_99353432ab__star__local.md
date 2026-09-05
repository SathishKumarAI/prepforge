---
qid: ing_99353432ab__star__local
question: 'Explain: Part 1: The Software: What Each GPU Holds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 381
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:05-05:00'
sources: []
---

**Situation**  
During a quarter‑end performance audit for our recommendation engine, the dev team noticed that training runs on the new RTX 3090 were taking 30 % longer than expected. I was asked to investigate why the GPU memory usage seemed higher than the model’s parameter count suggested.

**Task**  
I needed to dissect what exactly each GPU held during inference: the raw tensors, intermediate activations, optimizer states, and any caching layers. The goal was to identify unnecessary memory retention that could be pruned or offloaded without hurting throughput.

**Action**  
First, I used `nvidia-smi` and PyTorch’s `torch.cuda.memory_summary()` to capture a snapshot of resident memory per allocation. I then mapped each block back to its origin: the model weights (≈ 2 GB), gradient buffers for training (another 2 GB), but also an unexpected 1.5 GB blob from a custom caching allocator that kept all intermediate activations alive across batches because we’d disabled `torch.backends.cudnn.benchmark`. I rewrote the data pipeline to use `torch.utils.checkpoint` and switched to mixed‑precision (`fp16`) which cut the activation memory by 70 %. Finally, I set up a monitoring dashboard that flagged any allocation above a threshold.

**Result**  
GPU memory usage dropped from 9.5 GB to 4.8 GB per card, allowing us to run two models in parallel and cutting inference time from 1.2 s to 0.8 s— a 33 % speed‑up. I learned that a deep understanding of GPU residency layers is essential for scaling AI workloads, and that tooling plus careful memory hygiene can unlock significant performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
