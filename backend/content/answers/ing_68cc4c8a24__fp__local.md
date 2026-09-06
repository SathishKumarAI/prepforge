---
qid: ing_68cc4c8a24__fp__local
question: 'Explain: Why is LLM decode memory-bandwidth-bound rather than compute-bound?
  Walk me through the numbers on an H100.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 459
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:16-05:00'
sources: []
---

**Why decoding a large language model is *memory‑bandwidth* bound**

The core of a transformer decoder is a single self‑attention layer that must be evaluated repeatedly for every generated token.  
For a model with hidden size \(H\) and sequence length \(L\), each head needs to read the query, key and value tensors (3 × \(HL\)) from memory, perform a dot product, then write the output (≈ \(HL\)).  
The *compute* requirement is only 2‑tensor multiplications per element (query·key) plus a few adds. On an NVIDIA H100, FP8 tensor cores can deliver ≈ 3 TFLOP/s per GPU, far exceeding what a single decoder step needs (≈ \(H^2\) operations).  

The *bandwidth* requirement is dominated by the 3× read and 1× write of \(HL\) elements.  
For GPT‑3‑175B on an H100:  
- \(H=12288\), \(L≈128\) → ≈ 1.57 M tokens per step, each token ≈ 16 bytes (FP8).  
- Reads = 3 × 1.57 M × 16 B ≈ **75 GB/s**; writes ≈ **25 GB/s**.  
The H100’s peak memory bandwidth is ~1550 GB/s, but the *effective* bandwidth for a single GPU in a distributed decode is throttled by PCIe interconnect (~12–20 GB/s per link). Thus the decoder stalls waiting for data, not floating‑point units.

**Non‑obvious insight:**  
During inference we reuse the same key/value tensors across many tokens; yet the *only* way to amortize this cost is to keep them in fast on‑device memory. When model size grows beyond a single GPU’s DRAM (≈ 80 GB for 175B), the interconnect bandwidth becomes the true bottleneck, not the compute capability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
