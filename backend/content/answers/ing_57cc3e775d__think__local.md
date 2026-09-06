---
qid: ing_57cc3e775d__think__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 483
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:47:42-05:00'
sources: []
---

**Metacognitive roadmap for explaining “Better Availability – CDN” in a system‑design interview**

1. **Clarify scope & assumptions**  
   • Ask whether the client cares about *latency*, *fault tolerance*, *cost*, or *regional compliance*.  
   • Assume a globally distributed user base, read‑heavy traffic, and that the backend is eventually consistent.

2. **Choose a mental model**  
   • Treat the CDN as an *edge caching layer* between users and origin servers.  
   • Map it onto classic reliability concepts: *redundancy*, *failover*, *load balancing*, and *content freshness*.

3. **Step‑by‑step reasoning**  
   1. Identify critical assets (static assets, APIs).  
   2. Decide cache‑policy: TTL vs. ETag/Cache‑Control headers.  
   3. Place edge nodes in strategic regions; use a global load balancer to route traffic based on proximity and health checks.  
   4. Implement *origin failover*—if one origin goes down, CDN fetches from replicas.  
   5. Use *health probes* (ping/HTTP) and automated rollback for edge nodes.  
   6. Optimize for cost: tiered caching, request‑based pricing, and burst handling.

4. **Avoid common traps**  
   • Don’t conflate *latency reduction* with *availability*—a fast CDN that serves stale data isn’t truly available.  
   • Beware of “cache stampede” when many requests hit a cache miss; use distributed locking or single‑flight patterns.  
   • Ignore the cost of edge nodes in every region; balance coverage vs. budget.

5. **Sanity‑check & verbalize**  
   • Re‑state the trade‑offs: higher TTL → lower freshness but fewer origin hits, better availability.  
   • Verify that each design choice (edge placement, cache policy, health checks) directly addresses “availability”.  
   • Conclude with a quick recap: *Edge caching + global load balancing + automated failover = high availability for content delivery.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
