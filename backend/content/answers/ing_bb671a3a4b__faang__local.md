---
qid: ing_bb671a3a4b__faang__local
question: 'Explain: Tier 3: Semantic Search (on-demand retrieval)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:49-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *Tier 3: Semantic Search (on‑demand retrieval)*—the most advanced level of search that moves beyond keyword matching to understand user intent and content meaning at query time. Confirm assumptions: we’re dealing with a large, dynamic knowledge base; latency must stay ≤200 ms; and the system should support natural language queries.

**Approach**  
1. **Query encoding** – tokenize + embed the raw text via transformer (e.g., BERT/PaLM) to capture semantics.  
2. **Indexing** – pre‑compute embeddings for documents and store them in a vector index (FAISS, Milvus).  
3. **Retrieval** – at query time compute similarity (cosine or dot product) between the query embedding and indexed vectors; return top‑k candidates.  
4. **Relevance refinement** – rerank with lightweight models (e.g., RoBERTa fine‑tuned for relevance) or use a learned retrieval policy.  
5. **Cold‑start & updates** – incremental indexing via streaming embeddings; periodic re‑embedding of long documents.

**Depth**  
- *Complexity*: O(log N + k log k) per query with approximate nearest neighbor (ANN).  
- *Trade‑offs*: ANN gives sub‑linear time but introduces recall loss; balance by tuning `efSearch`.  
- *Scalability*: shard the vector index horizontally; use GPUs for embedding inference.  
- *Latency*: aim for <200 ms by caching popular query embeddings and batching inference.

**Edge Cases**  
- Highly ambiguous queries → fallback to keyword search or prompt clarification.  
- Rapidly evolving vocab (new entities) → continuous retraining of embedding model.  
- Extremely short queries (“budget laptop”) → expand with contextual knowledge bases.

**Optimize & Communicate**  
Future improvements: use bi‑directional retrieval (retrieval + re‑ranking jointly), incorporate user feedback loops, and explore sparse+dense hybrid indexes for higher precision. I’d explain the pipeline visually, highlight latency budgets, and emphasize how each component directly addresses the core FAANG criteria of scalability, reliability, and data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
