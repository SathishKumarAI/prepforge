---
qid: ing_54aeb0109b__faang__local
question: 'Explain: thing going on but as far as — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 459
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:00:56-05:00'
sources: []
---

**Clarify**  
The interview asks how DoorDash might implement real‑time, location‑based services (e.g., showing nearby drivers/orders) using *geo‑hashing* and *WebSockets*. I’ll assume we need low latency updates to many users on mobile clients and that data is highly read‑heavy.

---

**Approach**  
1. **Spatial indexing** – use a geohash (or H3) to bucket latitude/longitude into fixed cells.  
2. **Publish/Subscribe channel** – each cell corresponds to a WebSocket topic.  
3. **Server architecture** – stateless API gateway + Redis Pub/Sub or Kafka for message distribution.  
4. **Client flow** – client subscribes to its current cell and neighboring cells; receives incremental updates.

---

**Depth**  
*Geo‑hashing*: 10‑bit precision (~1 km) gives coarse granularity; 14‑bit (~15 m) for fine updates. Encode coordinates into a string, store in a key‑value store (Redis).  

*WebSockets*: Each client opens a persistent TCP connection to the gateway. Gateway routes messages via Redis channels: `cell:<hash>`. When a driver moves, the server publishes an update to its old and new cells; all subscribers receive it instantly.  
Time complexity: O(1) for lookup/publish; space proportional to active clients × cell count.  

Trade‑offs: higher precision → more channels, but less cross‑cell traffic; lower precision → fewer channels but larger payloads.

---

**Edge Cases**  
- **Cell borders**: a driver crossing boundaries triggers two publishes.  
- **High churn**: clients reconnecting on network loss must re‑subscribe.  
- **Scaling**: too many cells can overwhelm Redis; consider sharding by region or using Kafka partitions.

---

**Optimize & Communicate**  
To reduce load, batch updates per cell every 100 ms and compress payloads. Use back‑pressure to avoid flooding clients. I’d explain this flow with a diagram in the interview and emphasize the trade‑off between granularity and system complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
