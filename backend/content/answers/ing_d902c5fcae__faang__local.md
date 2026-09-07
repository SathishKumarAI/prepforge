---
qid: ing_d902c5fcae__faang__local
question: 'Explain: let''s assume this is what we have — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 481
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:54-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that powers *Google Maps*: real‑time routing, traffic, map rendering, and location services for millions of users worldwide.  
Key assumptions to confirm:  
1. **Scale** – billions of active devices, 10⁶+ queries/sec.  
2. **Latency** – < 200 ms for a route request, < 100 ms for tile fetches.  
3. **Consistency** – map data must be globally consistent; traffic updates can be eventually consistent.  

**Approach**  
1. **Data layer** – Sharded spatial database (e.g., PostGIS or custom R‑Tree index) for static maps, backed by a CDN for tiles.  
2. **Routing engine** – Precompute a multi‑level graph (HMM, contraction hierarchies) per region; route queries use bidirectional Dijkstra over the reduced graph.  
3. **Traffic layer** – Stream telemetry from vehicles/phones into a real‑time analytics pipeline (Kafka → Flink → Redis). Use time‑decayed weights to adjust edge costs.  
4. **API gateway & caching** – Edge servers cache popular routes and tiles; use consistent hashing for request routing.  

**Depth**  
- *Routing*: Contraction hierarchies reduce query time from O(|V|+|E|) to ~O(log |V|).  
- *Traffic*: Latency < 50 ms per update; we batch updates every 500 ms.  
- *Scalability*: Horizontal scaling of graph shards; sharding by geographic quadtree ensures locality.  

**Edge Cases**  
- Network partitions → fallback to last‑known traffic snapshot.  
- Map edits (construction) → versioned tiles and incremental graph rebuilds.  
- Edge device loss → graceful degradation to static routing.  

**Optimize & Communicate**  
Future work: use machine learning for predictive traffic, edge computing for offline mode, and differential updates for map tiles. I’d present the design diagram, highlight trade‑offs (precomputation vs. real‑time accuracy), and explain how each component meets SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
