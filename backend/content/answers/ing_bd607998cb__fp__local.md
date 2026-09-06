---
qid: ing_bd607998cb__fp__local
question: 'Explain: Q99: You''re deploying a high-throughput inference service for
  an open-weight model. Pick between vLLM, SGLang, and TensorRT-LLM for a specific
  workload and defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 512
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:46:12-05:00'
sources: []
---

**Choosing the right inference engine for a high‑throughput, open‑weight LLM boils down to three constraints: (1) batch size vs. latency, (2) memory footprint, and (3) support for model parallelism.**

| Engine | Strengths | Weaknesses |
|--------|-----------|------------|
| **vLLM** | *Dynamic batching* + *efficient KV cache reuse* → 10–30× speedup at medium batch sizes; easy integration with PyTorch checkpoints. | Limited GPU‑to‑GPU communication, no native tensor‑parallel support. |
| **SGLang** | *Zero‑copy inference* + *on‑the‑fly quantization* → minimal memory overhead for very large models (30–70B); supports 8‑bit/4‑bit precision out of the box. | Batch‑size scaling less aggressive; higher engineering effort to wrap custom kernels. |
| **TensorRT‑LLM** | *Explicit tensor‑parallel* + *GPU‑specific optimizations* → best throughput for multi‑GPU setups and small batch sizes (≤8). | Requires TensorRT build, less flexible with non‑standard model architectures. |

### For a **medium batch size (32–64) inference service on 8×A100 GPUs**  
**vLLM** wins: its dynamic batching keeps GPU utilization high while keeping KV cache memory manageable; the model fits entirely on each GPU without tensor‑parallelism, so you avoid the complexity of distributed communication. The resulting throughput (~50k tokens/s per GPU) far exceeds what SGLang or TensorRT‑LLM can deliver under the same batch regime.

### Non‑obvious insight  
The *latent variable* is not just batch size: **the shape of the KV cache dominates memory pressure**. vLLM’s algorithmic reuse of cache rows across prompt‑tokens amortizes the per‑token memory cost, enabling higher throughput without spilling to host RAM—something even TensorRT‑LLM can’t compensate for if you’re constrained by a single GPU’s 40 GB limit.

*Bottom line:* pick **vLLM** for medium batch high‑throughput workloads; reserve **SGLang** for gigantic models that exceed a single GPU’s memory, and **TensorRT‑LLM** when you need absolute peak performance on tightly coupled multi‑GPU systems with minimal latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
