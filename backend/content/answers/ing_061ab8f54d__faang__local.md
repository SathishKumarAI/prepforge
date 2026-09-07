---
qid: ing_061ab8f54d__faang__local
question: 'Explain: same server and then from then on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 489
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:37-05:00'
sources: []
---

**Clarify**  
*Problem:* Design a real‑time location service for DoorDash that tracks couriers, shows nearby restaurants/food, and pushes updates to riders’ apps.  
Assumptions:  
- High write/read throughput (10k+ couriers).  
- Latency < 200 ms for UI refresh.  
- Scale globally; need partitioning by region.

**Approach**  
1. **Geo‑hash the world into a grid** (e.g., 5 km cells) and store courier coordinates in a distributed key‑value store keyed by cell ID + courier ID.  
2. **Maintain an index of restaurants per cell** so nearby pickups can be fetched quickly.  
3. Use **WebSocket connections** from each rider’s app to a regional gateway that subscribes to the relevant cells.  
4. When a courier moves, publish the new geo‑hash to a message bus; the gateway forwards updates only to clients whose subscribed cells overlap.

**Depth**  
- *Write path:* Courier SDK sends `PATCH /location`. Service writes to cache (Redis) and publishes to Kafka topic “location‑updates”.  
- *Read path:* Rider’s WebSocket receives JSON `{courierId, lat, lng}`. UI updates in < 200 ms.  
- Complexity: O(1) write/read; sharding by cell gives O(log N) for range queries (restaurants).  
- Trade‑off: Smaller cells increase precision but raise message volume; choose granularity based on density.

**Edge Cases**  
- Couriers crossing cell boundaries → duplicate updates; deduplicate at gateway.  
- Network partitions → fallback to polling.  
- Time zone changes or daylight saving → store UTC timestamps.

**Optimize & Communicate**  
- **Cache hot cells** in Memcached to reduce DB hits.  
- **Back‑pressure on WebSockets**: batch 5 updates per second.  
- Explain the flow to interviewers, highlighting how geo‑hashing keeps data locality and WebSockets provide low‑latency push, satisfying DoorDash’s real‑time UX requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
