---
qid: ing_dae2d3ae2e__faang__local
question: 'Explain: You want to serve a 70B-parameter model on a single 80 GB GPU.
  Walk me through whether it fits and what single-stream tokens/sec you''d expect.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 572
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:22-05:00'
sources: []
---

**Clarify**  
We need to determine if a 70 B‑parameter transformer can be loaded into an 80 GB GPU, then estimate its throughput (tokens per second) on a single “stream” (one inference pass).  
Assumptions to confirm:  
- Each parameter is stored as FP16 (2 bytes) or BF16; we’ll assume FP16 for safety.  
- Model includes embeddings, multi‑head attention, FFN layers, plus optimizer buffers if needed.  
- Token sequence length will be typical (≈128 tokens).  

**Approach**  
1. Compute raw parameter memory: 70 B × 2 bytes ≈ 140 GB.  
2. Add overhead for activations, layer‑norm buffers, and a safety margin (~10–20 %).  
3. Compare total to 80 GB; if exceeded, consider sharding or mixed‑precision.  
4. If it fits, estimate FLOPs per token (≈3× #params for forward pass) → ~210 B FLOPs/token.  
5. Use GPU peak FP16 throughput (~12 TFLOP/s on A100).  
6. Compute tokens/sec = 12 TFLOP/s ÷ 210 GFlop ≈ 57 tokens/s (single stream).

**Depth**  
- **Memory:** 70 B × 2 bytes = 140 GB > 80 GB → *does not fit* on a single GPU. Even with BF16 (1 byte) we get 70 GB plus overhead, still tight but possible if aggressively sharded.  
- **Throughput (if sharded):** With 12 TFLOP/s peak and 210 GFlop per token → ~57 tokens/s; real‑world is lower (~30–40 tokens/s) due to memory bandwidth limits and kernel launch overhead.

**Edge Cases**  
- Longer sequences increase activation memory linearly, potentially breaking fit.  
- Using FP8 or sparsity could reduce size but complicates kernels.  
- Batch size >1 would further strain memory and latency.

**Optimize & Communicate**  
Explain that to serve 70 B on a single GPU we must either:  
1. Split the model across multiple GPUs (tensor/model parallelism).  
2. Reduce precision to BF16 or use quantization, trading accuracy for fit.  
When presenting, highlight the memory bottleneck first, then show throughput calculation, and conclude with practical deployment options. This demonstrates clear problem framing, methodical analysis, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
