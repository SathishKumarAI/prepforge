---
qid: ing_63815514fa__think__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 508
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:36:40-05:00'
sources: []
---

**Thought Process Outline**

1. **Clarify Scope & Assumptions**  
   - *What* is asked: a high‑level design of the CDN layer that serves Spotify’s audio streams to millions worldwide.  
   - *Assume*: we have existing storage (object store), origin servers, and a global user base; focus on latency, scalability, cache hit ratio, and cost.  

2. **Adopt a Design Framework**  
   - Use the classic “What‑If” model:  
     1. *Identify requirements* (low latency, high throughput, fail‑over).  
     2. *Define constraints* (cost, data consistency, legal compliance).  
     3. *Select architectural primitives* (edge cache nodes, pull vs push, CDN vendor or self‑hosted).  

3. **Step‑by‑Step Reasoning**  
   - Map user request → nearest edge node.  
   - If hit: serve locally; if miss: fetch from origin, store locally for future hits.  
   - Consider caching strategies (LRU, TTL per track popularity).  
   - Handle dynamic content: use signed URLs or token‑based access to enforce DRM.  
   - Add load balancing across edge nodes, health checks, and graceful degradation.  

4. **Avoid Common Traps**  
   - Don’t ignore cache invalidation; stale tracks must be refreshed.  
   - Avoid over‑engineering with too many edge locations—balance granularity vs operational overhead.  
   - Beware of “cache stampede” when a popular track first misses everywhere; use request coalescing or distributed locks.  

5. **Sanity‑Check & Communicate**  
   - Verify that latency targets (≤ 100 ms for 90th percentile) are achievable with the chosen edge density.  
   - Estimate cost: compute per‑GB bandwidth, storage at edges, and compare to CDN vendor pricing.  
   - Explain trade‑offs clearly when presenting: e.g., “If we push all tracks to every edge, hit ratio is near 100 % but cost skyrockets.”  

Follow this scaffold each time you tackle a system‑design question; it keeps your reasoning organized and ensures you cover the critical dimensions of scalability, performance, reliability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
