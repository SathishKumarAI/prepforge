---
qid: ing_4dd13fd8be__faang__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 528
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:42-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a real‑time comment system that lets a user *write locally* (draft, optimistic UI) and then *read globally* (other users’ comments). Assumptions:  
- Write throughput ≈ 10k writes/s, read ≈ 50k reads/s.  
- Latency < 200 ms for reads, < 500 ms for writes.  
- Comments are immutable once posted; editing is rare.  

**2️⃣ Approach**  
1. **Client side:** optimistic UI → post to local buffer and fire async POST.  
2. **Backend API:** REST/GraphQL + WebSocket for real‑time push.  
3. **Storage layer:**  
   - *Write path:* Kafka → dedup & validation microservice → Cassandra (wide‑row key: `(post_id, ts)`), write‑optimized.  
   - *Read path:* Cassandra + materialized view per `post_id` for hot reads; cache in Redis (TTL 5 min).  
4. **Pub/Sub:** Post‑commit Kafka topic → WebSocket service pushes new comments to subscribed clients.  

**3️⃣ Depth**  
- **Consistency:** Eventual consistency acceptable; use `cassandra`’s tunable consistency (`QUORUM`).  
- **Scalability:** Partition by `post_id` shards → linear scaling.  
- **Latency:** Write: 1–2 ms to Kafka, ~50 ms to Cassandra. Read: cache hit < 5 ms; DB fallback ~30 ms.  
- **Fault tolerance:** Kafka replicas + dual writes to backup DB (PostgreSQL) for recovery.

**4️⃣ Edge Cases**  
- *Duplicate posts:* dedupe service checks hash of content+user+timestamp.  
- *Large comment bursts:* backpressure via Kafka consumer lag metrics; auto‑scale consumer pods.  
- *Offline users:* client buffers until reconnection; conflict resolution by server timestamp.

**5️⃣ Optimize & Communicate**  
Future optimizations: use Bloom filters to skip missing `post_id` reads, compress comment payloads, implement a CDN edge cache for static pages. I’d narrate the design in incremental layers—client → API → storage → real‑time push—highlighting trade‑offs (latency vs consistency) and how each component satisfies FAANG scalability criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
