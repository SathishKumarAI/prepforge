---
qid: ing_9588d40ede__fp__local
question: 'Explain: Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 473
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:12-05:00'
sources: []
---

### Why a CDN is essential

In any global service the **latency budget** is dominated by the physical distance between user and data center:  
`T = hop_latency + propagation_delay`.  
Propagation scales as ~5 µs per km; a 10‑Gbit link across continents adds ~50 ms.  
If every request must travel that far, average response time explodes, throughput drops, and the user experience collapses.

A CDN solves this by **optimizing the space–time trade‑off**: we store replicas close to users, reducing propagation delay, while keeping a small number of authoritative origin servers. The system is designed around three core principles:

| Principle | What it enforces | Result |
|-----------|------------------|--------|
| *Geographic locality* | Cache content on edge nodes near user clusters | Latency ≈ 1–10 ms |
| *Consistency via invalidation* | Use ETag/Last‑Modified + purge APIs | Clients see up-to-date data without full sync |
| *Load balancing by proximity* | Route DNS to nearest healthy node (Anycast) | Even traffic distribution, failover |

### Architecture sketch

1. **Edge layer** – thousands of cache servers in ISP PoPs; each holds a subset of objects identified by URLs hashed into a consistent‑hash ring.
2. **Origin layer** – a small set of authoritative data centers that generate or refresh content.
3. **Control plane** – monitors cache hit rates, propagates purges, and updates routing tables via BGP Anycast.

### Non‑obvious insight

Most people think “more caches = better.” The real gain comes from **cache locality vs. write amplification**. If a CDN replicates *every* object everywhere, any update triggers millions of invalidations—an O(N) cost that defeats scalability. Instead, CDNs adopt *lazy replication*: objects are cached only when requested, and updates are pushed selectively (e.g., via WebSocket or push API). This turns the CDN from a passive mirror into an **adaptive cache** that balances freshness against bandwidth, achieving sub‑10 ms latency with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
