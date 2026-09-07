---
qid: ing_09a13916b5__faang__local
question: 'Explain: And if it is then go and — System Design: Content Delivery Networks
  (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 472
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:48-05:00'
sources: []
---

**Clarify**

We’re asked to design a *simplified* CDN that can deliver content quickly, reliably, and cost‑efficiently at scale.  
Assumptions I’d confirm:  
- Traffic is read‑heavy (static assets).  
- Latency matters more than absolute throughput.  
- We need multi‑region coverage and graceful failover.  

**Approach**

1. **Edge caching layer** – deploy edge nodes in major ISPs or cloud regions.  
2. **Global load balancer** – route requests to the nearest node (geo‑DNS + health checks).  
3. **Cache hierarchy** – LRU eviction, versioned keys, and a shared object store (S3/Blob) as origin.  
4. **Dynamic content handling** – edge functions or a pull‑through cache for personalized data.  
5. **Security & rate limiting** – TLS termination, WAF rules at the edge.

**Depth**

- *Cache hit ratio*: Target >90% by using CDN analytics to refresh stale objects.  
- *Consistency*: Use ETag/If‑None‑Match to validate against origin; async background revalidation for large assets.  
- *Scalability*: Each edge runs horizontally (stateless); autoscale based on request rate.  
- *Cost*: Store hot data in memory (Redis) at edges, cold data in cheaper object storage.  
- Complexity: O(1) lookup per request; cache invalidation is O(log n) with a priority queue.

**Edge Cases**

- Sudden traffic spikes → edge auto‑scale triggers.  
- Origin outage → stale‑content fallback or “soft” 503 with retry after.  
- Content updates → versioned URLs to avoid cache poisoning.

**Optimize & Communicate**

Explain that the key trade‑off is between *freshness* and *latency*: we favor latency by caching aggressively, but keep a background revalidation pipeline for consistency. Mention potential improvements: integrating ML to predict hot objects per region or using real‑time analytics to pre‑warm caches before a burst. Conclude with how this design meets the FAANG expectations of scalability, reliability, and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
