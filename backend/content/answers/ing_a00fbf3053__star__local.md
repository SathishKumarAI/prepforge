---
qid: ing_a00fbf3053__star__local
question: Why Not General Databases? — Vector Databases
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 380
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:23-05:00'
sources: []
---

**Situation:**  
When I joined a startup developing a real‑time recommendation engine for e‑commerce, our data team was storing user interaction logs in a traditional relational database. The product managers needed to surface personalized product bundles within 150 ms for millions of concurrent users.

**Task:**  
I had to design a system that could perform semantic similarity searches on high‑dimensional embeddings (512‑D) and scale to billions of vectors while keeping latency under 200 ms per request.

**Action:**  
I evaluated our current RDBMS and discovered it lacked efficient nearest‑neighbor indexing for dense vectors. I introduced an open‑source vector database, Milvus, which offers HNSW and IVF indexes. I migrated the embeddings from PostgreSQL to Milvus, scripted batch upserts with `pymilvus`, and tuned the `efConstruction`/`m` parameters to balance recall (93%) against query speed (170 µs per 1k vectors). To maintain consistency, I built a lightweight sync service that updated Milvus whenever new interactions were inserted into our PostgreSQL log. The team also added a cache layer with Redis for the top‑10 results.

**Result:**  
Query latency dropped from ~1.2 s to <200 ms, and recall improved by 12% compared to the old RDBMS approach. We processed over 5 billion vectors daily with sub‑millisecond query times, enabling live recommendation personalization at scale. This experience taught me that specialized vector stores are essential when semantic similarity is a core requirement; general databases simply cannot match their performance or scalability for high‑dimensional AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
