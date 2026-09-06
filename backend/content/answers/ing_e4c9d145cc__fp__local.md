---
qid: ing_e4c9d145cc__fp__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 504
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:05:09-05:00'
sources: []
---

### Why a CDN must route smartly

The fundamental problem a CDN solves is **low‑latency content delivery** under unpredictable global traffic.  
At its core the CDN is a *distributed caching system* whose job is to minimize the expected round‑trip time (RTT) between a client and the nearest cache that holds the requested object.

1. **Optimization view** – We model the network as a weighted graph \(G=(V,E)\).  
   Each edge weight \(w(e)\) is the measured RTT or cost of traversing that link.  
   The CDN’s routing policy chooses a *shortest‑path* from client \(c\in V\) to an eligible cache node \(v\in C\subseteq V\) that stores the object.  
   This is exactly Dijkstra’s problem with a dynamic source set \(C\).  
   By always picking the minimum‑cost path we solve \(\min_{v\in C} d(c,v)\), guaranteeing the lowest possible latency for the given topology.

2. **Information theory view** – The CDN reduces *information entropy* of the request path.  
   By keeping popular objects near many clients, the probability that a request hits the cache (hit‑rate) increases sharply, thereby reducing the need to fetch from the origin and cutting bandwidth uncertainty.

3. **Geometry view** – Client locations are embedded in a metric space; caches form a *Voronoi diagram* over this space.  
   Routing is simply “go to the nearest Voronoi cell”.  
   When traffic shifts, the diagram is recomputed locally (e.g., using consistent hashing), preserving locality without global coordination.

### A non‑obvious insight

Most people overlook that **routing decisions must be *adaptive* to *real‑time congestion**, not just static RTTs.**  
Modern CDNs embed a lightweight “traffic‑aware” layer: each edge periodically reports its queue length, and the routing algorithm re‑weights edges by \(w'(e)=\alpha w(e)+\beta \text{queue}(e)\).  
This turns the CDN into a *self‑healing* system that balances load and latency simultaneously—an elegant marriage of shortest‑path optimization with queuing theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
