---
qid: ing_113b64c56c__star__local
question: 'Explain: Q: Explain how HNSW works and when you would not use it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 336
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:18-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a recommendation engine for an e‑commerce platform that needed to return the top 10 similar products in under 50 ms for millions of items. The dataset had 3 million vectors, each 512‑dimensional, and we were using Faiss as our baseline.

**Task:**  
I had to choose an indexing method that balanced speed, memory usage, and recall. I considered HNSW (Hierarchical Navigable Small World) graphs because they are known for high recall at low latency.

**Action:**  
I implemented an HNSW index with 32 neighbors per layer and a search depth of 24. During profiling I noticed the memory footprint grew to ~4 GB, twice what we could afford in our containerized environment. I also ran benchmarks: recall@10 dropped from 0.92 (FAISS IVF) to 0.85 when using HNSW at the same query time. After experimenting with pruning the graph and reducing the number of layers, I found that a simpler approximate k‑means cluster index gave comparable latency but used only 1.2 GB.

**Result:**  
We deployed the k‑means index, cutting memory by 70% while keeping recall above 0.9. The decision taught me that HNSW shines when you need ultra‑high recall with modest data sizes; for very large, memory‑constrained systems or when a slight drop in accuracy is acceptable, simpler methods can be more practical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
