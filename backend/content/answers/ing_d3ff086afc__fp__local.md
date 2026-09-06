---
qid: ing_d3ff086afc__fp__local
question: 'Explain: KeyCDN — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 548
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:56-05:00'
sources: []
---

### Why a CDN is Needed

The fundamental problem any web‑service faces is **latency + capacity**: users want instant responses, but servers can only serve a finite number of requests per second and must be geographically close to avoid long propagation delays.  
A Content Delivery Network (CDN) solves this by *spreading* static assets over many edge locations, each acting as a local cache that serves the nearest user.

### Core Design Principles

| Principle | Why it matters | How CDNs implement it |
|-----------|----------------|-----------------------|
| **Caching** | Reduces origin load and round‑trip time. | Edge nodes store objects keyed by URL + variant (headers, query). TTLs or ETag/Last‑Modified checks maintain freshness. |
| **Geographic placement** | Minimizes propagation delay. | Peers are placed in high‑traffic ISPs; a global map of IP prefixes guides routing. |
| **Anycast routing** | Fastest path to the nearest node. | All edge IPs share a single address; BGP selects the shortest AS‑path. |
| **Load balancing & failover** | High availability under spikes or outages. | Edge nodes maintain health checks and route traffic to healthy peers automatically. |
| **Security & DDoS mitigation** | Protect origin from malicious traffic. | Edge scrubs requests, rate limits, and enforces TLS termination before reaching the origin. |

### Deeper Insight: Cache‑Consistency as a Probabilistic Trade‑off

Most people think “cache must always be fresh.” In practice, freshness is a **probability distribution** over time:  
- If an object changes rarely (low update frequency), you can set a long TTL; the chance of serving stale data is negligible.  
- For frequently updated content, you use *conditional requests* (`If‑None-Match`) or *push invalidations*. The CDN must balance **network traffic** (more conditional checks) against **staleness risk**.

A non‑obvious insight: **Cache eviction policies are not purely local**. In a multi‑region CDN, a request that misses in one region can be satisfied from another if the origin is still reachable. This *cross‑region fallback* turns the CDN into a distributed cache system with a global view of object popularity—allowing smarter prefetching and replication decisions.

In short, a CDN is an engineered compromise: it trades off strict consistency for latency, capacity, and resilience, guided by probabilistic models of traffic patterns and content update rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
