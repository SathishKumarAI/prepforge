---
qid: ing_abfe347b16__faang__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 557
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:53-05:00'
sources: []
---

**Clarify**  
We’re comparing *time‑to‑first‑token* (TTFT) and *tokens‑per‑second* (TPS) for an inference pipeline. TTFT is the latency until the model emits its first token; TPS is how many tokens it can produce per second once decoding has started. Key assumptions: single‑threaded vs multi‑threaded decoding, GPU/CPU mix, sequence length, and whether we use batching or streaming.

**Approach**  
1. Identify the dominant cost in the pipeline (embedding lookup, transformer layers, softmax).  
2. For TTFT, focus on *initial* forward pass latency: data transfer + first‑layer inference.  
3. For TPS, consider steady‑state throughput: per‑token compute time after warm‑up.  
4. Examine how batching and beam width affect each metric.

**Depth**  
- **TTFT** is bounded by the longest single‑token path: token embedding → all transformer layers → logits → sampling. It scales with model depth, hidden size, and hardware latency (e.g., GPU kernel launch overhead). For a 12‑B GPT‑style model on A100, TTFT ≈ 5–10 ms per token.  
- **TPS** is the reciprocal of per‑token compute time once warm‑up is done. It benefits from caching intermediate activations (e.g., past key/value tensors) and efficient attention kernels. For the same model, TPS can reach ~100–200 tokens/s on a single GPU.  

The ratio TTFT/TPS is high for very deep models or when the first‑token path incurs extra overhead (e.g., large embedding tables). Batching improves TPS linearly but has negligible effect on TTFT.

**Edge Cases**  
- Extremely short sequences: TTFT dominates, TPS irrelevant.  
- Beam search with width > 1: TTFT increases because multiple forward passes per token; TPS may not scale proportionally.  
- Mixed‑precision or quantization can reduce both metrics but may introduce latency spikes during calibration.

**Optimize & Communicate**  
To lower TTFT, pre‑warm GPU kernels and fuse embedding + first layer. For TPS, use efficient attention (flash-attn), keep past key/values in contiguous memory, and overlap I/O with compute. When explaining to interviewers, emphasize that TTFT is a one‑shot cost tied to hardware launch overheads, while TPS reflects amortized per‑token cost; both are driven by model size, precision, and implementation details. This clear separation shows deep understanding of inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
