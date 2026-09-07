---
qid: ing_65a7c57987__faang__local
question: 'Explain: http long polling or something i think — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 500
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:48-05:00'
sources: []
---

**Clarify**  
You’re asking how DoorDash could build a real‑time location service that lets riders see nearby restaurants, drivers, and orders as they move.  
Assumptions: *We need sub‑second updates, low latency, high throughput, and a scalable architecture that works across many cities.*  

---

### Approach
1. **Data ingestion** – every device (driver or rider app) pushes its GPS to a fast ingest layer (Kafka/Redis Streams).  
2. **Geohashing** – convert lat/lon into a grid key (e.g., 10 m resolution). This gives us O(1) lookup of “who is in my vicinity.”  
3. **In‑memory index** – store the latest position per ID in Redis or Memcached keyed by geohash.  
4. **Subscription model** – each client opens a WebSocket (or SSE for browsers). The server subscribes the socket to the geohash bucket(s) that intersect the user’s viewport.  
5. **Push updates** – whenever an ingest event changes a position, the service publishes to the affected buckets; all sockets subscribed receive a diff payload.  

---

### Depth
- **Geohash granularity**: 7–8 chars (~100 m) balances precision vs. bucket size.  
- **Load‑balancing**: shards by hash prefix so no single node becomes hot.  
- **Latency**: ingest → Redis → websocket push < 200 ms on a good network.  
- **Fault tolerance**: use Redis Cluster with replication; Kafka provides replay for missed updates.  

---

### Edge Cases
- *Rapid movements* (e.g., driver zig‑zagging) cause bucket churn – throttle position updates to ~1 s.  
- *Offline devices*: store last known position and mark stale after 30 s.  
- *Edge of bucket*: broadcast to neighboring buckets or use a “viewport” polygon check on the client side.  

---

### Optimize & Communicate
Explain that we trade off a bit of accuracy (10‑m grids) for massive scalability; WebSockets give true duplex, low overhead vs. long polling which would be 3–4× more bandwidth and latency. Highlight that this design lets us support millions of concurrent users with minimal cost while keeping the user experience buttery smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
