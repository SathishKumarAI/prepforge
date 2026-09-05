---
qid: ing_037d83f40e__star__local
question: 'Explain: ANN index: structure, memory math, ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 363
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:22-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an internal recommendation engine that needed to surface relevant news articles in real‑time for traders. The dataset was over 3 million documents, each represented by a 768‑dimensional BERT embedding stored on SSD.

**Task** – I had to design and deploy an ANN (Approximate Nearest Neighbor) index that would return the top‑10 similar articles within 20 ms per query while keeping RAM usage below 8 GB.

**Action** – I chose HNSW (Hierarchical Navigable Small World) because of its excellent recall/latency trade‑off. First, I reduced dimensionality with PCA to 256 components, cutting the vector size from ~3 KB to ~1 KB. Then I built the index in two layers: a coarse layer with 64 nodes for quick pruning and a fine layer with 32 neighbors per node for precise search. Memory math showed each edge stored as an 8‑byte pointer plus a 4‑byte distance, giving roughly 2.5 GB for the index itself. I tuned efSearch to 200 during queries, which kept latency under 15 ms on a single CPU core.

**Result** – The system returned top‑10 results with 95% recall compared to exhaustive search, reduced query latency from 250 ms to 12 ms, and stayed within the 8 GB RAM budget. I learned that careful dimensionality reduction combined with layer‑aware graph construction can dramatically improve both speed and memory in semantic search pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
