---
qid: ing_16735ab460__fp__local
question: Do we need a dedicated vector database, or is pgvector enough? How do you
  decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 530
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:20-05:00'
sources: []
---

**From the problem to the solution**

The core task is *nearest‑neighbour search (NNS)* over a set of \(d\)-dimensional vectors.  
Formally, given a query vector \(q\) we need \(\arg\min_{x_i}\|q-x_i\|\).  
Any database that can answer this efficiently must:

1. **Store** the vectors in a contiguous block (cache‑friendly).  
2. **Index** them so that only a tiny fraction of the space is examined per query.  
3. **Update** the index when vectors are inserted/updated without full rebuilds.

pgvector satisfies (1) and (2) for *small* workloads: it uses GiST/LTree‑like indexes, which are good up to ~10 M vectors and 512‑dim embeddings. The cost is that PostgreSQL’s query planner must traverse the entire index tree per request; its I/O patterns are not tuned for high‑throughput NNS.

A dedicated vector DB (Milvus, Pinecone, Qdrant…) optimises all three aspects:

* **Memory‑mapped flat storage** → zero copy and sub‑MS latency.  
* **IVF/HNSW/FAISS backends** that prune the search space exponentially with dimension.  
* **Hybrid persistence**: SSD for hot data, RAM for recent queries.

**How to decide**

| Criterion | pgvector | Dedicated DB |
|-----------|----------|--------------|
| Scale (vectors) | ≤ 10M | > 10M, billions |
| Latency per query | 5–20 ms | < 1 ms |
| Write churn | high insert/update cost | incremental updates |
| Operational complexity | low (PostgreSQL) | higher (cluster management) |

**Non‑obvious insight**

The *effective dimensionality* of your embeddings matters more than raw \(d\). If the vectors lie on a low‑dim manifold, a simple LSH scheme in pgvector can rival a full‑blown HNSW index. Thus, before buying a dedicated DB, profile the intrinsic dimension; you might squeeze performance out of PostgreSQL with dimensionality reduction (PCA/UMAP) and careful indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
