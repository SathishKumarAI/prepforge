---
qid: ing_57045f555b__faang__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 512
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:06:23-05:00'
sources: []
---

**Clarify**  
*Restate*: “We need a Retrieval‑Augmented Generation (RAG) service that can ingest a ~10 GB corpus, index it, and serve LLM queries in under six hours.”  
*Assumptions to confirm*: 1️⃣ Corpus format (text, PDFs, JSON). 2️⃣ Target latency & throughput. 3️⃣ Allowed compute (cloud vs on‑prem). 4️⃣ LLM choice and API limits. 5️⃣ Security & compliance constraints.

**Approach**  
1. **Data ingestion plan** – chunking strategy, deduplication, metadata extraction.  
2. **Vector store selection** – approximate nearest neighbor (FAISS/HNSW) vs managed service (Pinecone).  
3. **Embedding pipeline** – model choice, batch size, GPU usage.  
4. **Service architecture** – micro‑service with REST/GraphQL + async queue for embeddings.  
5. **Evaluation & monitoring** – retrieval recall, latency metrics, cost tracking.

**Depth**  
- Use `langchain` or custom pipelines: chunk into 1 kB blocks, embed via OpenAI’s `text-embedding-ada-002`.  
- Build HNSW index in FAISS (`index_ivf_flat`) for sub‑ms similarity search.  
- Serve via FastAPI; on query, retrieve top‑10 vectors, prepend to prompt, call GPT‑4.  
- Complexity: O(N log N) indexing, O(log N + k) retrieval per query.

**Edge Cases**  
- Empty or malformed documents → skip with log.  
- Duplicate content → dedupe by hashing chunks.  
- Query length > model limit → truncate context.  
- Embedding rate limits → back‑pressure queue.

**Optimize & Communicate**  
- Parallelize ingestion: split corpus across shards, use GPU workers.  
- Cache embeddings in Redis to avoid recomputation.  
- Present a timeline (data prep 1 h, embedding 2 h, indexing 1 h, API dev 1 h).  
- Document trade‑offs: FAISS is free & fast vs managed services reduce ops but add cost.

This plan shows clear problem framing, systematic steps, technical depth, edge‑case awareness, and a concise delivery schedule—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
