---
qid: ing_b7029f81f9__star__local
question: 'Explain: IVF (Inverted File Index) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:18-05:00'
sources: []
---

**Situation:**  
While leading a feature‑engineering sprint for our recommendation engine, the team noticed that similarity queries on our 1 M‑item product catalog were taking over 2 seconds each, far above the 100 ms SLA required for real‑time personalization.

**Task:**  
I needed to design an indexing strategy that could reduce query latency while keeping GPU memory usage within the server’s 32 GB limit and maintaining at least 95 % recall on our cosine‑similarity metric.

**Action:**  
I chose Inverted File Indexing (IVF) for a vector database. First, I clustered the 512‑dimensional embeddings into 10 k Voronoi cells using K‑means, storing only the centroids and an inverted list of item IDs per cell. During query time, I projected the query vector onto its nearest 3 cells (nprobe = 3), then performed exhaustive cosine search only within those lists—effectively pruning 99% of vectors. To stay memory‑tight, I compressed each centroid to float16 and used IVF with product quantization for residuals, reducing per‑vector storage from 2 KB to ~250 B. Parallelized the probe loops across our two GPUs, adding a small fusion kernel to batch dot products.

**Result:**  
Latency dropped from 1.8 seconds to 75 ms on average, meeting the SLA with 96.7 % recall. The index occupied just 6 GB of GPU memory, leaving headroom for future growth. I learned that balancing probe count and cluster granularity is key: too few probes hurt accuracy; too many inflate latency. This hands‑on IVF implementation now serves as our baseline for any large‑scale vector search in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
