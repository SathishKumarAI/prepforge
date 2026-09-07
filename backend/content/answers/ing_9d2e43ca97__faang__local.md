---
qid: ing_9d2e43ca97__faang__local
question: 'Q: When would you use hybrid search over pure dense search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 424
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:31-05:00'
sources: []
---

**Clarify**  
You’re asking when a *hybrid* (e.g., sparse + dense) retrieval strategy beats a purely dense one. I’ll assume we have:  

1. A large document collection with mixed content (text, code, images).  
2. Queries that vary from keyword‑heavy to semantic.  
3. Constraints on latency and compute.

**Approach**  
1. Identify scenarios where sparse signals matter (exact term matches, high‑precision needs).  
2. Spot when dense embeddings capture nuance but may miss exactness or have higher recall cost.  
3. Design a pipeline that leverages both in parallel or staged fashion.

**Depth**  
- **Hybrid advantage:**  
  *Exactness + Recall*: Sparse BM25 gives precise keyword hits; dense ANN retrieves semantically related docs missed by BM25.  
  *Robustness to noise*: Dense models can handle typos/variations; sparse handles canonical terms.  
  *Cost‑efficiency*: Run a lightweight sparse pass to filter candidates, then apply expensive dense reranking on a smaller set (e.g., top‑k).  
- **Implementation**: Use an inverted index for BM25 + FAISS/HNSW for embeddings. Merge scores via learned fusion or weighted sum.

**Edge Cases**  
- Purely semantic queries with no key terms → hybrid still benefits from dense recall.  
- Highly specialized vocab (e.g., legal) where sparse terms dominate → pure dense may underperform.  
- Very short queries: sparse may produce many false positives; dense helps prune.

**Optimize & Communicate**  
Explain that hybrid search balances *precision* (sparse) and *recall* (dense), reducing latency by filtering early, and improving overall relevance. Highlight trade‑offs: extra storage for two indices, added inference cost for embeddings, but measurable gains in MRR or NDCG on benchmark data. Use metrics to justify the hybrid choice in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
