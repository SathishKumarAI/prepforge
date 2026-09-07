---
qid: ing_42fc2b3dc6__faang__local
question: How do you keep a RAG index fresh as documents change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:57-05:00'
sources: []
---

**Clarify**  
The question asks how to maintain the freshness of a Retrieval‑Augmented Generation (RAG) system when underlying documents are updated or deleted. I’ll assume we have an index built on embeddings and that updates come as batches or streams.

**Approach**  
1. Detect changes (additions, deletions, modifications).  
2. Re‑embed affected chunks.  
3. Update the vector store incrementally.  
4. Periodically rebuild for drift mitigation.  

**Depth**  
- **Change detection**: Use a version hash or timestamp per document; compare with stored metadata.  
- **Re‑embedding**: Run only on changed chunks to save compute.  
- **Incremental update**: Vector stores like Milvus, Pinecone, or FAISS support `add`, `delete`, and `update` operations in O(log N) time. For deletions, flag stale vectors and purge them during a scheduled compaction pass.  
- **Consistency window**: Use a “stale‑until‑rebuilt” policy—serve old embeddings for up to 1 h while the new ones are computed, then switch atomically.  
- **Periodic full rebuild** (e.g., nightly) counters drift and removes orphaned vectors.

**Edge cases**  
- Large bulk updates may saturate compute; queue them or use sharding.  
- Deleting a document that is part of multiple embeddings—ensure all references are removed.  
- Embedding model drift: if the encoder changes, re‑embed everything to keep similarity scores reliable.

**Optimize & communicate**  
I’d implement a lightweight pipeline with Kafka topics for change events, a worker pool for embedding, and an API layer that serves the latest index state. I’d explain trade‑offs: real‑time freshness vs compute cost; batching reduces overhead but introduces latency. This keeps the RAG index both fresh and efficient, meeting production SLAs while maintaining high answer quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
