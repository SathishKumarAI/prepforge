---
qid: ing_862bab656a__star__local
question: 'Explain: Size the KV cache for a 70B-class model and explain how paged
  KV cache management works and why it exists.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 354
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:18-05:00'
sources: []
---

**Situation:**  
At my last role I was part of a research team building a 70 B‑parameter transformer for real‑time dialogue generation. The baseline inference pipeline used the standard on‑device KV cache and quickly hit memory limits on our GPU cluster (24 GB per node).

**Task:**  
I needed to estimate how large a KV cache would be required to run full‑context inference without swapping, design a paging strategy, and integrate it so that latency stayed below 150 ms per token.

**Action:**  
First I profiled the model: each key/value pair is 16 bytes (FP32) for a single head; with 128 heads that’s 2 KB per token. For 1 k tokens of context we need ~2 GB just for KV. To support longer dialogues I added a **paged KV cache**: only the most recent 256 tokens stay resident in fast GPU memory, while older pages are serialized to NVMe with an LRU eviction policy. We used PyTorch’s `torch.ops` to map page tables and zero‑copy copy back on demand. The paging layer also compressed values via quantization (int8) when off‑loaded.

**Result:**  
The paged KV cache reduced GPU memory usage from 24 GB to ~6 GB, allowing us to run the full model on a single node while keeping token latency at 140 ms. We processed 3× more concurrent sessions and learned that careful page sizing (token count vs. head size) is critical for balancing throughput and memory footprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
