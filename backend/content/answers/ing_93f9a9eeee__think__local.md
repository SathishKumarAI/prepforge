---
qid: ing_93f9a9eeee__think__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 467
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:52:36-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify what “million orders” refers to (peak daily or per‑second traffic).  
   - Decide on the scope: Doordash’s architecture, not a generic ML model.  
   - Assume a distributed system with geospatial data and real‑time updates.

**2. Adopt a design‑thinking framework**  
   - Use *Problem → Constraints → Solution → Trade‑offs*.  
   - Map the problem to key sub‑systems: user location ingestion, order routing, delivery tracking.

**3. Step‑by‑step reasoning**  
   1. **Geohashing**: explain spatial indexing (grid cells), why it reduces search space, and its impact on latency.  
   2. **WebSocket usage**: describe persistent connections for push updates, bidirectional flow (driver → server, server → driver).  
   3. **Load distribution**: shard by geohash prefixes, use load balancers to route traffic.  
   4. **Scaling math**: illustrate how a million orders map to millions of concurrent WebSocket messages and hash lookups; estimate throughput per node.

**4. Common pitfalls to avoid**  
   - Mixing up *orders* with *messages*: one order can generate many location updates.  
   - Over‑optimizing geohash granularity (too fine → many cells, too coarse → inaccurate routing).  
   - Ignoring WebSocket reconnection and backpressure mechanisms.

**5. Sanity check & verbalization**  
   - Re‑calculate rough numbers: e.g., 1 M orders ≈ 10 k per second → each driver pushes ~10 updates/s → 100 k messages/s.  
   - Verify that the chosen geohash precision (e.g., 7–8 characters) gives ~1 km cells, suitable for city delivery.  
   - Summarize: “By hashing locations into grid cells and keeping drivers on long‑lived WebSocket streams, Doordash can route millions of orders with sub‑second latency while keeping per‑node load manageable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
