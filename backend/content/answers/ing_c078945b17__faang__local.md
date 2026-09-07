---
qid: ing_c078945b17__faang__local
question: 'Explain: Algorithm Comparison — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 583
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:24-05:00'
sources: []
---

**Clarify**  
We’re asked to compare *vector‑database* algorithms—essentially the ways we index and retrieve high‑dimensional vectors (e.g., embeddings). I’d confirm whether the focus is on exact vs approximate nearest neighbor (ANN), what dimensionality/scale matters, and if GPU acceleration or distributed setups are in scope.

**Approach**  
1. List major families: Brute force, KD‑trees, Ball‑trees, Product Quantization (PQ), Hierarchical Navigable Small World (HNSW), IVF+PQ, Annoy, FAISS, Milvus, etc.  
2. For each, note index construction cost, query latency, memory footprint, and accuracy trade‑off.  
3. Highlight key metrics: recall@k, MIPS (million inner‑product searches/sec), build time.

**Depth**  
- **Brute force** gives 100 % recall but O(N·D) per query; infeasible beyond millions of vectors.  
- **Tree‑based** (KD/Ball) suffer from the “curse of dimensionality” once D>30.  
- **PQ / IVF‑PQ** compress vectors into short codes, enabling sub‑linear search with ~80–95 % recall at 10× memory savings. FAISS’s IVF+PQ is industry standard for large‑scale ANN.  
- **HNSW** builds a graph where each node connects to near neighbors; offers state‑of‑the‑art recall@k (~99 %) with sub‑linear time, but higher index build cost and memory overhead than PQ.  
- **GPU‑accelerated** (FAISS GPU, Milvus) push MIPS into billions per second by batching and SIMD/warp execution, at the expense of GPU memory limits.

**Edge Cases**  
- Extremely high dimensions (>1024) make tree structures useless; rely on ANN.  
- Dynamic updates: PQ needs re‑encoding; HNSW supports incremental insertion but can degrade connectivity.  
- Cosine similarity vs Euclidean distance requires different metric handling (e.g., L2‑norm normalization for cosine).

**Optimize & Communicate**  
For a production search service, I’d start with FAISS IVF+PQ for bulk indexing, then layer an HNSW re‑ranking pass to boost recall. Profile latency, memory, and throughput; iterate on `nlist` (coarse clusters) and PQ codebook size. Explain trade‑offs clearly: “We sacrifice 5 % recall to cut query time by 3×, which is acceptable for our ranking pipeline.” This structured narrative shows I can balance algorithmic rigor with system constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
