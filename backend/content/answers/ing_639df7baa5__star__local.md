---
qid: ing_639df7baa5__star__local
question: 'Explain: Product Quantization (PQ) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 351
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:01-05:00'
sources: []
---

**Situation:** At my previous startup we were building a visual search engine that had to index over 15 million product images. The raw embedding vectors were 512‑dimensional floats, and our initial brute‑force ANN scan took ~3 seconds per query on a single GPU, far too slow for production.

**Task:** I needed to reduce the query latency to under 50 ms while keeping recall above 95 % and fitting within our 64 GB RAM budget.

**Action:** I implemented Product Quantization (PQ) in our vector database layer. First, I split each 512‑dim vector into 16 sub‑vectors of 32 dimensions. For each subspace I trained a k‑means codebook with 256 centroids using the Faiss library, storing only the centroid indices per subvector. During search I precomputed asymmetric distance tables for the query against all codebooks, then performed efficient lookup and dot‑product summation across subspaces to approximate nearest neighbors. I also integrated PQ into our IVF index, combining coarse quantization with fine PQ for a hybrid scheme.

**Result:** Query latency dropped from 3 s to 38 ms on a single GPU while recall remained at 96.7 %. Memory usage fell from ~200 GB to just under 60 GB, allowing us to run the service in our existing infrastructure. I learned how careful subspace partitioning and codebook size trade‑offs directly impact both speed and accuracy in large‑scale vector search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
