---
qid: ing_667bd3946b__faang__local
question: 'Explain: How It Works — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 512
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:41-05:00'
sources: []
---

**Clarify**  
We need a scalable, highly‑available URL shortener (e.g., bit.ly). Assume millions of requests per day, low latency (<50 ms), high write/read ratio, and eventual consistency for analytics.

**Approach**  
1. **API layer** – REST/GRPC endpoints: `POST /shorten`, `GET /{code}`.  
2. **Persistence** – Store `<code> → <longURL>` in a distributed key‑value store (Cassandra/DynamoDB).  
3. **Code generation** – Auto‑increment ID + Base62 encode, or hash‑based deterministic mapping with collision handling.  
4. **Routing** – Reverse proxy (NGINX/Envoy) routes `{code}` to the application; if hit in cache, redirect immediately.  
5. **Caching** – LRU cache (Redis) for hot URLs; CDN edge caching for redirects.  
6. **Analytics** – Append events to a Kafka topic → stream processor writes counts into a time‑series DB.

**Depth**  
- **Write path:** `POST` generates ID, encodes to Base62, stores in KV store, updates cache. Complexity O(1).  
- **Read path:** Cache hit → 200 OK; miss → fetch from KV, update cache, redirect. Latency ~10 ms.  
- **Scalability:** KV sharding + consistent hashing ensures linear growth. Replication gives HA.  
- **Reliability:** Use idempotent writes, retry on transient failures.

**Edge Cases**  
- ID collisions (hash‑based): rehash or fallback to random string.  
- Expired URLs: TTL in KV store; soft delete after analytics collection.  
- DDoS: rate limit per IP and per API key.  
- Data loss: cross‑region replication, backup snapshots.

**Optimize & Communicate**  
- **Hot URL cache eviction policy:** LFU for high‑traffic codes.  
- **Batch writes:** group inserts to KV store to reduce latency.  
- **Observability:** metrics (redirect rate, cache hit ratio), alerts on write failures.  

By layering stateless services, a distributed key‑value store, and an in‑memory cache with a robust analytics pipeline, the system meets FAANG standards for performance, reliability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
