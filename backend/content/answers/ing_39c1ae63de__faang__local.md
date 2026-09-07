---
qid: ing_39c1ae63de__faang__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 559
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:49-05:00'
sources: []
---

**Hybrid Retrieval – Keyword → Vector → Rerank**

| Stage | What it does | When it earns the cost |
|-------|--------------|------------------------|
| **Keyword search (BM25 / inverted index)** | Fast filtering of a massive corpus using exact term matches and lightweight scoring. | Early pruning: any candidate that fails basic lexical relevance is discarded before expensive vector ops. |
| **Vector retrieval (FAISS, HNSW, etc.)** | Computes dense embeddings for query & candidates, then retrieves the nearest‑neighbour set. | For the top‑K lexical hits; the cost pays for high‑quality semantic matches that keyword alone misses. |
| **Reranking (Transformer / BERT scoring)** | Fine‑grained re‑scoring of the small candidate list with a heavy model that considers full context. | Only on the final handful (e.g., 10–20) where the marginal benefit of a sophisticated rank outweighs inference latency. |

---

### 1. Clarify
- **Goal:** Return top‑N semantically relevant documents quickly.
- **Assumptions to confirm:** size of corpus, acceptable latency budget, available GPU/CPU resources.

### 2. Approach
1. Run BM25 on the full index → `M` candidates (e.g., 1000).
2. Embed query & each candidate → perform ANN search → top‑K (≈50) vectors.
3. Feed those K items to a transformer reranker → final ranking of N (≈10).

### 3. Depth
- **Complexity:**  
  - BM25: `O(#terms)` per doc, linear scan or inverted list lookup.  
  - ANN: sub‑linear in corpus size (`O(log M)`).  
  - Rerank: `O(K * model_inference_time)`.  
- Trade‑off: More K → better recall but higher compute; fewer K → faster but risk missing relevant docs.

### 4. Edge Cases
- **Sparse queries:** BM25 may prune too aggressively → relax threshold or add synonym expansion.  
- **Highly similar documents:** Vector stage must use high‑dimensional embeddings to disambiguate.  
- **Cold start:** No cached vectors → fallback to pure keyword.

### 5. Optimize & Communicate
- Cache top‑K vector results for frequent queries (speed‑up).  
- Parallelize BM25 and ANN on GPUs/TPUs.  
- Explain design: “We first eliminate obvious non‑matches cheaply, then invest compute where semantic nuance matters, finally confirm with a heavy model only on the most promising few.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
