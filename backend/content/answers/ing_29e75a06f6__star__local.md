---
qid: ing_29e75a06f6__star__local
question: 'Explain: Batched Embedding — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 414
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:59-05:00'
sources: []
---

**Situation:**  
In my last role as a ML engineer for a fintech startup, we were building a real‑time recommendation engine that used Retrieval Augmented Generation (RAG) to answer customer queries about loan products. The user base had grown to 2 M active accounts and our inference latency target was under 150 ms per request.

**Task:**  
I needed to redesign the embedding pipeline so we could batch compute embeddings for millions of documents, serve them at scale, and keep inference time within limits without sacrificing recommendation quality.

**Action:**  
1. I profiled the existing single‑request embedding process (OpenAI’s `text-embedding-ada-002`) and found it spent ~60 % of time on network round‑trips.  
2. I switched to a local 16‑GPU inference cluster using the same model, wrapped in NVIDIA Triton for batching.  
3. Implemented a two‑stage pipeline: (a) a pre‑compute stage that generated embeddings nightly and stored them in an HNSW index on Milvus; (b) at request time, the system fetched candidate documents via vector similarity, batched their text, and sent them to the LLM only once per user session.  
4. Added automatic batch sizing logic: if latency exceeded 120 ms we reduced batch size by 25 % and logged for later tuning.

**Result:**  
Batching cut embedding inference time from ~300 ms per document to <30 ms, reducing overall query latency to 110 ms on average. The RAG accuracy (measured by NDCG@10) improved from 0.62 to 0.71 because we could include more context documents per request. I learned how careful batching and vector index tuning can turn a costly, real‑time system into a scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
