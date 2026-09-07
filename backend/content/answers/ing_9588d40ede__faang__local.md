---
qid: ing_9588d40ede__faang__local
question: 'Explain: Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 517
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:31:47-05:00'
sources: []
---

**Clarify**  
A CDN is a distributed network that caches content closer to end‑users, reducing latency and load on origin servers. I’ll assume we’re designing for high read traffic, dynamic/static mix, global reach, and fault tolerance.

**Approach**  
1. **Requirements & constraints** – low RTT, 99.9 % availability, cache hit rate > 90 %, support HTTP/HTTPS, edge compute (e.g., Lambda@Edge).  
2. **Topology** – hierarchical: origin → regional PoPs → edge nodes; use Anycast IPs for routing.  
3. **Caching strategy** – LRU with TTL from origin headers; cache‑aside + prefetch for popular objects.  
4. **Cache invalidation** – publish “purge” messages via a pub/sub (Kafka/Redis) to PoPs.  
5. **Load balancing & failover** – Anycast + health checks, automatic reroute on node failure.  
6. **Metrics & monitoring** – hit/miss ratio, latency, error rates; feed into autoscaling.

**Depth**  
- *Routing*: DNS round‑robin + GeoIP to select nearest PoP; use edge routers with BGP Anycast for rapid failover.  
- *Cache storage*: SSD‑backed key‑value store (e.g., RocksDB) per node; size capped by memory, eviction policy LRU+LFU hybrid.  
- *Consistency*: eventual consistency—purge messages are broadcast to all PoPs with a version tag; stale data expires via TTL.  
- *Security*: TLS termination at edge, origin auth headers, WAF integration.  
- *Scalability*: add PoPs in under‑served regions, auto‑scale storage nodes based on traffic spikes.

**Edge cases**  
- Rapid content updates → high purge traffic; mitigate with versioned URLs or signed URLs.  
- Global denial‑of‑service → distributed rate limiting per edge node.  
- Mixed static/dynamic content: dynamic parts bypass cache or use edge compute to generate responses.

**Optimize & communicate**  
Explain trade‑offs: Anycast gives low latency but complicates routing; LRU is simple yet may evict hot items—hence hybrid LFU/​LRU. Highlight how monitoring informs cache sizing and purge strategies. Conclude with a diagram of the topology and a short demo of request flow to illustrate reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
