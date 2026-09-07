---
qid: ing_74019ea6eb__faang__local
question: 'Explain: road over here might be all twisty — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 463
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:00-05:00'
sources: []
---

**Clarify**

> *“Explain the system design of DoorDash using geo‑hashing and WebSockets for location‑based services.”*  
> I’ll assume we’re building a real‑time delivery dashboard that (1) finds nearby drivers, (2) streams their live positions to riders, and (3) scales to millions of users.  

**Approach**

1. **Data model & storage** – Use a distributed key‑value store (e.g., DynamoDB/Spanner) keyed by *geohash* for spatial locality.  
2. **Geohashing** – Encode lat/lon into a 12‑bit prefix; nearby points share prefixes, so range queries are cheap.  
3. **Realtime transport** – WebSocket connections per rider to push driver updates.  
4. **Scaling** – Partition geohash buckets across shards; each shard hosts a WebSocket gateway (e.g., Nginx + Socket.io).  

**Depth**

- *Geohash bucket size*: 12‑bit (~1 km²) balances query granularity and cardinality.  
- *Lookup algorithm*: Rider requests drivers in the current geohash + 8 neighbors → O(1) reads.  
- *WebSocket flow*: Driver publishes GPS ping to a broker (Kafka), consumer pushes to all subscribed rider sockets.  
- *Latency*: Aim < 200 ms; use CDN edge nodes for WebSocket handshakes.  

**Edge Cases**

- **Sparse areas**: fallback to nearest bucket search with radius expansion.  
- **Driver churn**: keep TTL on driver presence keys; stale entries expire in 30 s.  
- **Connection loss**: implement heartbeat and reconnection logic.  

**Optimize & Communicate**

- Profile geohash prefix length to reduce false positives while keeping read cost low.  
- Cache hot buckets in Redis for sub‑second reads.  
- Document the trade‑off between WebSocket fan‑out (memory) and message broker load.  
- Convey that this design keeps spatial queries efficient, guarantees near real‑time updates, and scales horizontally via sharding and stateless gateways.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
