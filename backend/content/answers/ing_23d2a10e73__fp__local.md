---
qid: ing_23d2a10e73__fp__local
question: 'Explain: Maybe you note down 50 devices or — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 392
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:40-05:00'
sources: []
---

**Why a CDN is indispensable**

When users request content, the *latency* they experience is dominated by two factors:  
1. **Propagation delay** – distance between user and server.  
2. **Back‑haul congestion** – how many other users share the same link.

A CDN solves both simultaneously by deploying cache nodes (edge servers) close to users. It turns a *global optimization* problem—minimize total latency over a network of N users and M servers—into a set of local decisions: “which node should serve which request?” The optimal policy is **push‑and‑cache**: popular objects are replicated near demand hotspots, while rare items stay at the origin. This mirrors the *principle of locality* in information theory: entropy decreases when we store high‑probability symbols nearby.

**Key mechanics**

| Layer | Function |
|-------|----------|
| **Edge cache** | Stores a subset of content; serves requests if hit. |
| **Origin pull** | On miss, fetches from central server and updates cache. |
| **Load balancer** | Distributes traffic based on proximity and health checks. |
| **TTL & eviction** | Keeps cache fresh while limiting storage cost (LFU/LRU). |

**Non‑obvious insight**

Most people view a CDN as merely “putting servers in more places.” The deeper benefit is *statistical multiplexing*: by aggregating many independent user requests at the edge, the CDN smooths bursty traffic. This reduces peak load on back‑haul links far more than adding raw capacity would, because the variance of aggregated Poisson arrivals scales as √N rather than N.

In short, a CDN is a distributed **probabilistic optimizer** that trades storage for latency, exploiting content popularity and user geography to keep users satisfied while keeping operators’ costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
