---
qid: ing_b045a674d6__faang__local
question: 'Explain: Requirements Gathering — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 609
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:13-05:00'
sources: []
---

**Clarify**  
You’re asked to design a **Spotify‑style music streaming service** during a system‑design interview.  
Key requirements:  

1. *Core features*: search, playback, playlists, recommendations.  
2. *Scalability*: millions of concurrent users, billions of songs.  
3. *Latency*: < 200 ms for search & play.  
4. *Reliability*: 99.9 % uptime, graceful degradation.  
5. *Data integrity*: user data privacy, GDPR compliance.  

Ask clarifying questions: cache size limits, regional constraints, offline mode, and whether we need a recommendation engine or just playback.

---

**Approach**  

1. **High‑level architecture** – microservices (Auth, Catalog, Playback, Recommendation).  
2. **Data layer** – read‑heavy catalog in a distributed search index (Elasticsearch), user profiles in NoSQL (Cassandra).  
3. **Storage** – object store for audio (S3 + CDN) with regional edge caching.  
4. **Streaming** – adaptive bitrate via HLS/DASH, load balancer to regionally optimal edge nodes.  
5. **API gateway** – rate limiting, auth, request routing.

---

**Depth**  

- *Search*: Elasticsearch shards indexed by title/artist; use query‑by‑field and autocomplete.  
- *Playback*: Client pulls a playlist of chunk URLs from CDN; server updates play counters via Kafka stream to analytics.  
- *Recommendation*: Offline batch job (Spark) builds collaborative filtering model; results served through cache (Redis).  
- *Consistency*: eventual consistency for likes/playlist edits, strong consistency for authentication tokens.

**Complexities**: O(log n) search, O(1) CDN fetch, O(k log k) recommendation lookup.  

---

**Edge Cases**  

- Sudden traffic spike → auto‑scale microservices; pre‑warm CDN caches.  
- Cache miss in catalog → fallback to DB query with circuit breaker.  
- Network partition: playback continues from last buffered chunk.  

Testing: load tests (30 k QPS), chaos engineering on auth service, GDPR data deletion audit.

---

**Optimize & Communicate**  

1. **Caching strategy** – CDN + Redis for hot playlists; evict least‑recently used after 24 h.  
2. **Rate limiting** – per‑user quota to protect from abuse.  
3. **Observability** – distributed tracing (OpenTelemetry), metrics dashboards, alerting on latency > 200 ms.

Explain trade‑offs: stronger consistency → higher latency; eventual consistency gives better performance but requires careful handling of stale reads. Conclude by summarizing how each component meets the scalability, reliability, and user experience goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
