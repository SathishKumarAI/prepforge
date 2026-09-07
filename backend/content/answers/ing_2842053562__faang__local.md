---
qid: ing_2842053562__faang__local
question: 'Explain: This is one part of the things — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 567
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:17:15-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Google‑Maps‑style* system that supports real‑time routing, map rendering, and traffic updates for millions of users.  
Key assumptions:  

| Assumption | Reasoning |
|------------|-----------|
| Users request routes on demand, not pre‑computed | Typical mobile usage |
| Map data is mostly static; only traffic changes frequently | Traffic is the main dynamic factor |
| System must support low latency (<200 ms) and high throughput (10⁶+ RPS) | Mobile UX expectations |

**Approach**  
1. **Data layer** – Store road graph in a distributed graph database (e.g., Neo4j, JanusGraph).  Use *sharding* by geographic region to localize traffic data.  
2. **Routing engine** – Implement Dijkstra/ A* with edge weights = travel time + dynamic traffic penalty. Cache recent shortest paths per user session.  
3. **Traffic ingestion** – Pull real‑time feeds (GPS probes, sensors). Update edge weights in *Kafka → Kafka Streams → cache layer*.  
4. **API gateway** – Expose REST/GRPC endpoints; use request throttling and rate limiting.  
5. **Frontend rendering** – Tile server (Mapbox GL) serves vector tiles from a CDN; client merges routing polyline with traffic overlays.

**Depth**  
- *Routing*: Pre‑compute all‑pairs shortest paths for small subgraphs; fall back to on‑the‑fly Dijkstra for larger queries. Complexity: O(E log V).  
- *Traffic updates*: Use lock‑free concurrent maps so read latency stays low. Store last update timestamp per edge to detect stale data.  
- *Scaling*: Horizontal scaling of graph nodes via consistent hashing; use read replicas for traffic cache.

**Edge Cases**  
- Sudden road closures → propagate “closed” flag and recompute affected routes.  
- Network partition → fall back to cached weights, degrade gracefully.  
- High concurrency spikes → auto‑scale gateway instances; implement circuit breakers.

**Optimize & Communicate**  
- **Batch routing requests** (e.g., for navigation fleets) to amortize graph traversal cost.  
- **Compress traffic deltas** before pushing to edge caches to reduce bandwidth.  
- **Explain trade‑offs**: graph DB vs. key‑value store; in‑memory cache speed vs. persistence.  

By structuring the system into clear layers, emphasizing caching and real‑time ingestion, we achieve low latency routing at scale while keeping the design maintainable for future features (e.g., multimodal transport).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
