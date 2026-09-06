---
qid: ing_936defd7da__fp__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 653
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:41-05:00'
sources: []
---

### From the ground up: why do we need three different index families?

At its core an approximate nearest‑neighbour (ANN) search trades **accuracy** for **efficiency**.  
The *recall* is how many of the true k‑NNs we recover; *latency* is the query time; and *memory* is the storage overhead beyond the raw vectors.

| Index | Underlying idea | Recall‑vs‑Latency‑vs‑Memory |
|-------|-----------------|-----------------------------|
| **HNSW** (Hierarchical Navigable Small World) | Build a layered graph where each node points to “near” neighbours. Queries start at the top layer and perform greedy descent, then backtrack locally. The graph is *sparse* yet highly connected thanks to the small‑world property. | **Recall:** very high even for tiny graphs (≈95 %+). <br>**Latency:** logarithmic in dataset size; few hops per query (~10–20). <br>**Memory:** O(N log N) edges; each edge is a 32‑bit index → ≈4 bytes/edge. |
| **IVF** (Inverted File Index) | Partition the space into *centroids* (k‑means clusters). Each vector is assigned to its nearest centroid and stored in that bucket. Queries first locate the closest centroids, then scan a few buckets linearly. | **Recall:** depends on *nprobe* (number of visited buckets); high recall requires many probes. <br>**Latency:** dominated by bucket scans; linear in the number of vectors per bucket. <br>**Memory:** centroid table + raw vectors; negligible overhead if only pointers are stored. |
| **PQ** (Product Quantization) | Split each vector into *m* sub‑vectors and quantize each with a small codebook (2⁶–2¹ codes). Distance is approximated by lookup tables, enabling compression to 1–4 bytes per sub‑vector. | **Recall:** improves as *m* decreases (more bits per sub‑vector) but saturates for very fine quantization. <br>**Latency:** dominated by table lookups; extremely fast once tables are cached. <br>**Memory:** huge compression: 128‑bit vectors → ~4 bytes after PQ. |

#### Non‑obvious insight
The **recall plateau** of IVF+PQ arises from *product quantization* acting as a *probabilistic sketch*: it reduces variance in distances only up to the granularity of the subspaces. Beyond that, additional probes or larger codebooks bring diminishing returns—because the error is dominated by the *quantization noise*, not the search procedure. Thus, for very large datasets, investing in a **hierarchical graph (HNSW)** can be more efficient than simply refining IVF+PQ parameters: the graph’s adaptive traversal adapts to data geometry while keeping memory growth modest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
