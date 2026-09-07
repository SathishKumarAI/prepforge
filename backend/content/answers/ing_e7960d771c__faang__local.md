---
qid: ing_e7960d771c__faang__local
question: 'Explain: Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 478
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:29-05:00'
sources: []
---

**Clarify**  
We’re asked how indexing fits into a machine‑learning (ML) system design. Clarifying: *Which data are indexed?* – feature tables, embeddings, metadata, or model artifacts? What queries need speed (e.g., nearest‑neighbor lookup, label retrieval)? And do we need distributed scalability or low latency for inference?

**Approach**  
1. Identify the search pattern (kNN, hash lookup, range).  
2. Choose an index type: inverted lists, B‑trees, LSH, HNSW, IVF for embeddings.  
3. Decide placement: on‑prem, cloud (S3 + DynamoDB), or specialized vector DB (Pinecone, Milvus).  
4. Integrate with the pipeline: indexing after training, updating in near real‑time.

**Depth**  
- **Inverted Index**: maps tokens → document IDs; good for sparse text features. Complexity O(log n) lookup.  
- **B‑Tree / R‑Tree**: balanced tree for numeric ranges; supports range queries.  
- **LSH/HNSW**: approximate kNN in high dimensions; sub‑linear time, memory ≈ 5–10× data size.  
- **Vector DBs**: expose REST/GRPC APIs, auto‑sharding, query latency < 50 ms for millions of vectors.  
Trade‑offs: exactness vs speed, memory overhead, consistency (eventual vs strong).  

**Edge Cases**  
- *Dimensionality explosion*: high‑dim embeddings blow up index size → dimensionality reduction or hashing.  
- *Data drift*: new classes require re‑indexing; schedule incremental updates.  
- *Cold start*: empty index – fallback to brute force for initial queries.

**Optimize & Communicate**  
Explain that we’ll monitor hit‑rate and latency, auto‑tune LSH parameters (bandwidth, hash count). For large scale, use distributed vector stores with sharding and replication to maintain 99.9 % availability. Summarize: proper indexing turns an otherwise linear inference cost into sub‑linear or constant time, enabling real‑time ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
