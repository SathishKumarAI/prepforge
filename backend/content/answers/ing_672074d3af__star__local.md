---
qid: ing_672074d3af__star__local
question: 'Explain: Capacity and Storage Estimation — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 362
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:07-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with scaling a conversational AI platform that had seen a 120% user growth in the past six months. Our existing infrastructure could serve only about 3,000 concurrent conversations before latency spiked.

**Task:**  
I needed to estimate both the model capacity required (GPU memory and compute) and the storage footprint for storing user logs, embeddings, and checkpoints so that we could provision resources on AWS without over‑paying or under‑delivering.

**Action:**  
First, I profiled a single inference pass of our transformer using PyTorch’s `torch.utils.bottleneck` to get peak GPU memory (~12 GB per model). Multiplying by the target concurrency (10,000 conversations) and adding 20% headroom gave us ~132 GB total VRAM. For storage, I sampled 1,000 conversation logs and calculated average token count (≈350 tokens), then multiplied by the size of each embedding vector (768 floats ≈ 3 KB). That yielded roughly 0.9 MB per log; scaling to projected daily traffic (~2 M logs) gave ~1.8 TB/day. Adding a 30‑day retention policy and compression overhead, I rounded to 60 TB total.

**Result:**  
The team provisioned 256 GB of GPU memory on spot instances and a 75 TB EFS pool, reducing average latency from 650 ms to 180 ms while keeping costs down by 18%. The exercise taught me the importance of micro‑profiling and realistic sampling for capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
