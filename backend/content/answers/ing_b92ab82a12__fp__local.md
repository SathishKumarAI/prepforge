---
qid: ing_b92ab82a12__fp__local
question: 'Explain: Cost estimate — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 447
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:39-05:00'
sources: []
---

**Cost Estimate – Semantic Search**

Semantic search replaces keyword matching with vector‑based relevance, so the *fundamental problem* is to measure how much computation and data are required to map a query into the same embedding space as millions of documents and then retrieve the nearest neighbors.

1. **Embedding cost**  
   Each token must pass through a transformer encoder; this is linear in sequence length \(L\). For a batch of \(B\) queries, FLOPs ≈ \(B \times L \times d_{\text{model}}\), where \(d_{\text{model}}\) is the hidden dimension. GPU‑bound, this translates to \(O(BL)\) wall‑time.

2. **Indexing cost**  
   Storing embeddings for \(N\) documents requires memory \(O(Nd)\). To support sub‑second retrieval we build an approximate nearest neighbor (ANN) index: building time scales as \(O(N \log N)\) and query latency as \(O(\log N + k)\), where \(k\) is the number of returned results. The deeper principle here is *curse of dimensionality*: high‑dimensional vectors need more elaborate data structures; ANN trade‑offs between recall and speed are governed by information theory (entropy of nearest‑neighbor distances).

3. **Update cost**  
   Adding a document means re‑embedding it and inserting its vector into the index. If updates are frequent, incremental indexing strategies (e.g., hierarchical IVF) reduce amortized cost to \(O(\log N)\).

**Non‑obvious insight:** The dominant expense is not the embedding itself but the *entropy of the query distribution*. Rare queries cause many ANN lookups to fall in sparsely populated regions, inflating latency. By clustering queries offline and caching their top‑\(k\) results (a form of locality‑sensitive hashing), one can dramatically lower real‑time cost without retraining the model. This leverages the deep principle that *information is cheaper when reused* rather than recomputed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
