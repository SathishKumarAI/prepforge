---
qid: ing_52ac0dfe37__faang__local
question: 'Explain: Specialized Index Types — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 543
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:35-05:00'
sources: []
---

**Specialized Index Types – Indexing in ML Systems**

---

### 1️⃣ Clarify  
*Goal:* Efficiently retrieve high‑dimensional vectors (embeddings) for nearest‑neighbor queries.  
Assumptions:  
- Query latency < 10 ms, throughput ≥ 10k QPS.  
- Dataset size: millions of vectors; storage budget limited.  
- Updates are batched nightly.

### 2️⃣ Approach  
1. **Choose an index family** (IVF, HNSW, PQ).  
2. **Build a coarse quantizer** to partition space into *cells*.  
3. **Compress residuals** with Product Quantization for disk‑friendly storage.  
4. **Maintain auxiliary structures** (cell id → postings list) for fast lookup.

### 3️⃣ Depth  
- **IVF + PQ:**  
  - *Construction:* k‑means on a sample → centroids (coarse).  
  - *Query:* locate nearest centroid, scan its postings, compute approximate distances using precomputed sub‑codebooks.  
  - *Complexity:* Build O(N k d), query O(k log N + M C) where *M* is number of candidates and *C* = PQ cost.  
- **HNSW:**  
  - Multi‑layer graph; each node links to neighbors in higher layers.  
  - Query traverses from top layer, greedy walk, then expands.  
  - Offers sub‑linear time with tunable recall via *efSearch*.  

Trade‑offs: IVF+PQ is storage‑efficient but requires centroid updates; HNSW gives higher recall at the cost of memory.

### 4️⃣ Edge Cases  
- **Skewed data** → too few vectors per cell → fallback to linear scan.  
- **Rapid schema changes** → rebuild only affected layers.  
- **Cold start** → pre‑populate a global “fallback” index.

### 5️⃣ Optimize & Communicate  
- Profile recall vs latency; adjust *k* (IVF) or *efSearch* (HNSW).  
- Use SIMD for distance calculations, reduce cache misses by packing PQ codes.  
- Explain to stakeholders: “We trade a small precision loss (~2 %) to meet 10 ms latency and keep storage under 1× raw data.”  

**Result:** A scalable, low‑latency vector search layer that balances accuracy, memory, and update throughput—exactly what FAANG systems demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
