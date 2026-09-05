---
qid: ing_3b58d5516f__fp__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 375
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:10:55-05:00'
sources: []
---

**Flat Index (Brute‑Force Search)**  
At its core a vector database must answer *nearest‑neighbour* queries: given a query vector \(q\), find the stored vectors whose distance to \(q\) is minimal. The “flat” or brute‑force index simply keeps all vectors in memory and, for each query, evaluates every distance.  

Why this works?  
- **Exactness**: Distance is a deterministic function; scanning all candidates guarantees that no better neighbour can be missed.  
- **Simplicity of geometry**: In high dimensions the “curse of dimensionality” makes any partitioning (k‑d trees, ball trees) collapse into trivial structures; brute‑force remains asymptotically optimal for many realistic workloads where the number of vectors \(N\) is modest or query latency must be deterministic.  
- **Parallelism**: Modern CPUs/GPUs can compute billions of dot products per second; vectorised SIMD or GPU kernels turn the naïve \(O(Nd)\) operation into a highly parallel, low‑latency pipeline.

Non‑obvious insight: *The bottleneck is not memory access but arithmetic precision.*  
Because each distance involves many floating‑point operations, using reduced‑precision formats (e.g., 16‑bit floats or int8 quantisation) can halve the compute load without hurting ranking accuracy, turning an \(O(Nd)\) brute force into a *fast* exact search.  

Thus, flat indexing is a principled baseline: it solves the optimisation problem exactly by exhaustive evaluation, leveraging modern hardware to keep latency low while providing perfect recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
