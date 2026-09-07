---
qid: ing_d7f9585c86__faang__local
question: 'Explain: Adaptive Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:52-05:00'
sources: []
---

**Clarify**  
*What is being asked?* We need to describe how a large‑scale production system retrieves relevant documents (RAG = Retrieval‑Augmented Generation) that adapts to user context and changing content.  
*Assumptions to confirm:*  
- The knowledge base is huge (millions of docs).  
- Latency must stay under ~200 ms for interactive chat.  
- System must update embeddings in near real‑time as new data arrives.

**Approach**  
1. **Vector indexing** with a distributed ANN engine (FAISS, Milvus, or Elastic KNN).  
2. **Contextual re‑ranking**: use user session vectors + query intent to adjust similarity scores.  
3. **Dynamic embedding refresh** via incremental training or online fine‑tuning.  
4. **Caching & pre‑fetching** for hot topics.  

**Depth**  
- *Index*: Shard embeddings by hash of document ID; each shard runs a GPU‑accelerated ANN index.  
- *Retrieval*: Query vector → nearest‑neighbor search → top‑k docs (k≈10).  
- *Re‑ranking*: Feed the raw matches into a lightweight transformer that conditions on session history, yielding a relevance score.  
- *Update pipeline*: New documents are encoded in micro‑batches; embeddings appended to shards; older vectors flagged for decay and periodic recomputation.  
Complexity: ANN search ≈ O(log N) amortized, re‑ranking O(k·d). Latency <200 ms achievable with 8–16 GPU nodes.

**Edge Cases**  
- *Cold start*: No prior context → fall back to keyword matching.  
- *Concept drift*: Embeddings become stale → trigger full re‑index on schedule.  
- *Duplicate or noisy docs*: Use deduplication and quality filters before indexing.

**Optimize & Communicate**  
- **Batching**: Process multiple user queries together to amortize GPU load.  
- **Adaptive sampling**: Reduce k for low‑confidence queries to save compute.  
- **Monitoring**: Track retrieval latency, hit‑rate, and drift metrics; auto‑scale shards.  

Explain this flow in a whiteboard diagram, highlight the trade‑off between freshness vs. latency, and emphasize how each component scales horizontally while keeping the user experience seamless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
