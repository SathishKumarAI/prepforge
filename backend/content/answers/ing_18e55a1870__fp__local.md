---
qid: ing_18e55a1870__fp__local
question: 'Explain: Video and Audio Streaming — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 397
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:55-05:00'
sources: []
---

**Why a CDN is indispensable for media delivery**

The core problem: *high‑bandwidth, low‑latency content must reach millions of geographically dispersed users*.  
1. **Bandwidth bottleneck** – The origin server can’t sustain the aggregate data rate; each request would traverse congested backbone links.  
2. **Latency constraint** – Human perception tolerates only ~100 ms for interactive streaming; round‑trip time grows with distance.  

A CDN solves both by **redundant edge caching** and **geographic load balancing**:

| Principle | How it manifests |
|-----------|------------------|
| *Optimization (minimizing transmission cost)* | Place caches where user traffic density is highest; a weighted sum of hop‑costs vs. cache size drives placement. |
| *Information theory (redundancy minimization)* | Use delta‑encoding or content‑addressable storage so identical segments are stored once, reducing replication overhead. |
| *Geometry (distance minimization)* | Edge nodes form a Voronoi diagram over the user distribution; each request is routed to its nearest node. |

**Non‑obvious insight:**  
Caching alone isn’t enough—*dynamic tiered replication* is essential. Frequently requested “hot” segments are replicated aggressively across many edges, while “cold” content stays only at strategic hubs. This adaptive policy emerges naturally from a **rate–distortion trade‑off**: higher replication reduces distortion (latency), but incurs storage cost; the CDN optimizes this trade‑off per segment.

Thus, a CDN is not merely a copy of the origin; it’s an engineered network that balances bandwidth, latency, and storage through principled optimization, enabling seamless global media streaming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
