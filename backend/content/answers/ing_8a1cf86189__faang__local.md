---
qid: ing_8a1cf86189__faang__local
question: 'Explain: point is that basically we want to — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 482
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:21-05:00'
sources: []
---

**Clarify**  
The interview asks us to design a location‑based service like DoorDash’s “real‑time rider tracking.”  
Assumptions:  

* Thousands of concurrent riders and restaurants in a city.  
* Latency < 200 ms for UI updates.  
* Riders move at ~10–20 km/h, so positions change every few seconds.  
* We need to keep the server load bounded while supporting accurate geospatial queries.

**Approach**  

1. **Data model** – Each rider’s latest lat/long is stored in a distributed key‑value store keyed by `rider_id`.  
2. **Geo‑hashing** – Convert coordinates into an H3 hexagon (resolution 12 ≈ 50 m). Store mapping `hex → set<rider_id>`.  
3. **Subscription** – Clients open a WebSocket; the server pushes updates for the rider’s current hex and its immediate neighbors.  
4. **Publish‑subscribe bus** – Use Kafka or Redis Streams to fan out position changes to all interested WebSockets.  

**Depth**  

* H3 gives O(1) lookup of nearby riders and deterministic grid boundaries, avoiding expensive range queries.  
* Each position update costs: write to KV (O(log N)), append to stream (O(1)), broadcast to ~k sockets where k is the average number of neighbors (~5–10).  
* Latency dominated by network; WebSocket keeps a persistent TCP connection so no handshake overhead.

**Edge Cases**  

* Rider jumps across city blocks → we need to recompute hex membership.  
* High‑density zones may have >100 riders in one hex; fallback to finer resolution or secondary filtering.  
* Network partitions: use optimistic updates and reconcile on reconnect.

**Optimize & Communicate**  

* Cache the last known hex per socket to avoid redundant sends.  
* Scale horizontally by sharding hexes across nodes; use consistent hashing so movement between shards is rare.  
* Explain that geo‑hashing trades a small spatial error for massive performance gains, and WebSockets keep the system responsive without polling. This satisfies FAANG’s focus on scalable, low‑latency design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
