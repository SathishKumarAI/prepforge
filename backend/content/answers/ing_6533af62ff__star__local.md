---
qid: ing_6533af62ff__star__local
question: 'Explain: Various Search-DBs — Search Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 329
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:05-05:00'
sources: []
---

**Situation:**  
When building a recommendation engine for an e‑commerce startup, our data science team needed to serve product embeddings at sub‑millisecond latency. The existing relational database was fine for transactional data but couldn’t handle vector similarity queries efficiently.

**Task:**  
Identify and integrate a search‑optimized database that could store high‑dimensional vectors, support approximate nearest neighbor (ANN) searches, and scale with our user base of 5 M monthly active users.

**Action:**  
I evaluated three candidates: **Elasticsearch**, **FAISS** integrated into a PostgreSQL extension, and **Milvus**. I benchmarked each on 1 M product vectors using cosine similarity. Elasticsearch required custom scripts for ANN and had 12 ms query latency; FAISS in Postgres gave 4 ms but limited scalability; Milvus delivered 2 ms with GPU acceleration and a clean REST API. I migrated the embedding table to Milvus, set up sharding across two nodes, and wrote a microservice in Go that queried Milvus and cached top‑10 results in Redis.

**Result:**  
Query latency dropped from ~12 ms to ~2 ms, improving conversion rates by 7 %. The migration also cut infrastructure costs by 15 % because Milvus leveraged our existing GPU nodes. I learned the importance of aligning database choice with specific ML workloads and the value of running real‑world benchmarks before adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
