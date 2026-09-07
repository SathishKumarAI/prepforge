---
qid: ing_c835ec3a0b__faang__local
question: 'Explain: What that means is we''ll probably have — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:49-05:00'
sources: []
---

**Clarify**  
You’re being asked to design a system like **Google Maps**—a global, highly‑available location service that supports routing, traffic, and real‑time updates for millions of users. Key assumptions:  
- 1–10 billion daily requests.  
- Latency < 200 ms per query.  
- Consistency strong for user‑generated POIs, eventual for map tiles.  

**Approach**  
1. **Front‑end layer**: CDN + load balancer to distribute traffic globally.  
2. **Routing engine**: graph database (e.g., Neo4j) sharded by region; Dijkstra/Contraction Hierarchies pre‑computed for fast shortest‑path queries.  
3. **Map tiles**: store raster/vector tiles in a key‑value store (S3 + CloudFront), cache hot tiles in Redis.  
4. **Traffic & real‑time**: ingest sensor data via Kafka → microservices that update edge weights; publish to downstream services.  
5. **Data ingestion pipeline**: nightly batch jobs for satellite imagery and OpenStreetMap updates, incremental delta streams for live edits.  

**Depth**  
- Use *Contraction Hierarchies* to reduce routing time to ~10 ms on a 100 M‑node graph.  
- Partition graph by geographic bounding boxes; each shard runs in its own region for locality.  
- Store traffic weights as “cost multipliers” that can be updated in seconds via Redis Streams.  
- For map tiles, vector tiles (Mapbox Vector Tiles) allow client‑side rendering and reduce bandwidth.  

**Edge Cases**  
- Network partitions: fallback to stale data from local cache.  
- Sudden surge (e.g., natural disaster): auto‑scale routing shards; use rate limiting on API keys.  
- POI updates conflict: implement CRDTs or last‑write‑wins with timestamps.  

**Optimize & Communicate**  
Explain trade‑offs between consistency vs latency for traffic data, the choice of graph DB over relational for path queries, and how CDN + edge caching cuts RTT. Highlight that monitoring (latency dashboards, error budgets) guides auto‑scaling decisions. This structured narrative shows clear problem framing, scalable architecture, and thoughtful handling of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
