---
qid: ing_734c6ae4d2__faang__local
question: 'Explain: CDN Providers — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 421
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:13-05:00'
sources: []
---

**Clarify**  
The interviewee is asked to explain the role of CDN providers in a system‑design context. I’ll restate that a CDN is a distributed network of edge servers that cache and serve static or dynamic content closer to users, reducing latency and load on origin hosts. Key assumptions: we’re focusing on HTTP/HTTPS traffic, mainly static assets (images, JS/CSS), and the system must handle high read‑throughput with eventual consistency.

**Approach**  
1. Define CDN components (edge nodes, control plane, origin).  
2. Explain cache‑invalidation strategies (time‑to‑live, purges, versioning).  
3. Outline routing logic (geo‑based, latency‑aware, failover).  
4. Discuss integration with DNS and load balancers.

**Depth**  
- **Cache hit ratio & eviction:** LRU or LFU policies; impact on memory usage vs hit rate.  
- **Consistency model:** Stale reads acceptable for most assets; use versioned URLs to avoid stale content.  
- **Security:** TLS termination at edge, signed cookies/JWTs, DDoS protection via rate limiting.  
- **Metrics & observability:** Cache hit/miss rates, latency percentiles, error budgets.

**Edge Cases**  
- Rapidly changing dynamic content → fallback to origin or short TTLs.  
- Global outages → automatic failover to nearest healthy edge.  
- Large binary uploads exceeding cache size → bypass CDN for large files.

**Optimize & Communicate**  
I’d highlight trade‑offs: larger caches improve hit ratios but increase cost; stricter consistency reduces staleness but adds latency. I’ll mention that modern CDNs use machine‑learning routing to predict user proximity, and that edge computing (Lambda@Edge) can offload logic from the origin. Finally, I’d emphasize the importance of monitoring to iterate on cache policies—showing a clear feedback loop between metrics and configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
