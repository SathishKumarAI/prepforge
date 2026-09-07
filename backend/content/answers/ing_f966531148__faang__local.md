---
qid: ing_f966531148__faang__local
question: 'Explain: Now what we looked at earlier was — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:25-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system like **Google Maps**—a global routing & navigation service that serves millions of users with real‑time traffic, turn‑by‑turn directions, and map rendering. Key assumptions:  
* High read/write traffic (≈10⁶ req/s).  
* Data must be up‑to‑date (traffic, road closures).  
* Low latency (<200 ms) for queries.  

**Approach**  
1. **Data layer** – store road graph as a distributed graph DB (e.g., Neo4j/JanusGraph) with edge weights = travel time.  
2. **Indexing** – use *spatial indexes* (R‑tree, geohash) for point queries and *pre‑computed shortest paths* via contraction hierarchies or hub labels.  
3. **Routing engine** – run A* on the graph, leveraging edge weights + heuristic (Euclidean). Cache frequent routes in a CDN.  
4. **Traffic layer** – ingest sensor streams (vehicles, traffic cams) into a time‑series DB (InfluxDB), update edge weights via a background job.  
5. **API & CDN** – REST/GraphQL endpoints; static map tiles served from S3 + CloudFront; vector tiles for dynamic overlays.

**Depth**  
*Complexity*: Dijkstra/A* O(E log V) but with contraction hierarchies reduces to ~O(log V).  
*Trade‑offs*: Full graph replication vs. sharding (latency vs. consistency). Real‑time traffic updates introduce stale reads; we use eventual consistency and versioning.

**Edge Cases**  
*Road closures*: mark edges as impassable, recompute affected routes.  
*Scale spikes*: auto‑scale routing workers, use rate limiting.  
*Data corruption*: run periodic graph validation against authoritative sources.

**Optimize & Communicate**  
Improvements: implement *incremental shortest path updates* for localized traffic changes; employ *machine learning* to predict travel times from historical patterns. In an interview, I’d narrate the flow from user request → geocode → route compute → tile rendering, highlighting how each component meets latency and scalability goals. This structured explanation aligns with FAANG expectations of clear problem framing, thoughtful design, and technical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
