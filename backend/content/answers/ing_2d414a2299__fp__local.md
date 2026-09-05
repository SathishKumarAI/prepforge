---
qid: ing_2d414a2299__fp__local
question: 'Explain: Design the ingestion pipeline that gets 5 million internal documents
  into a RAG system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 390
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:47-05:00'
sources: []
---

**Ingestion as an optimization problem**

At its core the ingestion pipeline is a *resource‑constrained transformation* that maps 5 M unstructured documents into a vector space where retrieval and generation can be performed efficiently.  
We must therefore **minimise the total cost of data movement, feature extraction, and storage while maximising downstream utility**—a classic convex optimization over discrete decisions (batch size, compression ratio, index granularity).  

1. **Chunking & deduplication** – split each doc into semantic units (≈ 512‑token chunks) using a lightweight parser; run locality‑sensitive hashing to collapse near‑identical passages before embedding.  
2. **Batch‑wise embedding** – feed batches of 10k chunks through the encoder, exploiting GPU tensor cores and automatic mixed precision; store the resulting vectors in a columnar format (Parquet) compressed with Zstd to preserve entropy while keeping I/O low.  
3. **Index construction** – build an IVF+PQ index per tenant, tuning *nlist* so that query latency stays < 50 ms even at 5 M vectors; periodically rebuild on the fly using incremental updates rather than full re‑indexing.  
4. **Metadata routing** – publish a lightweight Kafka stream with vector IDs and metadata (owner, classification) for downstream RAG modules to resolve context during generation.

*Non‑obvious insight:* **Treat deduplication as part of the objective function, not a pre‑step.** By integrating similarity detection into the embedding cost (e.g., reusing already‑computed embeddings for near‑duplicate chunks), you avoid redundant GPU passes and dramatically cut both compute and storage budgets—essential when scaling to millions of documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
