---
qid: ing_ca673e69bd__think__local
question: 'Explain: Now a road, even though it looks — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 509
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:18:41-05:00'
sources: []
---

**1. Clarify the prompt & assumptions**  
   - Identify that the interview question is about *system design* (Google‑Maps style) rather than a math problem.  
   - Assume you’re asked to describe how you’d architect a “road” service: storing road segments, handling updates, querying routes, etc.  
   - Note constraints: scale (billions of users), latency (sub‑second routing), consistency (updates to roads), and data sources (satellite, user edits).

**2. Adopt a design framework**  
   - Start with *functional requirements*: CRUD on road segments, route calculation, traffic updates.  
   - Move to *non‑functional*: performance, scalability, fault tolerance, data freshness.  
   - Use the classic “data‑model → storage → service layer → API → client” flow.

**3. Step‑by‑step reasoning**  
   1. **Data model**: define a RoadSegment (id, geometry polyline, attributes).  
   2. **Storage choice**: spatial database (PostGIS) for indexing; cache hot segments in Redis.  
   3. **Update pipeline**: ingest satellite imagery → map‑matching → versioned segment store.  
   4. **Routing engine**: graph representation (nodes = intersections, edges = segments), use Dijkstra/A* with traffic weights.  
   5. **Scalability**: sharding by geographic tiles; load balancing; read replicas for routing queries.  
   6. **Consistency**: eventual consistency acceptable for maps; strong consistency for user edits via write‑ahead logs.

**4. Avoid common traps**  
   - Don’t gloss over *data freshness*: explain how updates propagate (e.g., Kafka streams).  
   - Skip *edge cases* like road closures, construction zones.  
   - Forget to discuss *cost trade‑offs* between storage and compute.

**5. Sanity‑check & verbalize**  
   - Re‑iterate the main components: data ingestion → storage → routing service → API.  
   - Verify that latency targets are met by caching and sharding.  
   - End with a quick “what if” (e.g., sudden traffic jam) to show robustness.

This structured walk‑through demonstrates clear thinking, covers all angles, and keeps the answer concise yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
