---
qid: ing_6df412ab7c__faang__local
question: 'Explain: User Data — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 518
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:25-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a “User Data” subsystem for Spotify: store, update, and serve user profiles (playlists, preferences, listening history). Key assumptions:  
* Millions of active users → high read/write throughput.  
* Strong consistency needed for profile updates; eventual consistency acceptable for analytics.  
* Low latency (< 50 ms) for UI fetches.  

**2️⃣ Approach**  
1. **Data model** – UserID → Profile (immutable metadata + mutable activity).  
2. **Storage layers** –  
   * Primary store: distributed key‑value (Cassandra/Scylla) for fast CRUD on user rows.  
   * Secondary index tables for search (e.g., by email, name).  
3. **Caching** – L1 per‑request in-process; L2 distributed cache (Redis/Memcached) keyed by UserID.  
4. **Event sourcing** – Append‑only log (Kafka/Firestore) of actions to rebuild analytics and support audit.  
5. **API layer** – gRPC services with request batching, circuit breakers.  

**3️⃣ Depth**  
* **Read path**: Cache hit → return; miss → fetch from Cassandra (single partition read), populate cache. Latency ~10 ms.  
* **Write path**: Update profile in Cassandra (lightweight transaction) + publish event to Kafka for downstream services. Write latency ~20 ms.  
* **Scalability**: Partition by UserID hash; auto‑sharding keeps partitions balanced.  
* **Consistency**: Strong consistency on primary store; eventual consistency on analytics via stream processing.  

**4️⃣ Edge Cases**  
* Hot users → cache stampede – mitigate with request coalescing or per‑user lock.  
* Schema evolution (new fields) → use nullable columns and backward‑compatible serializers.  
* Data corruption → implement repair jobs that replay Kafka logs into Cassandra.  

**5️⃣ Optimize & Communicate**  
To reduce read latency, pre‑populate hot user profiles in Redis during peak hours. For write amplification, batch writes to Kafka per minute. I’d explain trade‑offs: stronger consistency costs higher write latency; eventual analytics trades freshness for throughput. Conclude with monitoring (latency dashboards) and A/B testing cache strategies before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
