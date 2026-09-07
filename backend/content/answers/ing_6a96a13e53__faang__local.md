---
qid: ing_6a96a13e53__faang__local
question: 'Explain: corresponding lat long and that way you — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 471
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:52-05:00'
sources: []
---

**Clarify**  
You’re asking how DoorDash could design a real‑time location service that maps latitude/longitude pairs to user‑friendly zones and streams updates via WebSockets. I’ll assume: (1) we need low‑latency geofence lookups for millions of riders/drivers, (2) data must be horizontally scalable, and (3) the system should tolerate network partitions.

**Approach**  
1. Convert lat/long to a geohash (or H3 index).  
2. Store each hash in a distributed key‑value store keyed by zone ID.  
3. Use WebSocket connections per client; publish updates to subscribed zones via a pub/sub broker.  
4. Cache recent lookups in an in‑memory layer (Redis) to reduce storage hits.

**Depth**  
- *Geohashing*: 12‑char geohash gives ~5 m precision—good for delivery granularity.  
- *Lookup*: O(1) hash key → zone ID; then fetch zone metadata.  
- *Pub/Sub*: Kafka or Redis Streams publish “driver moved” events to topic `zone:{id}`; WebSocket servers subscribe and forward to connected clients.  
- *Scalability*: Partition by hash prefix; each shard owns a contiguous geographic area, reducing cross‑node traffic.  
- *Fault tolerance*: Replicate shards; broker handles failover.

**Edge Cases**  
- Drivers crossing zone boundaries: emit “exit” then “enter” events; ensure idempotent handling.  
- Network latency spikes: fall back to polling every 30 s.  
- Very dense urban areas: increase geohash resolution or use adaptive zoning.

**Optimize & Communicate**  
To cut latency, pre‑compute reverse geocoding for common zones and cache them in CDN edge nodes. Profile the WebSocket handshake load; if it exceeds 1k connections per node, add a connection manager layer. In interviews, I’d iterate: “First we’ll prototype with Redis Streams; once throughput hits X, we’ll migrate to Kafka.” This shows clear planning, trade‑offs, and an eye for production robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
