---
qid: ing_42c7a95268__faang__local
question: 'Explain: Read Replicas for Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 479
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:24-05:00'
sources: []
---

**Clarify**  
You’re asking how a production‑ready Retrieval Augmented Generation (RAG) system can scale its retrieval layer using read replicas. I’ll assume we have:  
1. A large vector index (e.g., Faiss/PGVector).  
2. A stateless query API that must serve millions of requests per day.  
3. The need for high availability and low latency.  

**Approach**  
1. **Separate read/write clusters** – write traffic (index updates) goes to the primary; all queries hit read replicas.  
2. **Synchronous or near‑synchronous replication** – keep replicas fresh enough that stale vectors don’t hurt relevance.  
3. **Load‑balancing and query routing** – round‑robin or consistent hashing across replicas.  

**Depth**  
- *Replication strategy*: use PostgreSQL with `pglogical` for logical replication of vector tables, or a dedicated vector DB that supports multi‑master read scaling (e.g., Milvus).  
- *Staleness trade‑off*: set a 100 ms window—any query served from a replica older than that will fall back to the primary.  
- *Caching*: keep top‑k vectors in an LRU cache per replica to shave latency further.  
Complexity: O(log N) search on each replica; total cost scales linearly with number of replicas but writes still hit one node.

**Edge Cases**  
- **Hot updates**: a burst of insertions can temporarily increase staleness; monitor lag and throttle writes if needed.  
- **Replica failure**: ensure automatic failover to another replica without downtime.  
- **Data consistency**: test that the same query returns identical top‑k across replicas after replication.

**Optimize & Communicate**  
Explain that read replicas decouple read traffic from write bottlenecks, allowing horizontal scaling of latency‑critical retrieval while keeping a single source of truth for updates. Highlight monitoring metrics (replication lag, cache hit ratio) and how you’d iterate on the staleness window based on user feedback. This shows structured thinking, depth in system design, and an eye toward operational excellence—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
