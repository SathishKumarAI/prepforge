---
qid: ing_f449701445__faang__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 460
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:32-05:00'
sources: []
---

**Clarify**  
We need a URL‑shortening service that stores mappings for *at least five years*.  
Assumptions:  
- High read/write traffic (millions of hits/day).  
- Each shortened URL should resolve in < 200 ms.  
- Persistence across failures, with eventual consistency acceptable for writes.

**Approach**  
1. **API layer** – REST/GRPC endpoints: `POST /shorten`, `GET /{code}`.  
2. **Short code generation** – random 6‑char alphanumerics; on collision, retry.  
3. **Storage tiering** – hot cache + durable store.  

**Depth**  
- **Cache (Redis)**: key=`code`, value=`longURL`; TTL set to a few days; eviction by LRU.  
- **Primary DB (Cassandra/Spanner)**: partition key=`code`; columns `url, created_at, expires_at`.  
  *Schema*: `CREATE TABLE urls (code TEXT PRIMARY KEY, url TEXT, created TIMESTAMP, expires TIMESTAMP);`  
  Write path: cache → DB (async). Read path: cache → DB fallback.  
- **Background job**: nightly scan for `expires < now()` and delete from DB; GC on cache auto‑evicts.  
- **Scalability**: horizontal scaling of API & cache; Cassandra’s tunable consistency (`QUORUM` for writes, `ONE` for reads).  

**Edge Cases**  
- Collision in code generation → retry until free.  
- Cache miss after DB delete (race) → return 404.  
- Clock skew between services → use monotonic time or NTP sync.  

**Optimize & Communicate**  
- Use CDN edge nodes to cache GET responses, reducing latency.  
- Monitor write latency; if spikes, shift to batch writes.  
- Explain trade‑offs: higher consistency costs more latency; eventual consistency is acceptable for a URL shortener.  
- Highlight that the 5‑year retention drives schema design (TTL column) and background cleanup strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
