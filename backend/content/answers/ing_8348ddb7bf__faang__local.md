---
qid: ing_8348ddb7bf__faang__local
question: 'Explain: With that let''s get started. A bit — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 519
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:11-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the core of *Google Maps*: a scalable service that stores maps, serves map tiles and navigation data, supports real‑time traffic, and powers routing for millions of users worldwide.  
Assumptions:  
- High read/write throughput (billions of tile requests/day).  
- Global latency < 200 ms.  
- Need offline caching, versioning, and frequent updates from sensors.

**2️⃣ Approach**  
1. **Data model** – spatial key‑value store for tiles (Geo‑hash + zoom level → image/metadata).  
2. **Storage layer** – sharded, replicated object store (e.g., GCS) with CDN edge caches.  
3. **Serving layer** – stateless tile servers behind a global load balancer; use HTTP/2 and gzip.  
4. **Routing engine** – graph database (OpenStreetMap‑style), pre‑computed shortest paths per region, updated nightly.  
5. **Traffic layer** – ingest sensor streams into Kafka → stream processor → update edge weights in real time.  
6. **API gateway** – rate‑limit, auth, and routing to appropriate backend.

**3️⃣ Depth**  
- *Tile retrieval*: O(1) read from CDN; fallback to origin if miss.  
- *Routing*: Dijkstra/A* on a sparse graph; use contraction hierarchies for sub‑second queries.  
- *Traffic updates*: publish‑subscribe model, eventual consistency; stale data < 5 s.  
Complexities: storage ~O(N) tiles; query latency O(log V + E) ≈ O(1) with pre‑computation.

**4️⃣ Edge Cases**  
- Sudden traffic spike → auto‑scale CDN nodes.  
- Data center outage → read from mirrored region.  
- Map updates (new roads) → version bump, graceful roll‑out to clients.

**5️⃣ Optimize & Communicate**  
- Compress tiles aggressively; use vector tiles for low bandwidth.  
- Cache routing results per user session.  
- Profile with synthetic traffic; iterate on partitioning strategy.  

*Wrap‑up*: By layering a globally replicated storage layer, edge caching, efficient graph routing, and real‑time traffic ingestion, we achieve high availability, low latency, and the scalability required for a service like Google Maps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
