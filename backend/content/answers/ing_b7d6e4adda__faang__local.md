---
qid: ing_b7d6e4adda__faang__local
question: 'Explain: Core Capabilities — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 623
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:47-05:00'
sources: []
---

**Clarify**  
You’re asking what “core capabilities” a vector database offers for AI workloads—specifically how it stores, retrieves, and operates on high‑dimensional embeddings that represent text, images, or other modalities.

Assumptions to confirm:  
- Embeddings are dense vectors (e.g., 768‑D).  
- Workloads involve similarity search, clustering, and incremental updates.  
- Latency must be sub‑millisecond for real‑time inference; throughput can be high.

**Approach**  
1. Identify the fundamental primitives a vector DB provides.  
2. Map each primitive to an AI use‑case.  
3. Highlight trade‑offs (index type vs. accuracy, disk vs. memory).

**Depth**  

| Capability | What it does | Typical AI scenario | Trade‑off |
|------------|--------------|---------------------|-----------|
| **Vector storage & compression** | Persist embeddings in a contiguous format; optional quantization (IVF, PQ). | Storing millions of sentence embeddings for semantic search. | Compression reduces space but can add retrieval noise. |
| **Indexing (ANN)** | Builds structures like HNSW, IVF‑PQ, or product quantizers to approximate nearest neighbors quickly. | Real‑time image similarity in recommendation engines. | Higher recall → more memory/CPU; lower recall → faster queries. |
| **Similarity metrics** | Supports cosine, Euclidean, dot‑product, custom kernels. | Ranking documents by relevance. | Choice of metric affects index construction and retrieval semantics. |
| **Batch & incremental updates** | Allows bulk ingestion or online insertion with minimal downtime. | Continual learning pipelines that add new embeddings daily. | Online inserts can degrade recall unless re‑indexing is scheduled. |
| **Distributed scaling** | Sharding across nodes, replication for fault tolerance. | Serving billions of vectors in a global service. | Network overhead vs. consistency guarantees. |
| **Metadata attachment & filtering** | Store key/value tags; filter results by constraints (e.g., language, timestamp). | Filtering search results to user’s region. | Adds query complexity but improves relevance. |

**Edge Cases**  
- Extremely high‑dimensional vectors (>10k) break most ANN indices.  
- Very sparse updates can lead to index fragmentation and degraded recall.  
- Mixed metric workloads (cosine + Euclidean) require dual indexes or re‑embedding.

**Optimize & Communicate**  
To improve latency, use hybrid search: start with a coarse IVF bucket then refine with HNSW inside the bucket. Communicate this as “first reduce the candidate set cheaply, then spend compute on high‑quality neighbors.”  
When explaining to interviewers, frame it as: *“Vector DBs are the backbone of AI inference pipelines; they provide storage, fast similarity search, and scalable updates—all tuned via indexing trade‑offs.”* This showcases structured reasoning, depth, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
