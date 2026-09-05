---
qid: ing_6537c0dbca__star__local
question: Estimate the KV-cache memory to serve a 70B-class model at 128k context.
  What do you do when it doesn't fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 435
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:05-05:00'
sources: []
---

**Situation** – At my last company I was tasked with deploying a 70 B parameter LLM for an internal knowledge‑base chatbot that required up to 128 k tokens of context per request. The production environment had only 48 GB of RAM on each GPU node.

**Task** – Estimate the KV‑cache footprint and design a strategy if it exceeded available memory, ensuring sub‑second latency for real‑time inference.

**Action** – I started by calculating the cache size:  
- Each token produces two key/value vectors per transformer layer (128 B each).  
- With 70 B parameters we have roughly 90 layers.  
- So per token: 2 × 128 B × 90 ≈ 23 KB.  
For 128k tokens that’s ~3 GB, but this is only the *per‑token* cost; the actual KV cache scales with sequence length and batch size. I then profiled a typical request (batch=1, seq=128k) on an A100: it consumed ~36 GB of GPU RAM for the KV cache alone, leaving no headroom.

To resolve this, I implemented **paged KV caching** using NVIDIA’s `TensorRT-LLM` plugin. The cache was partitioned into 8‑KB pages and swapped out to host DRAM when GPU memory was exhausted. I also introduced a *dynamic context window* that shrinks the cached portion based on user activity, dropping inactive tokens after 30 seconds of inactivity. This reduced peak GPU usage to ~28 GB, keeping latency under 250 ms.

**Result** – The system now runs within the 48 GB budget with <300 ms inference time for most queries, and we’ve seen a 15% improvement in throughput over the baseline. I learned that accurate memory estimation is just the first step; adaptive paging and context pruning are essential when scaling massive models to long‑context workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
