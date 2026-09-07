---
qid: ing_6344e2dceb__faang__local
question: 'Explain: Software and Game Downloads — Content Delivery Network (CDN) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 586
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:19-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a CDN for large‑scale software/game downloads that delivers high throughput, low latency, and strong consistency across global users while handling millions of concurrent requests.  
*Assumptions to confirm:*  
- Typical payload size (≈ 2–10 GB).  
- Peak traffic window (e.g., launch day).  
- SLA: 99.9 % uptime, ≤ 200 ms average latency for 90 % of users.  
- Data immutability vs. frequent patch releases.

**2️⃣ Approach**  
1. **Edge caching layer** – replicate popular assets to edge nodes near users.  
2. **Origin backend** – durable object store (S3/Blob) + compute for dynamic metadata.  
3. **Load balancer & request routing** – use anycast IPs and GeoDNS.  
4. **Cache invalidation & versioning** – signed URLs with expiration, immutable content hashes.  
5. **Metrics & autoscaling** – real‑time monitoring (latency, error rates) to spin up edge nodes.

**3️⃣ Depth**  
- *Edge cache*: Use a consistent hashing ring; store objects in LRU buckets; fetch from origin on miss via HTTP/2 with pipelining.  
- *Consistency*: Leverage immutable object keys (`app-v1.0.zip`) → no stale data.  
- *Scalability*: Each edge node serves up to 10 Gbps; autoscale based on request rate and bandwidth usage.  
- *Complexity*: O(1) lookup per request; network hop count ≤ 2 (client→edge, edge→origin).  
- *Trade‑offs*: Larger cache hit ratio vs. higher storage cost at edges.

**4️⃣ Edge Cases**  
- **Sudden traffic spike**: burst protection + rate limiting.  
- **Edge node failure**: fallback to nearest healthy node via health checks.  
- **Large object uploads**: use multipart upload and CDN‑aware presigned URLs.  
- **Security**: enforce TLS 1.3, HSTS, and token‑based access control.

**5️⃣ Optimize & Communicate**  
- *Performance*: Enable HTTP/2 multiplexing; compress headers; prefetch adjacent chunks.  
- *Cost*: Use tiered storage (hot at edges, cold in origin).  
- *Monitoring*: Alert on cache miss rates > 30 % to trigger re‑distribution.  

Narrate decisions by linking them back to SLAs and user impact: “We chose immutable keys because any update would otherwise cause a cache stampede, directly hurting our 99.9 % uptime target.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
