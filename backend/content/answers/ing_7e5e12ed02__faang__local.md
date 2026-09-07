---
qid: ing_7e5e12ed02__faang__local
question: 'Explain: point so instead of doing one range — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 476
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:38:59-05:00'
sources: []
---

**Clarify**

We need to design DoorDash’s “real‑time location” feature: drivers see nearby restaurants/orders and customers see driver ETA.  
Assumptions to confirm:  
1. High traffic (≈ 10⁶ concurrent users).  
2. Latency < 200 ms for updates.  
3. Accuracy ~ 100 m.  
4. Mobile clients (iOS/Android) use WebSocket or MQTT.

**Approach**

1. **Geospatial indexing** – use Geo‑Hash to bucket coordinates into 5–10 km cells, enabling O(1) lookup of nearby entities.  
2. **Publish‑subscribe over WebSockets** – each client subscribes to its cell; updates are pushed as they arrive.  
3. **Data flow** – mobile → server → Redis Pub/Sub → WebSocket hub → client.

**Depth**

*Geo‑Hash:* encode lat/long into a 12‑char string (≈ 10 m precision). Store entities in a key‑value store keyed by hash. When a driver moves, compute new hash and issue `DEL` on old bucket + `SET` on new one.  
*WebSocket hub:* use an event‑driven server (e.g., Node.js or Go) that maintains a map from hash → connected sockets. On entity update, publish to Redis channel; hub forwards to all sockets in that hash. Complexity: O(log N) for hash lookup, O(1) per message broadcast.

**Edge Cases**

- **Cell boundary crossings** – double‑publish during transition to avoid missing updates.  
- **Network partitions** – fallback to polling every 30 s if WebSocket drops.  
- **Scale spikes** – shard Redis by hash prefix; use load balancer for hub instances.

**Optimize & Communicate**

Add *caching* of recent positions on the client to reduce round‑trips, and compress messages (protobuf). Explain trade‑offs: higher precision = larger key space → more shards. Conclude with a diagram of the publish–subscribe flow and mention monitoring metrics (latency, message loss) to validate performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
