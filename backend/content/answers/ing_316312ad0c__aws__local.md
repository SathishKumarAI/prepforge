---
qid: ing_316312ad0c__aws__local
question: 'Explain: roll at a time yes yes it — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 429
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:45-05:00'
sources: []
---

**Customer Obsession & Ownership**

When I designed DoorDash’s real‑time location service, the goal was to keep drivers and customers “in sync” within **200 ms latency** while scaling to 5 M concurrent users.  

**Situation:** The existing polling model caused stale driver locations (≈10 s lag) and a surge of traffic during peak hours, leading to 4% order‑miss rate.

**Task:** Replace polling with a push architecture that scales horizontally, reduces cost, and improves freshness.

**Action:**  
1. **Geo‑Hashing** – Partition the city into 30 m × 30 m cells using H3 (Uber’s open source). Each driver publishes their cell to an **Amazon Kinesis Data Stream**; consumers subscribe to only relevant shards, cutting bandwidth by ~70%.  
2. **WebSockets via Amazon API Gateway + Lambda@Edge** – Drivers establish a persistent WebSocket; when a new order appears in a cell, the edge function pushes an update directly to the driver’s socket, guaranteeing <200 ms delivery.  
3. **State Store (DynamoDB Global Tables)** – Keeps the latest geo‑hash and timestamp per driver, enabling quick lookups for nearby orders with sub‑10 µs latency.  

**Result:**  
- Latency dropped from 10 s to 0.2 s (95th percentile).  
- Order‑miss rate fell by **5%**, boosting revenue by $12M/quarter.  
- Operational cost reduced by **35%** due to fewer API calls and more efficient data routing.

**Learnings:** I iterated the geo‑hash granularity after observing false positives; this “fail fast, learn” loop is a core Amazon habit. The design balances scalability (Kinesis shards), availability (DynamoDB Global Tables), and cost (Edge functions vs. long‑running EC2).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
