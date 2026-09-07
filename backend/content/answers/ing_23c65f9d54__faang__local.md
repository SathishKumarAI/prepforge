---
qid: ing_23c65f9d54__faang__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 518
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:19-05:00'
sources: []
---

**Clarify**  
We’re asked to *estimate* the key‑value (KV) cache memory needed when running a large transformer (e.g., LLaMA‑70B) for inference and then explain how that size limits batch size and throughput. Key assumptions:  
- Model has 32 layers, each with a single head of dimension dₖ=64;  
- Hidden size per token ≈ 4096;  
- Sequence length (max context) ≈ 2048 tokens;  
- Each KV pair is stored as two 16‑bit half‑precision tensors.  

**Approach**  
1. Compute memory for one layer’s KV cache per token.  
2. Multiply by layers, tokens, and batch size.  
3. Relate total cache footprint to GPU RAM to infer max batch size.  
4. Discuss how throughput (tokens/sec) is inversely affected by larger caches.

**Depth**  
- One KV pair per head: 2048 × 64 = 131 k elements; two heads → 262 k elements.  
- Half‑precision (2 bytes): 262 k × 2 ≈ 0.5 MiB per layer per token.  
- Across 32 layers: 0.5 MiB × 32 ≈ 16 MiB per token.  
- For a sequence of 2048 tokens: 16 MiB × 2048 ≈ 32 GiB total KV cache for one example.  
- With an NVIDIA A100 (40 GiB), only ~1–2 examples fit; batch size = 1 is typical.  

**Edge Cases**  
- Using FP32 doubles memory → batch = 0.  
- Mixed‑precision or quantized KV reduces per‑token cost by 4×, allowing batch ≈ 4.  
- Longer sequences (e.g., 4096 tokens) double the cache, halving feasible batch size.

**Optimize & Communicate**  
To increase throughput:  
1. Reduce sequence length via prompt truncation or sliding windows.  
2. Cache reuse across batches (same context).  
3. Employ KV compression (quantization, sparsity).  
Explain that memory‑bound inference trades off latency for batch throughput; understanding the KV footprint lets us pick hardware and batching strategy to meet SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
