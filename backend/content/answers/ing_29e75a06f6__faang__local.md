---
qid: ing_29e75a06f6__faang__local
question: 'Explain: Batched Embedding — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 495
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:39-05:00'
sources: []
---

**Batched Embedding – Production RAG at Scale**  

---

### 1️⃣ Clarify  
We’re asked to explain how a Retrieval‑Augmented Generation (RAG) system can serve millions of queries per second by **batching embeddings** in production.  
*Assumptions to confirm:*  
- Queries arrive as short text or prompts.  
- We have a large vector store (FAISS, Pinecone).  
- Embedding model is compute‑heavy (e.g., BERT‑based).  

### 2️⃣ Approach  
1. **Batch incoming requests** in micro‑batches (size = 32–256) before embedding.  
2. Compute embeddings once per batch using GPU/TPU.  
3. Query the vector index with those embeddings, retrieving top‑k documents.  
4. Pass retrieved context + original prompt to a generative model.  

### 3️⃣ Depth  
- **Batching** amortizes GPU overhead: kernel launch cost is constant; larger batches reduce per‑token latency.  
- Use **prefetch queues** and *async* pipelines (embedding → retrieval → generation).  
- Cache frequently used embeddings in an LRU store to avoid recomputation.  
- Complexity: embedding O(B·d), retrieval O(log N + B·k), generation O((B·(len+ctx)) ).  
- Trade‑offs: Larger batches lower throughput per request but increase overall system throughput; choose batch size based on GPU memory and SLA.

### 4️⃣ Edge Cases  
- **Cold start** – no cached embeddings → single‑query latency spikes.  
- **Burst traffic** – queue overflow → backpressure or auto‑scale workers.  
- **Index churn** – embedding updates must be re‑indexed without downtime.  

### 5️⃣ Optimize & Communicate  
- Profile GPU utilization; shift to mixed precision (FP16) for speed.  
- Implement *dynamic batching* that adapts batch size in real time.  
- Explain to stakeholders: “By grouping queries, we reduce per‑query compute by ~70 %, enabling us to serve 10× more traffic while keeping latency <200 ms.”  

This structured plan demonstrates deep technical insight, scalability considerations, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
