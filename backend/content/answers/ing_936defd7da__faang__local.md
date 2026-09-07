---
qid: ing_936defd7da__faang__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 664
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:07-05:00'
sources: []
---

**Clarify**  
We’re comparing three ANN indexing strategies—Hierarchical Navigable Small World (HNSW), Inverted File (IVF) + coarse quantization, and Product Quantization (PQ)—in terms of *recall*, *latency* and *memory*. Assume a fixed dataset size, dimensionality, and query budget; we’ll treat the trade‑offs at typical parameter settings.

**Approach**  
1. Summarize each method’s core idea.  
2. List how recall depends on index parameters (layers/edges for HNSW, clusters for IVF, codebook size for PQ).  
3. Map latency to traversal cost and distance computations.  
4. Quantify memory as number of stored vectors or compressed codes.

**Depth**  

| Method | Recall | Latency | Memory |
|--------|--------|---------|--------|
| **HNSW** | Very high (≈0.95+ at 1% recall loss) because the graph is traversed with a greedy search; recall improves linearly with `efSearch`. | Low–medium: each hop touches one vector, so latency ≈ *O(log N)* hops + few distance evals. | High: stores full vectors for all nodes plus adjacency lists (≈ 2×‑3× raw data). |
| **IVF** | Moderate (≈0.80–0.90) depending on cluster count `K`; recall drops sharply if too few clusters. | Low: look up one inverted list, then linear scan of its members; latency ≈ *O(N/K)*. | Medium: stores a centroid per cluster + pointers to vectors; memory ≈ raw data / K plus centroids. |
| **PQ** | Moderate–high (≈0.85–0.95) with enough sub‑quantizers (`M`) and bits per subcode; recall degrades if quantization error is high. | Low: distance via precomputed lookup tables, no full vector evals; latency ≈ *O(M)*. | Very low: only compressed codes (≈ `N * M * bits_per_subcode / 8`). |

**Edge cases**  
- **Tiny datasets**: HNSW’s graph overhead dominates; IVF/PQ may under‑perform due to insufficient training data for centroids/codebooks.  
- **High dimensionality (>512)**: PQ’s quantization error explodes; IVF cluster centers become ineffective.  
- **Memory constraints**: HNSW cannot scale beyond millions of vectors without pruning edges.

**Optimize & Communicate**  
For production workloads, start with IVF+PQ (fast, cheap memory) and tune `K`, `M`, bits to hit target recall. If latency is critical and budget allows, add a small HNSW overlay on the top‑ranked candidates for final re‑ranking—this hybrid approach leverages HNSW’s high recall with IVF/PQ’s speed. In any proposal, I’d present benchmark curves (recall vs. memory) to justify parameter choices and show how incremental changes shift the trade‑off curve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
