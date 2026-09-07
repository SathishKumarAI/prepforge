---
qid: ing_b18f529244__faang__local
question: 'Explain: Likely interviewer follow-ups — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 505
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:36:52-05:00'
sources: []
---

**Clarify**  
The interviewer is probing your grasp of *semantic search*—a retrieval technique that goes beyond keyword matching to understand meaning and context. I’d confirm:  
1. Are we discussing pure semantic embeddings or hybrid TF‑IDF + vector models?  
2. Is the focus on recall, precision, latency, or scalability?  

**Approach**  
I’ll outline a typical pipeline:  
- **Indexing**: Encode documents with sentence/paragraph transformers (e.g., SBERT) and store vectors in an ANN index (FAISS/HNSW).  
- **Query handling**: Convert the query to the same embedding space, optionally augment with BM25 scores.  
- **Ranking & reranking**: Use cosine similarity for initial retrieval; then apply a lightweight neural reranker or transformer fine‑tuned on relevance data.  

**Depth**  
- *Embedding choice*: Sentence‑BERT gives 768‑dim vectors capturing semantics but costs compute; distilled models trade quality for speed.  
- *Indexing*: HNSW offers sub‑linear search with ~0.1 ms per query at 10M docs; FAISS can be GPU‑accelerated.  
- *Relevance feedback*: Incorporate user clicks via learning‑to‑rank (LambdaMART) or online RL for continuous improvement.  
Complexity: Index build O(n log n), query retrieval O(log n + k). Trade‑off between recall and latency is tuned by ANN parameters.

**Edge Cases**  
- *Ambiguity*: “Apple” could be fruit or company—use contextual embeddings plus entity disambiguation.  
- *Noisy queries*: Typos, slang—apply fuzzy matching or spell correction before embedding.  
- *Cold start*: New documents require re‑embedding; periodic incremental updates mitigate drift.

**Optimize & Communicate**  
To scale: shard the ANN index horizontally and cache top‑k results for popular queries. For latency: pre‑compute query embeddings in a microservice and serve via gRPC. I’d explain that balancing semantic depth with real‑time constraints is key, and highlight metrics—MAP@10, NDCG—to validate improvements. This structured narrative showcases problem framing, technical depth, and pragmatic trade‑offs expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
