---
qid: ing_e9b3c1c9ed__star__local
question: 'Explain: Disk vs. VRAM Caching — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 392
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:36-05:00'
sources: []
---

**Situation:**  
At my last company we were deploying a GPT‑style model for real‑time customer support on edge devices with limited GPU memory. The latency had to stay under 200 ms per user query, but the model’s context window was 4 k tokens, which meant the KV cache alone would need ~6 GB of VRAM—far beyond what our GPUs offered.

**Task:**  
I needed to design a caching strategy that kept inference fast while fitting within the hardware limits. The goal was to keep the most useful key‑value pairs in GPU memory and offload the rest efficiently, without adding more than 30 ms of extra latency.

**Action:**  
First, I profiled the KV cache usage per token and identified a “hot” subset: the last 1 k tokens accounted for ~85 % of attention scores. I kept that hot subset in VRAM and implemented a disk‑based tiered cache using NVMe SSDs with mmap‑backed buffers. For context caching, I serialized past hidden states every 512 tokens and stored them on disk; during inference I streamed only the needed slice back into GPU memory on demand. I also added a small LRU policy to keep the most frequently accessed disk blocks in RAM for quick access.

**Result:**  
The hybrid cache reduced VRAM usage from 6 GB to 1.5 GB, keeping latency at ~180 ms per query—well below our target. Disk read times were amortized across batches, adding only 10 ms on average. I learned that a carefully tiered cache, combined with profiling‑driven hot‑data selection, can bridge the gap between limited GPU memory and large context windows in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
