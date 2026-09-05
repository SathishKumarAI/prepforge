---
qid: ing_391f1bcd63__fp__local
question: 'Explain: Scaling & ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 388
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:18-05:00'
sources: []
---

**Scaling & Ops – Semantic Search**

At its core a semantic search engine must answer *“Which documents best match the meaning of a query?”*  
To do this it represents every document and query as a high‑dimensional vector (the “semantic embedding”) and then performs nearest‑neighbour retrieval.  

1. **Embedding bottleneck** – Generating embeddings is an expensive forward pass through a transformer. The cost grows linearly with the corpus size, so scaling requires parallelizing inference across GPUs or serverless functions.  
2. **Indexing bottleneck** – Storing millions of vectors in RAM is impractical; approximate nearest‑neighbour (ANN) structures (IVF, HNSW) trade a tiny recall loss for sub‑linear search time.  
3. **Retrieval–Relevance loop** – After ANN we re‑rank top‑k with a heavier model (e.g., cross‑encoder). This two‑stage pipeline is an instance of *divide and conquer* in optimization: cheap coarse filtering + expensive fine scoring.

### Why it works
The whole system relies on the **curse of dimensionality turned into advantage**. High‑dimensional embeddings make semantically similar items cluster tightly, enabling ANN to prune vast swaths of irrelevant vectors with minimal recall loss.  

### Non‑obvious insight  
Most deployments ignore *vector drift*: as new documents arrive or model weights update, existing indices become stale. Periodic re‑indexing is not a “nice‑to‑have” but an *optimization constraint*—the search objective changes over time, so the index must be recomputed to preserve its performance guarantee. Without this, latency remains low while accuracy silently collapses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
