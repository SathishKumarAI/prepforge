---
qid: ing_6149717184__think__local
question: 'Explain: Build text-to-image search over 100M product images. Walk me through
  the design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 504
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:26:41-05:00'
sources: []
---

**1. Clarify scope & constraints**  
   • What “search” means (retrieval accuracy vs latency).  
   • Size of the index (≈100 M images → memory footprint, disk tier).  
   • Expected query volume and concurrency.  
   • Business rules (filtering by category, brand, price).  

**2. Adopt a design framework**  
   1. **Feature extraction** – choose a pretrained vision‑to‑text model (e.g., CLIP) or train a custom encoder.  
   2. **Indexing** – decide between flat L2 vs approximate nearest neighbor (ANN) structures (FAISS, HNSW).  
   3. **Serving layer** – micro‑service architecture with load balancer and autoscaling.  
   4. **Caching & CDN** – for popular queries or high‑frequency images.  

**3. Reason step‑by‑step**  
   • *Preprocess* all images: resize, normalize, store vector embeddings.  
   • *Persist* vectors in a sharded ANN index; shard by hash of image ID to spread load.  
   • For each user query text → embed with same model → search nearest neighbors in the ANN index.  
   • Rank results by similarity score + business filters (price range, availability).  
   • Return top‑k URLs or IDs; optionally fetch thumbnails from CDN.  

**4. Avoid common traps**  
   – Forgetting to align training and inference pipelines (different tokenizers/normalization).  
   – Using too many shards → increased query latency due to cross‑shard aggregation.  
   – Ignoring cold‑start for new products: re‑index or lazy compute embeddings.  

**5. Sanity‑check & communicate**  
   • Verify embedding dimensionality and storage size; ensure RAM can hold the index (≈100 M × 512 doubles ≈ 200 GB).  
   • Run latency benchmarks (≤50 ms per query) on a representative load.  
   • Present the flow as a diagram: input → encoder → ANN search → ranking & filtering → response.  
   • Highlight trade‑offs: higher accuracy ↔ larger index vs faster queries.

*(≈190 words)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
