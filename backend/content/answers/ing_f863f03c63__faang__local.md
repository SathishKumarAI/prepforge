---
qid: ing_f863f03c63__faang__local
question: 'Explain: Protocol and Media Optimizations — Content Delivery Network (CDN)
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 614
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:17:23-05:00'
sources: []
---

**Clarify**

You’re asking how a CDN optimizes protocol‑level (TCP/HTTP, QUIC) and media‑delivery (encoding, caching) for large‑scale content.  
Assumptions: *Stateless web traffic*, *high read‑heavy load*, *global user base*, *video/audio as the primary payload*.

**Approach**

1. **Protocol layer** – tune transport & application protocols to reduce latency and overhead.  
2. **Media layer** – encode, segment, cache, and deliver content efficiently across edge nodes.  
3. **Global distribution** – topology, routing, and failure handling.

**Depth**

| Layer | Key Optimizations |
|-------|-------------------|
| **Transport** | • Use HTTP/3 (QUIC) to eliminate head‑of‑line blocking; 0‑RTT for repeat visits.<br>• TCP window scaling & congestion control tuned per RTT distribution. |
| **Application** | • Persist connections via keep‑alive; bundle small requests into single HTTP/2 streams.<br>• Content‑based cache keys (ETag, Last‑Modified) and aggressive `Cache-Control`. |
| **Encoding** | • Adaptive Bitrate Streaming (HLS/DASH) with low‑latency variants.<br>• Use modern codecs (AV1/H.265) for 4K/8K while maintaining backward compatibility. |
| **Caching** | • Edge cache size proportional to regional demand; use LRU+frequency weighting.<br>• Purge policies tied to origin versioning; use signed URLs for private content. |
| **Distribution** | • Anycast IPs + Geo‑DNS to nearest edge; fallback via BGP peering.<br>• Health probes and weighted load balancing across replicas. |

*Complexity*: O(1) per request hit; cache miss incurs origin fetch (O(log N) for routing). Trade‑off: higher memory use vs. lower latency.

**Edge Cases**

- **Cache stampede** on a popular new release → implement *single flight* or *cache prewarm*.  
- **Zero‑RTT replay attacks** → validate client state before serving content.  
- **Dynamic user‑generated media** → short TTLs, signed URLs, and edge compute for transcoding.

**Optimize & Communicate**

Explain that protocol upgrades (HTTP/3) reduce RTTs by ~30 %, while media optimizations cut bandwidth by 40–60 % for high‑resolution streams. Highlight how these choices map to cost savings (lower origin load, reduced egress). Conclude with a quick ROI estimate: *10 k requests/sec* → *5 GB less transfer per day*, translating to tangible cloud spend reduction. This narrative shows structured thinking, depth, and business impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
