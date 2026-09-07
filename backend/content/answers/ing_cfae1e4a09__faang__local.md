---
qid: ing_cfae1e4a09__faang__local
question: 'Explain: be in cities so i think to — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 551
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:18-05:00'
sources: []
---

**Clarify**  
We’re asked how DoorDash could build a real‑time location service that lets drivers stay “in cities” and quickly match with nearby orders. I’ll assume we need: (1) efficient nearest‑neighbor lookup of drivers/orders, (2) low‑latency updates as drivers move, and (3) scalability to millions of concurrent users.

**Approach**  
1. Partition the world into geohash cells (e.g., 5–6 character precision → ~100 m).  
2. Store driver/location rows in a distributed key‑value store keyed by geohash + driver ID.  
3. Use WebSocket connections for bidirectional, low‑latency streaming of location updates from drivers to the server.  
4. On the server side, push only cells that change or cross thresholds (e.g., every 5 s).  
5. When a rider requests an order, query neighboring geohash cells to find available drivers and compute distances.

**Depth**  
*Geohashing*: Encodes lat/long into a string; adjacent strings map to neighboring regions, making range queries trivial.  
*Data store*: A sharded Redis cluster or DynamoDB with secondary indexes on geohash gives O(log N) lookups.  
*WebSockets*: Each driver maintains one persistent connection; updates are sent as compact JSON (lat, lon, status). The server runs a publish‑subscribe loop that broadcasts to all clients in the same cell. Complexity: Update O(1), query O(k log M) where k is neighbor cells and M drivers per cell.  
*Scalability*: Horizontal scaling via sharding on geohash; use load balancers for WebSocket endpoints.

**Edge Cases**  
- Drivers crossing geohash boundaries → duplicate notifications; solved by sending a “cell transition” event.  
- Sparse cells (rural areas) → fallback to GPS polling or larger cell size.  
- Network partitions → local caching on driver app with optimistic updates.

**Optimize & Communicate**  
Future improvements: use H3 hexagonal grids for better shape, integrate vector‑based distance metrics, and add a “heat map” layer to pre‑allocate drivers in high‑demand zones. I’d explain the trade‑offs (geohash precision vs. query speed) and validate with load tests simulating 10 M concurrent connections. This structured narrative shows clear problem framing, solid architectural choices, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
