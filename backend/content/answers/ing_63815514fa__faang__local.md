---
qid: ing_63815514fa__faang__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 499
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:52-05:00'
sources: []
---

**Clarify**  
We’re asked to design a CDN‑powered system for a music streaming service like Spotify. The goal: deliver audio files quickly, reliably, and at scale while minimizing latency and bandwidth costs. Key assumptions:  
* Users request songs via URLs; each song is stored once in origin storage.  
* Traffic peaks during evenings worldwide; cache hit ratio > 80%.  
* We support on‑demand streaming (HTTP ranges) and prefetching.  

**Approach**  
1. **Origin layer** – immutable object store (e.g., S3).  
2. **Edge caching** – deploy edge nodes in major ISPs/regions; each node holds a subset of popular tracks.  
3. **Cache invalidation** – use time‑to‑live (TTL) + versioned URLs to force refresh on updates.  
4. **Routing** – DNS or HTTP redirects with GeoIP lookup to nearest edge.  
5. **Streaming protocol** – HTTP/2 with range requests; optionally WebRTC for low‑latency P2P.  

**Depth**  
* Edge node stores MP3/AAC chunks (e.g., 10 s).  
* When a request hits an edge, it serves from local cache; miss → fetch from origin, store locally, then stream.  
* Cache replacement: LFU + size budget; purge stale entries when space low.  
* Consistency: use immutable URLs so stale copies never get served after update.  
* Load‑balancing: health checks + weighted round robin across edges.  

**Edge Cases**  
* Cold start for new songs → origin fetch latency spikes.  
* Sudden traffic spike (viral track) → cache overflow; need auto‑scale edge capacity.  
* Regional compliance – data residency restrictions may force local caches only in allowed zones.  

**Optimize & Communicate**  
* Add a prefetch service that predicts next tracks per user and warms edge caches ahead of time, reducing miss rate to < 5%.  
* Use CDN analytics to auto‑scale edge nodes based on real‑time hit ratios.  
* Explain trade‑offs: larger cache = lower bandwidth cost but higher memory usage; stricter TTL = fresher content but more origin traffic.  

This plan balances performance, scalability, and cost while ensuring a robust streaming experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
