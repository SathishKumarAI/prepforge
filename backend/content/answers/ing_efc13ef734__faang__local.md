---
qid: ing_efc13ef734__faang__local
question: 'Explain: Metadata Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:53-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *Metadata‑Traffic* service for Spotify – the system that streams song/artist/album metadata (e.g., title, cover art, duration) to client apps with low latency and high throughput.  
Assumptions:  
- 10⁶+ concurrent users, each request ~100 B.  
- Metadata changes infrequently but must propagate within seconds.  
- Strong consistency for a user’s “now‑playing” view is required.

**2️⃣ Approach**  
1. **API layer** → load‑balanced front‑ends (Nginx + Envoy).  
2. **Cache hierarchy**:  
   - L1: In‑memory per‑region CDN cache (Redis Cluster).  
   - L2: Global distributed key‑value store (Cassandra/Scylla) for persistence.  
3. **Change‑feed**: Kafka topic “metadata‑updates” that propagates to all caches via a background consumer.  
4. **TTL & versioning**: Store ETag/version in cache; client passes If‑None‑Match to avoid stale data.

**3️⃣ Depth**  
- *Read path*: Client → CDN cache → if miss, backend fetches from Cassandra (single read). Latency < 50 ms.  
- *Write path*: Admin UI updates metadata → writes to Kafka + Cassandra; consumers update caches instantly (≈100 ms propagation).  
- Complexity: O(1) reads/writes on average.  
- Trade‑offs: Consistency vs latency – we favor eventual consistency for non‑critical data, strict for “now‑playing”.

**4️⃣ Edge Cases**  
- Cache stampede on popular tracks → use cache‑aside locking (RedLock).  
- Network partition → Cassandra quorum ensures availability.  
- Massive concurrent updates during a release → backpressure on Kafka.

**5️⃣ Optimize & Communicate**  
Future work:  
- Use CDN edge nodes to offload latency for global users.  
- Apply Bloom filters at front‑end to avoid unnecessary cache lookups.  
- Monitor cache hit ratio and auto‑scale Redis shards.  

This design balances speed, scalability, and consistency—key metrics that FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
