---
qid: ing_d3fd90bfc6__faang__local
question: 'Explain: This would have a length of 5 — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 568
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:17-05:00'
sources: []
---

**Clarify**  
You’re being asked to sketch a high‑level design for *Google Maps*—the core services (routing, map tiles, traffic, real‑time updates) that can serve millions of users globally with sub‑second latency and 99.9% availability.  
Assumptions:  
- Traffic is read‑heavy; writes (POI edits, user reports) are far less frequent.  
- We must support both web and mobile clients, with offline caching for mobile.  

**Approach**  
1. **Front‑end** – REST/GraphQL API + WebSocket for live traffic.  
2. **Cache layer** – CDN edge caches for static tiles; in‑memory cache (Redis) for routing results.  
3. **Routing engine** – Graph database (Neo4j or custom adjacency list) with Dijkstra/A* pre‑computed shortest paths.  
4. **Traffic & real‑time** – Publish/Subscribe pipeline (Kafka → Flink) feeding a time‑series DB (TimescaleDB).  
5. **Storage** – Sharded PostgreSQL for POIs; object store (GCS/S3) for raster tiles; Bigtable for high‑volume counters.  

**Depth**  
- *Routing*: Build a hierarchical graph (country → region → city) to reduce search space. Use contraction hierarchies for sub‑millisecond queries. Complexity: O(log n) per lookup after preprocessing.  
- *Caching*: Edge CDN caches 90% of tile requests; stale tiles refreshed via cache‑invalidations from the tile generator.  
- *Scalability*: Each microservice horizontally scales behind a load balancer; stateful services use sticky sessions or session replication.  
- *Consistency*: Use eventual consistency for POI updates; strong consistency only where needed (e.g., user location).  

**Edge Cases**  
- Sudden traffic spikes (concerts) → auto‑scale routing nodes, fallback to static routes.  
- Offline mode: pre‑download tiles and cached route graphs on the device.  
- Data center failure: cross‑region replication of critical services; read replicas handle failover.  

**Optimize & Communicate**  
Explain trade‑offs: heavier graph preprocessing for faster queries vs. longer rebuild times during map updates. Mention monitoring (latency dashboards, SLO metrics) and A/B testing new routing algorithms before rollout. Conclude with a brief diagram or bullet list summarizing components, data flow, and key performance metrics to leave the interviewer with a clear mental model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
