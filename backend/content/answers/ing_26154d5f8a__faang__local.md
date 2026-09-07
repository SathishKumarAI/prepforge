---
qid: ing_26154d5f8a__faang__local
question: 'Explain: you refresh um yeah i don''t know — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 528
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:38-05:00'
sources: []
---

**Clarify**  
We need a high‑level design for DoorDash’s real‑time location service that feeds drivers, riders, and restaurants with up‑to‑date positions. Key assumptions:  

* ~10 M users (drivers + customers) worldwide; 1 M active per hour.  
* Latency < 200 ms for positional updates.  
* Geospatial queries (nearest driver, proximity alerts) are frequent.  

**Approach**  
1. **Data ingestion** – mobile clients send GPS pings via HTTP/2 or MQTT to a stateless API layer.  
2. **Geohash bucketing** – each ping is converted to an 11‑character geohash (≈ 30 m resolution).  
3. **Storage & cache** – store in Redis Cluster keyed by geohash; persist full record in PostGIS for audit.  
4. **Pub/Sub** – updates publish to a Kafka topic; WebSocket servers subscribe per region.  
5. **WebSocket distribution** – each client opens a persistent socket; server pushes only relevant geohash neighbors.  

**Depth**  
*Geohashing:* 11 chars → ~30 m square; allows O(1) lookup of nearby drivers.  
*Redis Sharding:* shard by hash prefix to keep hot spots balanced; TTL 60 s for stale data.  
*Kubernetes + Kafka:* autoscale consumer pods; exactly‑once semantics via idempotent keys.  
*WebSockets:* use WebSocket over TLS, with per‑region reverse proxies (NGINX). Complexity: O(log N) for nearest‑neighbor queries in PostGIS; O(1) for cache hits.

**Edge Cases**  
*GPS jitter*: filter out implausible jumps (>200 m/s).  
*Cellular dropouts*: buffer last known location, mark status “offline” after 90 s.  
*Load spikes*: burst handling via Kafka back‑pressure; graceful degradation to HTTP polling if WebSockets fail.

**Optimize & Communicate**  
- Add a Bloom filter per geohash to pre‑filter empty buckets.  
- Use vector clocks for conflict resolution when multiple devices report same driver.  
Explain trade‑offs: tighter geohash → more shards but higher precision; broader → fewer shards but possible false positives. Highlight how this design meets latency, scalability, and reliability targets typical of FAANG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
