---
qid: ing_181627c288__faang__local
question: 'Explain: What that means is you do kwow — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:40:25-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to design a system similar to Google Maps – a large‑scale, highly available map service that supports real‑time routing, geocoding, and user traffic. Confirm assumptions:  
• Expected request volume (millions per day).  
• Latency target (<100 ms for route lookup).  
• Data freshness (map updates vs. static tiles).  
• Availability requirement (99.999%).  

**Approach**  
1. **Data layer** – store raw map data in a distributed graph database (e.g., JanusGraph on Cassandra) for road connectivity; store pre‑rendered vector tiles in S3/CloudFront for quick raster fallback.  
2. **Routing engine** – use a Dijkstra/A* implementation with cached shortest paths and incremental updates via a message queue (Kafka).  
3. **Geocoding service** – index address components in Elasticsearch, backed by a secondary RDBMS for transactional writes.  
4. **API gateway** – route requests to stateless micro‑services behind a CDN; use client‑side caching for tiles.  
5. **Observability** – Prometheus + Grafana dashboards, distributed tracing (OpenTelemetry).  

**Depth**  
- *Routing*: precompute contraction hierarchies to reduce query time to ~20 ms.  
- *Scalability*: shard by region; use read replicas for hot spots.  
- *Consistency*: eventual consistency for map edits; strong consistency for user‑generated data via write‑ahead logs.  

**Edge Cases**  
- Network partitions → fallback to cached tiles.  
- Sudden traffic spikes (e.g., disasters) → auto‑scale compute and prioritize routing over geocoding.  
- Data corruption in graph DB → automated integrity checks against source GIS files.  

**Optimize & Communicate**  
Explain trade‑offs: heavier precomputation vs. faster runtime; using vector tiles reduces bandwidth but needs client rendering support. Emphasize that the design balances latency, cost, and reliability, aligning with FAANG expectations for robust, scalable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
