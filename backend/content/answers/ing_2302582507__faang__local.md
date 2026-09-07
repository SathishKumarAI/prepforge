---
qid: ing_2302582507__faang__local
question: 'Explain: Scaling to Millions of Documents — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 445
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:44-05:00'
sources: []
---

**Clarify**  
We’re asked how a production Retrieval‑Augmented Generation (RAG) system can handle millions of documents while keeping latency and cost low. Key assumptions: the corpus is static or slowly evolving, queries are ad‑hoc text, we have compute budget for indexing and inference, and we want sub‑second response.

**Approach**  
1. **Vectorize once** – embed every document chunk with a high‑quality encoder (e.g., SBERT).  
2. **Indexing** – use an approximate nearest neighbor index (FAISS/Annoy/HNSW) that supports dynamic updates and sharding.  
3. **Scalable storage** – store embeddings in a distributed key‑value store (Pinecone, Weaviate) with per‑shard replicas.  
4. **Query pipeline** – embed the user query, perform ANN search across shards, fetch top‑k passages, then run them through a lightweight language model or chain of retrieval + generation.

**Depth**  
- **Embedding cost**: ~10 ms/query on GPU; batching reduces overhead.  
- **ANN latency**: O(log N) per shard; with 8 shards, <30 ms for millions of vectors.  
- **Generation**: use a distilled model (e.g., GPT‑NeoX 125M) to keep inference under 200 ms.  
- **Consistency**: version the index and replay updates to avoid stale results.

**Edge Cases**  
- *Document churn*: incremental embeddings vs full rebuilds.  
- *Hot queries*: cache generated answers for popular topics.  
- *Latency spikes*: circuit breakers and graceful degradation to raw search.

**Optimize & Communicate**  
Explain trade‑offs: higher embedding dimensionality boosts recall but increases index size; larger language models improve answer quality at cost of latency. Show how horizontal scaling (more shards, more GPUs) linearly improves throughput. Conclude with monitoring metrics—search hit rate, end‑to‑end latency, and cost per request—to validate production readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
