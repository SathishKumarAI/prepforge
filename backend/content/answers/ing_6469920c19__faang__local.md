---
qid: ing_6469920c19__faang__local
question: 'Explain: Bottlenecks: Compute-Bound vs. Memory-Bound'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 582
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:37:43-05:00'
sources: []
---

**Bottlenecks in AI: Compute‑Bound vs. Memory‑Bound**

| **Aspect** | **Compute‑Bound** | **Memory‑Bound** |
|------------|------------------|------------------|
| *Definition* | Performance limited by FLOPs or GPU clock speed. | Limited by data movement (bandwidth, latency) between memory hierarchies and compute units. |
| *Typical Symptoms* | Underutilized cores; high power draw; low throughput despite plenty of bandwidth. | High cache miss rates; stalls in the pipeline waiting for data; good core utilization but low effective FLOPs. |
| *Common Sources* | Large matrix multiplications, deep convolutions, insufficient parallelism. | Huge tensors that exceed L2/L3 caches; frequent stride‑1 memory accesses; poor tiling/blocking. |

### 1️⃣ Clarify
We need to differentiate when an AI workload is throttled by arithmetic capability versus data movement, and identify diagnostic signs.

**Assumptions to confirm**
- Architecture (CPU vs GPU vs TPU).
- Batch size, model depth, tensor shapes.
- Memory hierarchy details (cache sizes, interconnect bandwidth).

### 2️⃣ Approach
1. Profile the pipeline: use counters for FLOPs, cache misses, memory throughput.  
2. Compare utilization curves: compute units vs. memory bus.  
3. Map hotspots to code sections or kernel launches.

### 3️⃣ Depth
- **Compute‑Bound**: When `GFLOPs / second` ≈ device peak but overall latency is high → focus on algorithmic parallelism, fused kernels, better use of tensor cores. Complexity often O(n²) for dense ops; can reduce to O(n log n) via FFT or Winograd.
- **Memory‑Bound**: When `Bandwidth (GB/s)` saturates early, while compute units idle. Optimize by blocking tensors into cache‑friendly tiles, using half‑precision (`FP16`) or quantization, and aligning data for coalesced accesses.

### 4️⃣ Edge Cases
- *Compute‑Bound*: Extremely small batch sizes; models with many tiny layers.  
- *Memory‑Bound*: Models with irregular sparsity patterns causing non‑coalesced reads. Test by varying batch size, precision, and kernel tiling.

### 5️⃣ Optimize & Communicate
Explain that the goal is to **balance** the two: reduce compute intensity where memory dominates, or increase data reuse when compute dominates. Present trade‑offs (e.g., FP16 reduces precision but halves bandwidth). Conclude with a clear recommendation: start profiling, identify the dominant bottleneck, then apply targeted optimizations.

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
