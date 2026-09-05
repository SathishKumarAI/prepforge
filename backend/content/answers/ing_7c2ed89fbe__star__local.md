---
qid: ing_7c2ed89fbe__star__local
question: Explain arithmetic intensity and the roofline model as applied to LLM inference.
  Why does batching improve decode throughput so dramatically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 312
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:16-05:00'
sources: []
---

**Situation** – I was leading performance tuning for a production LLM serving platform at a cloud startup. Our single‑token inference latency averaged 180 ms, and the API SLA required sub‑100 ms for high‑traffic periods.

**Task** – Reduce per‑token decode time while keeping GPU utilization high, so we could serve more requests without adding hardware.

**Action** – I applied the roofline model: I measured arithmetic intensity (FLOPs per byte of memory traffic) for our transformer kernels and plotted them against the GPU’s peak compute and memory bandwidth. The plot showed we were memory‑bound—our kernels had low arithmetic intensity (~0.5 FLOP/byte). To shift towards the compute roof, I refactored the decoding loop to batch multiple token requests into a single kernel launch, increasing data reuse (cached key/value tensors) and raising arithmetic intensity to ~2 FLOPs/byte. I also tuned cuBLAS GEMM settings and swapped out slower softmax implementations.

**Result** – Batching 32 concurrent queries raised throughput from 5 tokens/s per GPU to 48 tokens/s, a 9× speed‑up, and reduced average latency to 90 ms. The exercise taught me that for LLM inference, batching is not just about parallelism—it’s about moving the workload into the compute‑roof region of the roofline, dramatically improving decode throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
