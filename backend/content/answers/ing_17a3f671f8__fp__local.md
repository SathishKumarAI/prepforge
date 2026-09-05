---
qid: ing_17a3f671f8__fp__local
question: 'Explain: Flash Attention — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 449
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:56:05-05:00'
sources: []
---

**Flash Attention – a principled acceleration of the soft‑max self‑attention**

The core problem is computing  
\[
\alpha_{ij}= \frac{\exp(q_i^\top k_j / \sqrt{d})}{\sum_l \exp(q_i^\top k_l/\sqrt{d})},
\qquad
z_i = \sum_j \alpha_{ij} v_j,
\]
for every query \(q_i\) in a sequence of length \(N\). Naïvely this is \(O(N^2 d)\), dominated by the dense matrix‑multiply and soft‑max over all pairs. The bottleneck lies not in arithmetic but in memory traffic: each query must access all keys/values, causing repeated loads that exceed cache bandwidth.

Flash Attention reformulates the computation as a *block‑wise* kernel on GPU:

1. **Chunking** – split the \(N\times N\) attention matrix into tiles of size \(B \times B\).  
2. **On‑the‑fly soft‑max** – compute max, sum, and output for a tile using only its \(B^2\) entries, never materializing the full \(N^2\) matrix.  
3. **Streaming** – each tile is streamed once from global memory into registers; the partial results are accumulated in shared memory before being written back.

This reduces memory traffic by a factor of \(\approx B\), matching the GPU’s compute‑to‑memory ratio and allowing peak utilization. The algorithm remains mathematically identical to standard attention because it preserves the row‑wise normalization and linear combination.

**Non‑obvious insight:**  
The speedup stems from *temporal locality* rather than raw parallelism. By keeping a tile in registers throughout its entire soft‑max life, Flash Attention turns the quadratic problem into \(O(N^2/B)\) memory passes—essentially converting an “access‑heavy” algorithm into a “compute‑heavy” one, which is precisely what modern accelerators are designed for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
