---
qid: ing_a00fbf3053__faang__local
question: Why Not General Databases? — Vector Databases
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 562
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:18-05:00'
sources: []
---

**Clarify**  
You’re asking why vector‑search engines (e.g., Pinecone, Milvus) are preferred over “general” relational or key‑value databases for AI workloads that need similarity search on high‑dimensional embeddings. I’ll assume we’re comparing CRUD workloads in RDBMSs vs. large‑scale ANN queries, and that the data is static embeddings with occasional updates.

**Approach**  
1. Highlight the core requirement: nearest‑neighbor search in ℝⁿ.  
2. Contrast storage & indexing strategies of general DBs vs. vector DBs.  
3. Discuss performance metrics (latency, throughput) and scalability.  
4. Note integration ease with ML pipelines.

**Depth**  
- **Indexing:** RDBMSs use B‑trees or hash indexes; they’re optimal for exact lookups but explode in cost when computing Euclidean/ cosine distances over thousands of dimensions. Vector DBs build ANN structures (IVF, HNSW, PQ) that reduce query complexity from O(n·d) to sublinear while tolerating small recall loss—essential for latency‑critical inference.  
- **Storage format:** General DBs store each dimension as a separate column or blob, incurring serialization overhead. Vector DBs pack embeddings into compact binary vectors (float32/16), enabling SIMD‑accelerated distance calculations and cache‑friendly memory layout.  
- **Scalability:** RDBMS sharding is manual; vector engines provide automatic partitioning, replication, and GPU acceleration out of the box, scaling to billions of vectors with sub‑millisecond queries.  
- **Consistency vs. Availability:** Vector DBs relax strict ACID guarantees in favor of eventual consistency, acceptable for read‑heavy AI inference.

**Edge Cases**  
- Extremely low dimensional data (≤3) where exact kNN is trivial—RDBMS could suffice.  
- Workloads demanding strong transactional guarantees (e.g., financial records) are better served by a general DB.  
- Frequent bulk updates or deletes can degrade ANN index quality; periodic re‑indexing may be required.

**Optimize & Communicate**  
To persuade stakeholders, present benchmark tables: latency vs. recall for 1M vectors on CPU/GPU, cost per query, and storage overhead. Emphasize that the trade‑off—slightly lower exactness for massive speed gains—is justified in recommendation engines, semantic search, or anomaly detection where approximate results are acceptable. Conclude by recommending a hybrid architecture: store raw data in an RDBMS, push embeddings to a vector DB for inference, and sync periodically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
