---
qid: ing_936defd7da__think__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 862
total_tokens: 1064
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:50:11-05:00'
sources: []
---

We must give a numbered thought process for answering question about HNSW vs IVF vs PQ recall/latency/memory tradeoffs. Provide 5 points.**1️⃣ Clarify the scope and assumptions**  
   - Confirm that we’re talking about *approximate nearest‑neighbor (ANN)* search in high‑dimensional vector spaces, typical for embeddings (e.g., 128–512 D).  
   - Assume a single machine with multi‑core CPU or GPU, and that memory is a constraint but not the only one.  
   - Recall is measured as *recall@k* versus exact NN; latency is average query time; memory is index size relative to raw data.

**2️⃣ Adopt a comparison framework**  
   - For each method list: (a) **Index construction** cost, (b) **Query algorithm**, (c) **Space overhead**, (d) **Typical recall‑vs‑latency curve**.  
   - Use the same dataset and dimensionality as a baseline for sanity checks.

**3️⃣ Step‑by‑step reasoning**  

| Method | Construction | Query | Memory | Recall‑Latency Trade‑off |
|--------|--------------|-------|--------|--------------------------|
| **HNSW** (Hierarchical Navigable Small World) | Builds multi‑layer graph; cost ≈ O(N log N). | Greedy traversal from top layer, often < 10 ms on CPU. | ~3–5× raw vector size (depends on `efConstruction`). | High recall even at low latency; increasing `efSearch` boosts recall with linear latency increase. |
| **IVF** (Inverted File / IVFADC) | Cluster centroids (e.g., k‑means). Cost ≈ O(k N). | Scan a subset of cells (`nprobe`) then linear scan within cell. | ~1–2× raw size + centroid storage. | Recall rises sharply with `nprobe`; latency grows linearly. Good for very large N where memory is tight. |
| **Product Quantization (PQ)** | Same as IVF but adds codebooks; construction similar to IVFADC. | Decode PQ codes on the fly, fast inner‑product approximation. | ~0.5–1× raw size (depends on bits per subvector). | Recall lower for same latency compared to HNSW/IVF; increasing number of subspaces or bits improves recall but also memory and decoding time. |

- **Recall vs Latency**:  
  - *HNSW*: best curve – high recall at low latency, but query speed can drop if `efSearch` is set very high.  
  - *IVF*: linear trade‑off; need to choose `nprobe` carefully (often 5–10 for decent recall).  
  - *PQ*: best memory efficiency; recall improves slowly with more bits or subspaces, but latency stays low until decoding overhead dominates.

**4️⃣ Common pitfalls to avoid**  
   - Mixing **IVF+PQ**: treat them as a single method; remember PQ is usually layered on IVF.  
   - Assuming “more memory = better recall” universally—over‑parameterizing can hurt generalization.  
   - Ignoring *construction time* for very large datasets (HNSW can be expensive).  
   - Forgetting that GPU acceleration changes the latency profile dramatically, especially for PQ decoding.

**5️⃣ Sanity checks & verbal communication**  
   - Verify numbers on a toy dataset: run each index with default parameters and compare recall@10.  
   - Explain to a colleague by summarizing “HNSW gives the best recall‑latency trade‑off when you can afford ~4× memory; IVF is preferable when memory is at a premium, trading a linear increase in `nprobe` for recall; PQ offers the lowest memory but requires more bits/subspaces to reach comparable recall.”  
   - Emphasize that real‑world tuning (e.g., `efConstruction`, `nprobe`, PQ bits) will shift these curves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
