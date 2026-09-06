---
qid: ing_cd0cbabc03__fp__local
question: 'Explain: Q64: Design a semantic cache that actually works in production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 501
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:11-05:00'
sources: []
---

### Why a semantic cache is needed  
In an AI‑driven service every request triggers a costly inference pipeline (tokenization, embedding, retrieval, model call). The *semantic* part—matching user intent to stored knowledge—is the bottleneck because it requires high‑dimensional similarity search. If we could reuse past embeddings and their associated outputs, latency drops from milliseconds to microseconds.

### Core principle: locality of semantic queries  
User intents in a production workload are highly correlated over time (e.g., “how do I reset my password?” appears repeatedly). This *semantic locality* means that the same high‑dimensional vector is queried many times. Therefore, instead of recomputing similarity from scratch, we can cache **embedding → response** pairs.

### Design elements  

| Layer | Function | Why it works |
|-------|----------|--------------|
| **Embedding Store** | Persist embeddings in a vector DB (FAISS/HNSW) | Enables exact‑nearest neighbor lookup with sub‑ms latency. |
| **Response Cache** | LRU‑evicted map of embedding hash → full response | Keeps the expensive inference output ready for identical queries. |
| **Hash‑based Coalescing** | Hash embeddings to a bucket, then apply cosine threshold | Reduces false negatives: near‑duplicate intents fall into same cache slot. |
| **Versioning & Invalidation** | Tag each cached pair with model version and data hash | Guarantees that stale knowledge is purged automatically when the underlying model or training corpus changes. |

### Non‑obvious insight  
The *bottleneck* isn’t the similarity search but the *serialization* of high‑dimensional vectors to disk/CPU memory. By keeping embeddings in a compact binary format and reusing them across requests, we avoid repeated floating‑point conversions—a hidden cost that dominates when scaling to millions of queries per second.

### Production‑ready workflow  
1. **Query** → compute embedding.  
2. **Lookup** in hash cache; if hit, return stored response.  
3. If miss, perform vector DB search → run inference → store pair.  

With this pipeline, the semantic cache turns an *O(N)* similarity problem into an *O(1)* dictionary lookup for most traffic, yielding consistent latency and linear scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
