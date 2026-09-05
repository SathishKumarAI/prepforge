---
qid: ing_884b57ff56__star__local
question: 'Explain: 5.4 Get a Post by ID — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 377
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:06-05:00'
sources: []
---

**Situation:**  
During my internship at a social‑media startup, we were scaling the photo feed to support millions of daily users. A key feature was an API endpoint for retrieving a single post by its ID – something our existing monolith handled in seconds but started lagging as data grew.

**Task:**  
I needed to redesign “Get Post by ID” so it could return results in <200 ms, even under peak load (10k requests/sec), while ensuring eventual consistency across replicas and minimizing hot‑spot traffic on the database.

**Action:**  
1. Introduced a partitioned key‑value store: each post’s ID was hashed to a shard; we used Redis as an LRU cache layer with 95 % hit rate for popular posts.  
2. Implemented asynchronous read‑repair via Kafka: after fetching from the cache, a background consumer refreshed stale data in Cassandra without blocking the user request.  
3. Added CDN edge caching for media URLs and pre‑computed engagement metrics stored in Elasticsearch to offload heavy joins.  
4. Employed rate limiting per IP using Envoy’s Lua filter to protect against spikes.

**Result:**  
Latency dropped from 1.2 s to 180 ms average, with a 99th percentile under 250 ms during traffic bursts. Cache hit ratio climbed to 92 %, cutting database reads by 70 %. The system now comfortably supports our projected 50 M active users while keeping the API cost‑efficient and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
