---
qid: ing_037d83f40e__faang__local
question: 'Explain: ANN index: structure, memory math, ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 609
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:08-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Describe how an Artificial Neural Network (ANN)‑based vector index is built for semantic search – its data structure, memory usage, and the operations performed at query time.  
*Assumptions to confirm:*  
- Feature vectors are fixed‑dimensional dense embeddings (e.g., 768‑D).  
- Index size fits in RAM; no GPU acceleration required.  
- Query latency target < 10 ms on a single node.

**2️⃣ Approach**  
1. Pre‑compute embeddings for all documents.  
2. Store them in an *inverted‑array* style flat table (row‑major).  
3. Build a *product quantization (PQ)* or *HNSW* graph to accelerate nearest‑neighbor search.  

**3️⃣ Depth**  
- **Structure:**  
  - `embedding_matrix[doc_id][dim]` – float32 → 4 bytes per value.  
  - For 1M docs, 768 dims: 1 M × 768 × 4 B ≈ 2.9 GB.  
  - PQ reduces memory by representing each vector with two codebooks (e.g., 8‑bit codes) → ~0.5 × memory.  
- **Ops at query:**  
  1. Embed the query → 768‑D float32.  
  2. Compute approximate distances: for PQ, reconstruct top‑k candidates using precomputed lookup tables; cost ≈ *O(k·m)* where *m* is number of sub‑vectors (e.g., 16).  
  3. Refine with exact L2 on the candidate set.  
- **Complexity:** Query time ~O(d + k·m) vs O(N·d) for brute force; memory O(N·d/8) after PQ.

**4️⃣ Edge Cases**  
- *High‑dimensional drift:* if embeddings grow to 2048 D, memory quadruples → consider dimensionality reduction.  
- *Cold start:* new documents require re‑indexing or incremental updates in PQ.  
- *Skewed query distribution:* rare queries may hit cache misses; monitor latency spikes.

**5️⃣ Optimize & Communicate**  
- **Optimization:** Use SIMD (AVX) for dot products, cache‑friendly layout, and pre‑fetch candidate vectors.  
- **Narrative:** “We first compress the space to keep it in RAM, then use an approximate nearest‑neighbor graph to avoid scanning all 1 M vectors, achieving sub‑10 ms latency while keeping memory within budget.”  

This structured walk‑through satisfies FAANG interview expectations: clear assumptions, methodical plan, technical depth with complexity, edge‑case awareness, and a concise optimization strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
