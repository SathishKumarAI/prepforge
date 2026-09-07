---
qid: ing_4c7f579d83__faang__local
question: 'Explain: Now what that would do is it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:42:11-05:00'
sources: []
---

**Clarify**

The interviewer wants a high‑level design for a scalable, low‑latency *Google Maps*‑style service (routing, real‑time traffic, map rendering).  
Assumptions:  
1) Millions of concurrent users worldwide.  
2) Map data is read‑heavy; updates are infrequent.  
3) Real‑time traffic feeds and turn‑by‑turn navigation must be < 50 ms.  

**Approach**

1. **Core Components** – API gateway → routing service, map tile server, traffic engine, cache layer.  
2. **Data Layer** – Spatial index (R‑tree / GeoHash) on a distributed key/value store for static tiles; graph database for road network.  
3. **Traffic & Updates** – Stream processing (Kafka + Flink) to ingest live vehicle telemetry → update edge weights in the routing graph.  
4. **Caching** – CDN for map tiles, Redis for hot routes and traffic snapshots.  

**Depth**

- *Routing*: Dijkstra/A* on a pre‑computed contraction hierarchy; re‑run when traffic updates cross a threshold. Complexity: O(log V + E).  
- *Traffic Engine*: Windowed aggregations over vehicle GPS → compute average speed per edge.  
- *Scalability*: Horizontal scaling via stateless microservices; sharding the graph by region.  
- *Latency*: CDN + in‑memory cache reduces tile fetch to < 20 ms; routing service stays under 30 ms for typical queries.

**Edge Cases**

- Edge of coverage (new roads) → fallback to OSM data and trigger background rebuild.  
- Network partitions → read‑only mode using stale data, with a retry policy.  
- Data consistency → use eventual consistency for traffic updates; strong consistency for map edits.

**Optimize & Communicate**

Explain trade‑offs: heavier precomputation (contraction hierarchies) vs real‑time computation. Highlight monitoring (latency dashboards), A/B testing of routing algorithms, and incremental rollout of new data sources. Conclude with a summary diagram and mention future extensions (AR navigation, 3D rendering).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
