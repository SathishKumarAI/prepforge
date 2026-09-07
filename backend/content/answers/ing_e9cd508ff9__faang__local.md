---
qid: ing_e9cd508ff9__faang__local
question: 'Explain: Used Laptops — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 535
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:25-05:00'
sources: []
---

**Clarify**  
The question asks for a concise design walkthrough of the *“Used Laptops”* system described in “Designing Data‑Intensive Applications.”  I’ll assume we need to support a global, high‑traffic marketplace where users can list laptops for sale, browse listings, and perform searches by brand, price, specs, etc., while keeping data consistent and scalable.

**Approach**  
1. Identify core entities: `User`, `Listing`, `Review`.  
2. Choose an architecture that separates read/write workloads (CQRS).  
3. Use a write‑through cache for fast inserts/updates.  
4. Store listings in a distributed SQL database for ACID guarantees; replicate via Raft or Paxos.  
5. Build a search index (e.g., Elasticsearch) from the transactional store using change‑data capture (CDC).  
6. Provide an API gateway with rate limiting, authentication, and request routing.

**Depth**  
- **Writes** go to PostgreSQL (or CockroachDB) → CDC stream → Kafka → Elastic Search for searchability.  
- **Reads** hit Elasticsearch first; if not found, fallback to the DB.  
- Use a cache layer (Redis) for hot listings and user sessions.  
- Partition listings by geographic region to reduce latency and shard load.  
- Employ eventual consistency between SQL and ES; reconcile via periodic jobs.

Complexities:  
- **Latency**: 2–3 ms reads, <200 ms writes.  
- **Consistency**: Strong on the DB side; read‑your‑writes guaranteed by session stickiness.  
- **Scalability**: Horizontal scaling of Kafka, ES shards, and cache nodes.

**Edge Cases**  
- Duplicate listings (deduplication logic).  
- Offline users: queue writes in Kafka until connectivity resumes.  
- Search latency spikes: auto‑scale ES nodes; use circuit breakers.

**Optimize & Communicate**  
I’d iterate on indexing strategy (compound vs. nested fields) to balance query speed and storage, and add a bloom filter for quick “not found” checks. In an interview I would sketch this architecture on paper, justify each component with trade‑off notes, and finish by summarizing expected throughput (e.g., 10k QPS per region) and resilience guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
