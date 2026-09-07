---
qid: ing_2adb0ced9e__faang__local
question: 'Explain: the relevant points are going to be — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 625
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:56-05:00'
sources: []
---

**Clarify**  
We’re asked how DoorDash could architect its location‑based services—specifically the use of **geo‑hashing** and **WebSocket** connections—to deliver real‑time driver–customer positioning.

*Assumptions to confirm:*  
- Latency < 200 ms for position updates.  
- Scale: millions of concurrent users, thousands of drivers.  
- Data privacy (GDPR/CCPA) & minimal storage of raw GPS points.

---

**Approach**  

1. **Ingest GPS streams** from driver devices → edge‑proxied WebSocket.  
2. **Normalize coordinates** to a consistent CRS.  
3. **Geo‑hash each point** into hierarchical prefixes (e.g., 10‑bit cells ≈ ≈ 5 km²).  
4. Store in a distributed key‑value store keyed by hash → O(1) lookup of nearby drivers.  
5. Push updates to clients via WebSocket; use **topic subscription** per geo‑cell.

---

**Depth**

| Layer | Responsibility |
|-------|----------------|
| Driver app | Emits GPS at 2 s cadence over secure WebSocket. |
| Edge gateway | Terminates TLS, forwards JSON `{lat,lng,timestamp}` to stream processor. |
| Stream processor (e.g., Kafka Streams) | Computes geo‑hash, writes to Redis Cluster (`geoHash→{driverId,lat,lng}`). |
| Client app | Subscribes to its current cell; receives delta updates; renders map. |

*Complexity:*  
- **Time:** O(1) per update (hashing + hash table write).  
- **Space:** O(N drivers) in Redis; negligible per‑driver overhead.

*Trade‑offs:*  
- Geo‑hash granularity balances precision vs. cluster load.  
- WebSocket keeps connection alive but adds overhead; fallback to HTTP long‑polling for low‑bandwidth devices.

---

**Edge Cases**

1. **Cell boundary crossing** – emit a “cell change” event, re‑subscribe client.  
2. **Lost connectivity** – server holds last known position for 30 s before expiring.  
3. **Duplicate updates** – use monotonic timestamps to dedupe.  
4. **Privacy** – strip raw coordinates from logs; only store hashed cells.

---

**Optimize & Communicate**

- **Batching**: aggregate multiple driver updates per 100 ms window before flushing to Redis.  
- **Backpressure**: implement sliding windows in Kafka Streams to prevent overload.  
- **Monitoring**: track WebSocket ping‑pong latency, hash distribution heatmaps.  

I’d explain this flow verbally while pointing to the table, emphasizing how geo‑hashing gives O(1) neighbor queries and WebSockets ensure sub‑second real‑time updates—exactly what a FAANG interviewer expects for clarity, depth, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
