---
qid: ing_35f1b747e4__faang__local
question: 'Explain: 5.1 SQL vs NoSQL — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 523
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:33-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *URL shortener* (think bit.ly).  Core requirements:  
- Extremely high write/read throughput.  
- Extremely low latency (< 10 ms).  
- Strong consistency for user‑generated links; eventual consistency acceptable for read‑heavy traffic.  
- Scalability, fault tolerance, and minimal storage cost.

**Approach**  
1. **API layer** – stateless REST/GRPC endpoints (POST `/shorten`, GET `/:id`).  
2. **Data model** – each record: `{id: PK, long_url, user_id?, created_at}`.  
3. **Storage choice** – hybrid:  
   - **NoSQL** (e.g., DynamoDB / Cassandra) for the key‑value store of id → long_url (high write throughput, horizontal scaling).  
   - **Relational** (PostgreSQL) only if we need ACID guarantees on user metadata.  
4. **Key generation** – base‑62 counter or hash‑based algorithm with collision detection; store counter in a distributed atomic service (Redis + Lua).  
5. **Caching** – CDN edge cache for hot URLs, Redis/Memcached near the API tier for read amplification.  
6. **Consistency & TTL** – eventual consistency on reads; optional `READ_REPAIR` or background job to reconcile stale entries.

**Depth**  
- Write path: client → API → atomic counter → generate id → store in NoSQL (async write).  
- Read path: API checks cache → if miss, fetch from NoSQL.  
- Complexity: O(1) for CRUD; storage cost ≈ bytes per record + cache overhead.  
- Failure modes: counter wrap‑around, hash collisions → resolve via retry with new seed.

**Edge Cases**  
- Duplicate URLs: dedupe by checking hash before insert.  
- Extremely popular links causing cache stampede – use *cache aside* with lock.  
- Service partitioning: ensure consistent hashing for NoSQL to avoid hotspots.

**Optimize & Communicate**  
Explain trade‑offs: NoSQL gives scale but weaker consistency; adding a relational layer adds complexity but solves user‑profile joins. Emphasize observability (metrics on cache hit rate, latency) and autoscaling triggers. Conclude with a diagram of layers and data flow to show clear end‑to‑end design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
