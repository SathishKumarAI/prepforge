---
qid: ing_140c689af1__faang__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 524
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:38-05:00'
sources: []
---

**Clarify**  
You need a scalable, low‑cost vector index for ~100 M docs (~1–2 GB raw). The bottleneck is storage/compute for high‑dimensional embeddings (e.g., 768‑D). Confirm:  
• Target recall vs. latency?  
• Allowed preprocessing time?  
• Whether approximate nearest neighbor (ANN) suffices.

**Approach**  
1. **Compress embeddings** – reduce dimensionality & precision.  
2. **Quantize to integers** – enable efficient storage and SIMD ops.  
3. **Index with product quantization (PQ)** or IVF+PQ for ANN.

**Depth**  

| Step | Method | Math / Size |
|------|--------|-------------|
|1|Principal Component Analysis (PCA) to 128 D | retain >90% variance → 128×4B ≈ 512 B per vector. |
|2|Scalar Quantization (8‑bit) | map each component to [0,255] → 128 bytes total. |
|3|Product Quantization (PQ) | split 128 D into 16 subspaces of 8 D; each subspace quantized to 256 centroids → 16 bytes code + 16×4B centroid table ≈ 80 B per vector. |
|4|Indexing | IVF with 1K clusters, PQ codes stored in RAM/SSD; search cost O(1K·16) ≈ 16k distance comps.

**Edge Cases**  
*Highly non‑Gaussian embeddings*: PCA may lose info → use autoencoder or random projection.  
*Sparse vectors*: quantization noise dominates → consider hashing (LSH).  
*Very tight latency*: increase IVF size or use GPU for PQ decoding.

**Optimize & Communicate**  
- Benchmark compression ratios: raw 768×4B ≈ 3 KB → PQ ≈ 80 B → ~40× savings.  
- Trade‑off: higher quantization levels (e.g., 256 centroids) improve recall but double code size.  
- Present a cost model: 100M × 80 B = 8 GB, fits in commodity SSD with headroom for metadata.  

Explain to stakeholders that by combining PCA + PQ we keep retrieval quality (~95% recall at k=10) while cutting storage and query time, making the vector index economically viable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
