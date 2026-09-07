---
qid: ing_cc03a16e71__faang__local
question: 'Explain: Google Maps System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 495
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:36-05:00'
sources: []
---

**Clarify**  
> “Design a scalable system for Google Maps.”  
Ask about key requirements: real‑time routing, map rendering, offline mode, user traffic (~10⁶ RPS), latency (<200 ms), data freshness (updates from road sensors), and cost constraints. Confirm whether we need to support only navigation or also search/places.

**Approach**  
1. **Core components** – Data ingestion → Graph storage → Routing engine → API gateway → Client SDKs.  
2. **Data layer** – Partition the road graph by region, use a distributed graph DB (e.g., JanusGraph on Cassandra) and cache hot subgraphs in Redis.  
3. **Routing** – Pre‑compute shortest paths with Dijkstra/Contraction Hierarchies; fall back to A* for dynamic traffic.  
4. **API layer** – Stateless microservices behind a load balancer, autoscaling.  
5. **Client side** – Tile rendering via vector tiles (Mapbox GL), offline cache with SQLite.

**Depth**  
- *Graph storage*: Shard by geographic bounding box; each shard holds vertices/edges and traffic weights. Replication factor = 3 for fault tolerance.  
- *Routing engine*: Use contraction hierarchies to answer queries in <5 ms on average. Update edge weights every 30 s via a stream processor (Kafka → Flink).  
- *Caching*: Keep the last 24 h of traffic data in memory; evict stale edges.  
- *Complexity*: Routing query O(log n) with CH, updates O(k log n) for k affected edges. Cost scales linearly with active users due to auto‑scaling.

**Edge Cases**  
- Network partitions: fall back to last known traffic weights.  
- Extremely dense urban graphs: apply hierarchical routing or multi‑modal transit data.  
- Offline mode: serve pre‑downloaded tiles and cached routes.

**Optimize & Communicate**  
Explain trade‑offs: heavier pre‑computation reduces latency but increases storage; real‑time updates increase consistency cost. Discuss monitoring (latency, cache hit rate) and A/B testing new routing heuristics. End with a succinct diagram of the data flow to demonstrate clear ownership of each layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
