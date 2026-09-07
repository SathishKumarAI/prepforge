---
qid: ing_69a69170d4__faang__local
question: 'Explain: engineer over at google in the united — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 470
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:15-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a location‑based service (LBS) for DoorDash on Google’s stack, focusing on geo‑hashing and WebSockets.  
Assumptions:  
- Real‑time driver & customer positions (≤ 10 k updates/s).  
- Latency < 200 ms per update.  
- Scale: 1M concurrent users, 100k delivery zones.  

**2️⃣ Approach**  
1. **Geospatial indexing** – use S2 cells (Google’s spatial index) to bucket GPS points.  
2. **Data pipeline** – Kafka → Flink → Bigtable for persistence; WebSocket broker (e.g., Cloud Pub/Sub + Cloud Functions).  
3. **Client subscription** – each client subscribes to its containing cell + neighbors.  

**3️⃣ Depth**  
- *Geo‑hashing*: S2 cells of level 16 (~10 m) give fine granularity. Each update maps to a cell ID; Bigtable row key = `cellID|timestamp`. Retrieval uses range scans on neighboring cells. Complexity: O(1) insert, O(log N + k) query (k = neighbors).  
- *WebSockets*: Deploy Cloud Run instances behind a load balancer with session affinity. Push updates via Pub/Sub; each instance pulls relevant cell messages and forwards to connected clients. Throughput scales horizontally; latency ≈ < 100 ms.  

**4️⃣ Edge Cases**  
- **High churn**: handle disconnections gracefully, keep last known location in cache.  
- **Cell boundary crossing**: double‑publish until acked.  
- **Data skew**: hotspots → shard Bigtable by cell prefix.  

**5️⃣ Optimize & Communicate**  
- Cache recent cells in Memorystore to reduce Bigtable reads.  
- Use compression (protobuf) over WebSocket payloads.  
- Monitor latency via Cloud Monitoring; auto‑scale based on QPS.  

This design balances low latency, horizontal scalability, and maintainability—key for a high‑traffic LBS like DoorDash on Google’s infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
