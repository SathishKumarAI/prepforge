---
qid: ing_639df7baa5__faang__local
question: 'Explain: Product Quantization (PQ) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:03-05:00'
sources: []
---

**Clarify**  
Explain how *Product Quantization* (PQ) is used in vector databases for fast similarity search. Assume the audience knows basic nearest‑neighbor search and high‑dimensional embeddings, but not PQ internals.

**Approach**  
1. Define PQ: split each d‑dimensional vector into M sub‑vectors of length d/M.  
2. Quantize each sub‑vector to a small codebook (k centroids).  
3. Encode vectors as M short codes (indices in each codebook).  
4. Use asymmetric distance computation (ADC) for query vs. encoded database.

**Depth**  
- **Encoding:** For each subspace, train k‑means → store centroid tables. Each vector maps to M indices → O(1) storage per code.  
- **Search:** Query vector Q is split; precompute distances between Q’s sub‑vectors and all centroids (M×k ops). For each database entry, sum the corresponding precomputed distances—no full dot products. Complexity: O(M·k + N·M) for scanning N entries vs. O(N·d) naive.  
- **Compression:** With M=8, k=256 → 8 bytes per vector (vs. 128 bytes raw).  
- **Accuracy trade‑off:** Quantization error ≈ O(d/M) but can be mitigated by IVF or PQ‑tree refinements.

**Edge Cases**  
- Highly correlated subspaces: poor quantization → larger errors.  
- Very small k leads to coarse buckets, hurting recall.  
- Non‑uniform vector distributions may bias centroid usage; test with synthetic data and real embeddings.

**Optimize & Communicate**  
- Use IVF (inverted lists) + PQ for logarithmic search.  
- Cache centroid distance tables per thread to avoid recomputation.  
- Explain that PQ turns expensive dot products into cheap table lookups, enabling sub‑millisecond ANN in billion‑vector databases—exactly what a FAANG product needs for real‑time recommendations or search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
