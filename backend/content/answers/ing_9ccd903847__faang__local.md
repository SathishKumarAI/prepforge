---
qid: ing_9ccd903847__faang__local
question: 'Explain: Content Delivery Network (CDN) — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:38-05:00'
sources: []
---

**Clarify**  
A CDN is a distributed network that caches and serves web content closer to users. I’ll assume we’re talking about static assets (images, JS/CSS) and the goal is low latency + high throughput.

**Approach**  
1. Outline core components: edge nodes, origin servers, cache eviction, routing.  
2. Explain how requests flow, cache hit/miss logic, and consistency models.  
3. Touch on load‑balancing, failover, and security (TLS, WAF).

**Depth**  
- **Edge Nodes**: Thousands of geographically dispersed points of presence (PoPs). Each stores a local cache keyed by URL + query string.  
- **Routing**: DNS or Anycast directs the client to the nearest PoP; if unavailable, traffic falls back to another node.  
- **Cache Hit**: Edge serves content instantly, reducing round‑trip time from ~200 ms (origin) to <20 ms.  
- **Cache Miss**: Edge fetches from origin, stores a copy, and streams to the client.  
- **Eviction & Purge**: LRU or TTL policies; API allows purging specific URLs.  
- **Consistency**: Stale‑while‑revalidate or cache‑control headers let us balance freshness vs latency.  
- **Security**: HTTPS termination at edge, optional WAF, and token‑based signed URLs for private content.

**Edge Cases**  
- Dynamic, per‑user content can’t be cached; fallback to origin.  
- Highly volatile TTLs lead to cache thrashing—needs careful tuning.  
- Global outages require multi‑region failover logic.

**Optimize & Communicate**  
To improve, we could use machine learning for predictive caching (e.g., anticipate popular items before they hit the edge) and real‑time analytics to adjust TTLs per region. I’d present this as a trade‑off: higher cache hit rate vs increased cache storage cost. This structured walk‑through demonstrates clear problem framing, technical depth, and consideration of real‑world constraints—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
