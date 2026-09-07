---
qid: ing_9e9599c0c4__faang__local
question: 'Explain: Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 523
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:40-05:00'
sources: []
---

**Vector Databases**

**Clarify**  
We’re asked to describe what a vector database is and why it matters for modern AI workloads. Key assumptions: the audience knows about embeddings (dense vectors) but not the storage layer that serves them efficiently at scale.

**Approach**  
1. Define the data model – high‑dimensional numeric vectors + optional metadata.  
2. Explain indexing strategies (brute‑force, IVF, HNSW, PQ).  
3. Highlight core operations: insert, delete, ANN query.  
4. Mention integration patterns with ML pipelines and use cases.

**Depth**  
A vector database stores *embeddings*—fixed‑length float arrays that encode semantic content. Unlike relational DBs, the key is a vector; queries request *nearest neighbors* (ANN) rather than exact matches.  

- **Indexing:**  
  - *Brute‑force* gives exact results but O(N D).  
  - *Product Quantization (PQ)* compresses vectors into codes for fast scan.  
  - *Hierarchical Navigable Small World (HNSW)* builds a graph that yields sub‑linear search with tunable recall.  
  - *Inverted File (IVF)* partitions space, then performs local ANN inside the relevant bucket.

- **Operations:**  
  - `INSERT(v, meta)` – add vector + optional key/metadata.  
  - `QUERY(q, k)` – return top‑k vectors with highest cosine/similarity.  
  - `DELETE(id)` – remove by unique ID.  

Typical latency <10 ms for millions of vectors; throughput is bounded by GPU/CPU and memory bandwidth.

**Edge Cases**  
- Extremely high dimensionality (>10K) can degrade ANN quality.  
- Dynamic updates may require re‑indexing in some engines.  
- Very sparse or categorical data isn’t well served by float embeddings.

**Optimize & Communicate**  
For production, combine a *fast* ANN index (HNSW) with a *durable* storage layer (e.g., RocksDB). Cache hot queries in memory and batch writes to amortize IO. When explaining, start with the problem of similarity search, show how vector DBs solve it, then walk through indexing choices, ending with trade‑offs between recall, latency, and cost. This narrative demonstrates clear structure, depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
