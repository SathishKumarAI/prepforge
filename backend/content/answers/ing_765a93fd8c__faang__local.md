---
qid: ing_765a93fd8c__faang__local
question: 'Explain: kind of a real-time update and so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 503
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:56-05:00'
sources: []
---

**Clarify**

You’re asked to design DoorDash’s location‑based service that pushes real‑time updates (e.g., driver ETA, restaurant availability) to customers and drivers.  
Assumptions: *High traffic (~10⁶ users), low latency (<200 ms), geospatial accuracy ~50 m, data volume ≈ 1 M GPS points/s.*

**Approach**

1. **Geospatial partitioning** → Geo‑Hash + R‑Tree for fast point lookup.  
2. **Real‑time distribution** → WebSocket cluster per region.  
3. **Data ingestion & storage** → Kafka → Redis (TTL) → PostgreSQL/PostGIS for persistence.  
4. **Failover & scaling** → Kubernetes, autoscaling, sticky sessions.

**Depth**

- *Geo‑Hash*: 10‑bit precision ≈ 100 m cells; store each driver’s cell ID in Redis.  
- *WebSockets*: A worker per cell opens a persistent channel to all clients whose device is inside that cell or adjacent cells.  
- *Push logic*: On GPS update, compute new cell → publish to Kafka topic “cell‑updates”. Consumers (WS workers) pull updates and broadcast to subscribed sockets.  
- *Latency*: Ingestion <10 ms; WS delivery <50 ms. Complexity O(log N) for R‑Tree queries, O(1) for Redis lookups.  

**Edge Cases**

- Drivers hop cells rapidly → duplicate messages → dedupe via sequence numbers.  
- Network partitions → stale location → TTL in Redis forces refresh.  
- Sudden surge (e.g., event) → shard rebalancing to avoid hotspot.

**Optimize & Communicate**

- **Batching**: Group updates per cell every 50 ms to reduce message churn.  
- **Backpressure**: Flow control on Kafka consumers; if WS backlog > threshold, drop oldest.  
- **Observability**: Metrics (latency histograms), alerts for cell‑worker overload.  

Explain trade‑offs clearly: Geo‑Hash simplifies partitioning but introduces boundary errors; WebSockets offer low latency vs REST polling; Redis provides speed at cost of eventual consistency. This structured plan shows problem understanding, design depth, edge‑case handling, and optimization—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
