---
qid: ing_3245e0ec3b__faang__local
question: 'Explain: But while the user is in transit — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 532
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:41:23-05:00'
sources: []
---

**Clarify**

We’re asked to design *Google Maps’ real‑time routing system*—the component that takes a user’s current location and an intended destination while the user is moving (in transit) and continuously recommends the optimal path.  
Assumptions:  
- Users are on smartphones with GPS, Wi‑Fi, cellular; occasional connectivity gaps.  
- The network must handle millions of concurrent sessions.  
- Latency < 200 ms for a route update, throughput ~10k req/s per region.

**Approach**

1. **Data ingestion** – ingest live traffic, incidents, and map updates via Kafka streams.  
2. **Routing engine** – pre‑compute a graph (nodes = intersections, edges = road segments) with edge weights = travel time; use Dijkstra/A* for shortest path.  
3. **Live re‑routing** – on each GPS ping (≈ 1 s), run a *local* A* from current node to destination, constrained by a small radius (e.g., 5 km) to keep latency low.  
4. **Caching & sharding** – partition the graph by region; cache popular routes in Redis.  
5. **Fault tolerance** – fallback to static routes if connectivity lost; use exponential backoff for updates.

**Depth**

- Edge weights are dynamic: `time = length / speed + delay(traffic)`.  
- Use *incremental shortest path* algorithms (e.g., Contraction Hierarchies) to update only affected edges.  
- Complexity per update: O(log V + E_local).  
- Memory: graph ≈ 30 GB; cache ≈ 1 TB sharded.

**Edge Cases**

- GPS drift → snap to nearest node with Kalman filter.  
- Network partition → serve stale but usable routes; log for later sync.  
- Sudden detours (accident) → broadcast via push notifications to affected users.

**Optimize & Communicate**

We can reduce latency by pre‑computing *road segment potentials* and using *vectorized edge weights*. For scalability, deploy the routing service on a Kubernetes cluster with autoscaling based on request load. I would present this design as a pipeline diagram: ingestion → graph store → routing microservice → client SDK, highlighting fault tolerance and data freshness. This showcases clear problem framing, algorithmic depth, and pragmatic engineering trade‑offs—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
