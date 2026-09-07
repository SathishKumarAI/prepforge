---
qid: ing_e3196b6fad__faang__local
question: 'Explain: Endpoint: GET /{short_code} — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 568
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:18-05:00'
sources: []
---

**Clarify**  
We need a public REST endpoint `GET /{short_code}` that resolves a user‑supplied short code (e.g., `abc123`) to the original long URL and redirects the client.  
Assumptions:  
- The service is globally distributed, high traffic (~10⁶ requests/sec).  
- Persistence must be highly available; read‑heavy workload.  
- Latency target < 100 ms for a redirect.  
- Short codes are opaque alphanumerics of length 6–8.

**Approach**  
1. **API layer** – lightweight HTTP gateway (NGINX/Envoy) → stateless microservice.  
2. **Caching tier** – in‑memory distributed cache (Redis Cluster / Memcached).  
3. **Persistent store** – NoSQL key‑value DB (Cassandra or DynamoDB) for durability and partition tolerance.  
4. **Background job** – periodically sync cache with DB, handle evictions.  
5. **Monitoring & metrics** – request latency, hit/miss ratios.

**Depth**  
```text
GET /{short_code}
   ├─ Validate format (regex)
   ├─ Lookup in Redis (GET short_code → long_url)
   │     └─ Cache hit → return 302 Location: long_url
   │     └─ Cache miss → read from DB (SELECT * WHERE pk=short_code)
   │         └─ If found, write to Redis, redirect
   │         └─ Else, 404 Not Found
```
- **Cache size** ≈ 1 B entries × 100 bytes = 100 GB; split across 64 shards → ~1.5 GB per node.  
- **Consistency**: eventual consistency is acceptable for redirects.  
- **Scaling**: add Redis nodes or use cluster mode; DB partitions automatically.

**Edge Cases**  
- Invalid code format → 400 Bad Request.  
- Expired or deleted URLs → 410 Gone.  
- Cache stampede on hot keys → implement cache‑aside with locking (e.g., RedLock).  
- Rate limiting per IP to mitigate abuse.  

**Optimize & Communicate**  
- **Performance**: pre‑warm Redis, use pipelining for bulk lookups during traffic spikes.  
- **Cost**: store only popular URLs in cache; cold data stays in cheaper DB tier.  
- **Observability**: expose hit/miss metrics to trigger auto‑scaling of cache nodes.  

This architecture balances low latency, high availability, and cost while keeping the code path minimal for a redirect service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
