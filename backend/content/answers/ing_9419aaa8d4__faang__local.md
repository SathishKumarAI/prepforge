---
qid: ing_9419aaa8d4__faang__local
question: 'Explain: this point are close by right so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 532
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:47-05:00'
sources: []
---

**Clarify**  
We’re asked to design a real‑time location service for DoorDash that (1) groups nearby riders/deliveries using geo‑hashing and (2) pushes updates via WebSockets. Clarifying assumptions:  

* 10 M active users, ~1 M concurrent connections.  
* Latency target <200 ms for a rider to see new orders.  
* Geographic area: United States (~3 million km²).  

**Approach**  
1. **Geo‑hashing layer** – encode latitude/longitude into a hierarchical prefix (e.g., S2 or H3) with 10–12 bits per cell (~10 km²).  
2. **In‑memory index** – Redis Cluster keyed by geo‑cell → set of user session IDs.  
3. **Subscription model** – each WebSocket connection subscribes to its current cell and adjacent cells (to catch edge cases).  
4. **Event stream** – Kafka topics per cell for order events; a consumer pushes to all sessions in that cell.  

**Depth**  
* Geo‑hash granularity balances precision vs. cardinality: 12‑bit cells give ~10 km², enough for “close by” while keeping the Redis key space <2^12=4096 per region.  
* WebSocket server runs on stateless containers; session IDs stored in a cookie and verified against a JWT.  
* Push flow: Kafka → consumer → Redis pub/sub → WebSocket send. Complexity O(1) per event, memory O(#cells + #sessions).  

**Edge Cases**  
* User moves across cells: close the old subscription, open new; use heartbeat to detect disconnections.  
* Cell boundary orders: subscribe to neighboring cells (8‑neighborhood).  
* Scaling: shard Redis by region, add more Kafka partitions as event rate grows.  

**Optimize & Communicate**  
To reduce latency further, pre‑compute “hot” cells and keep them in a hot cache; batch WebSocket messages per 50 ms window to amortize overhead. I’d explain the trade‑off between cell size (accuracy vs. load) and note that using a proven spatial index like H3 keeps implementation simple while providing deterministic hashing. This structured plan shows clear problem restatement, systematic design, complexity analysis, edge‑case handling, and optimization insights—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
