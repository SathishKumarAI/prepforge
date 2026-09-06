---
qid: ing_7a9c8e7a28__fp__local
question: 'Explain: How CDN Works — How Does CDN Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 464
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:31-05:00'
sources: []
---

## Why a CDN is Needed

When a user requests a web asset (image, script, video), the HTTP request travels across the Internet’s *latency‑budget*—the sum of propagation delay, queueing, and processing time on every hop.  
For a global audience, that budget grows with distance: a 10 Gbps link from Tokyo to a user in Boston still suffers ~70 ms latency. If the content is served once per day, users tolerate it; if it’s fetched at page load, the delay hurts conversion rates.

Thus we must **minimize expected round‑trip time** for each request while keeping bandwidth costs low. The optimal strategy is to place *caches* close to where requests arrive most often—exactly what a Content Delivery Network (CDN) does.

## How It Works

1. **Edge placement** – A CDN owns or leases servers in thousands of “edge” locations worldwide.  
2. **DNS steering** – When a client resolves the CDN‑hosted domain, the authoritative DNS returns an IP that is geographically and network‑topologically nearest to the client (based on real‑time latency measurements).  
3. **Cache lookup** – The edge server checks its local store for the requested object. If present (a *hit*), it serves it immediately.  
4. **Origin fetch & replication** – On a miss, the edge forwards the request to the origin, caches the response, and returns it. Subsequent requests hit locally.

The system is essentially a distributed *approximate nearest‑neighbour search* over network space: we approximate “closest” by using latency metrics rather than geographic distance alone.  

## Non‑obvious Insight

Most people think a CDN only reduces bandwidth costs. In reality, its primary optimization goal is **to reduce the expected *service‑time* of every request**, which directly improves user experience and business KPIs. The caching policy (e.g., LRU vs. LFU) is tuned not for hit‑ratio alone but for *latency reduction per byte*, a subtle but powerful objective that many traditional cache systems ignore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
