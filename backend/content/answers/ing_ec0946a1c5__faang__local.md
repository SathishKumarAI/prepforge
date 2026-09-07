---
qid: ing_ec0946a1c5__faang__local
question: 'Explain: So let''s just say if you want — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 529
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:34-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that powers the core of *Google Maps*: real‑time routing, traffic updates, and location services for millions of users worldwide.  
Key assumptions I’d confirm:  

* Scale – 10⁶+ concurrent users per day, global coverage.  
* Latency – <200 ms for route queries; traffic data refreshed every few seconds.  
* Data – road network graph, POIs, user‑generated traffic signals, offline maps.  
* Availability – 99.999% uptime, graceful degradation if parts fail.

---

**Approach**  

1. **Data layer** – distributed graph store (e.g., Spanner + Bigtable) for roads/edges; separate time‑series DB for traffic counters.  
2. **Routing service** – stateless microservice that fetches a subgraph, runs Dijkstra/A* with edge weights = travel time (base + traffic). Caches popular routes in Redis.  
3. **Traffic ingestion** – streaming pipeline (Kafka → Flink) aggregates device telemetry into per‑edge velocity histograms; push updates to the graph store every 5 s.  
4. **Location & offline support** – mobile SDK uses local map tiles from a CDN; fallback to cached segments if network lost.  
5. **Reliability** – active–active replicas, global load balancer, circuit breakers, and health checks.

---

**Depth**  

*Routing complexity*: O(|E| log|V|) per query with priority queue; caching reduces average cost to ~O(1).  
*Traffic update latency*: 5 s pipeline keeps weights fresh; stale data is bounded by update interval.  
*Consistency*: Strong consistency for edge weights via Spanner’s serializable transactions; eventual consistency acceptable for traffic.

---

**Edge Cases**  

*Road closures*: real‑time alerts trigger graph updates, invalidate affected cached routes.  
*Network partitions*: local mobile clients continue using last known map tiles.  
*Massive traffic spikes*: auto‑scale routing nodes horizontally; use request throttling per IP.

---

**Optimize & Communicate**  

Potential improvements: precompute alternative paths for high‑traffic corridors, use machine learning to predict congestion windows, and compress graph data with delta encoding. I’d explain trade‑offs (e.g., higher cache hit rates vs. memory cost) and justify design choices with quantified latency/throughput targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
