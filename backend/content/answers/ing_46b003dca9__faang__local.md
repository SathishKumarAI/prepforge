---
qid: ing_46b003dca9__faang__local
question: 'Explain: So before we get started let me — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:28:21-05:00'
sources: []
---

**Clarify**  
*Restate*: “Design a large‑scale location service (Google Maps) that supports real‑time navigation, routing, POI search and map rendering.”  
*Assumptions to confirm*:  
1. Expected traffic: millions of concurrent users worldwide.  
2. Latency target < 200 ms for routing requests.  
3. Data freshness ≈ minutes for road changes, hours for static tiles.  

**Approach**  
1. **Front‑end API layer** – HTTPS REST/WebSocket gateway per region.  
2. **Routing engine** – graph database (e.g., Neo4j) with edge weights (speed, toll).  
3. **Map tiles** – CDN‑cached vector tiles; origin in a global object store.  
4. **POI service** – sharded NoSQL (Cassandra/Spanner) with geo‑indexing.  
5. **Real‑time traffic** – ingest from sensors into Kafka → stream processor → update edge weights.  

**Depth**  
*Routing*: use Dijkstra/A\* on a pre‑computed contraction hierarchy; complexity O(log N).  
*Caching*: route cache per user session, tile cache at CDN edge.  
*Data pipeline*: daily bulk rebuild of road graph (MapReduce) + incremental updates via change feed.  

**Edge Cases**  
- Network partition: fallback to last known good route.  
- Sudden traffic surge: throttle routing requests, use rate limiter.  
- POI deletions: versioned documents with TTL in NoSQL.  

**Optimize & Communicate**  
Explain trade‑offs: graph DB gives fast shortest‑path queries but higher write cost; vector tiles reduce bandwidth vs raster. Highlight monitoring (latency dashboards), disaster recovery (multi‑region replication). Conclude with a high‑level diagram and key metrics to track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
