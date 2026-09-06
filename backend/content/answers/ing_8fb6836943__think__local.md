---
qid: ing_8fb6836943__think__local
question: 'Explain: If it''s a one-way, if it''s a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 465
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:34:08-05:00'
sources: []
---

**1️⃣ Clarify the prompt & assumptions**  
   - Identify what “one‑way” means (e.g., unidirectional traffic, single‑source routing).  
   - Assume we’re designing a simplified Google‑Maps‑style system for interview context: large graph, real‑time updates, high availability.  

**2️⃣ Adopt a layered framework**  
   - **Data layer:** road network graph, live traffic feeds, POIs.  
   - **Processing layer:** routing algorithm (Dijkstra/A*), caching, load balancing.  
   - **Serving layer:** API gateway, micro‑services for search, navigation, map tiles.  

**3️⃣ Step‑by‑step reasoning**  
   1. *Graph representation*: adjacency lists + edge weights (distance/time).  
   2. *Routing*: precompute shortest paths (e.g., contraction hierarchies) for quick lookups; fall back to on‑the‑fly Dijkstra for dynamic traffic.  
   3. *One‑way handling*: mark directed edges, ensure algorithms respect directionality.  
   4. *Scalability*: shard graph by geographic region, use consistent hashing, replicate hot zones.  
   5. *Reliability*: read replicas, circuit breakers, graceful degradation when traffic data is stale.  

**4️⃣ Avoid common pitfalls**  
   - Don’t over‑optimize early; start with clear APIs.  
   - Beware of assuming static traffic—real‑world maps need continuous updates.  
   - Remember that “one‑way” can mean both *physical* road constraints and *data flow* (e.g., unidirectional API).  

**5️⃣ Sanity‑check & verbalize**  
   - Run a mental test: pick a city, simulate a query from A to B, walk through data fetch → routing → response.  
   - Explain trade‑offs: latency vs freshness, consistency models for traffic updates.  
   - Conclude with how the design scales and what future enhancements (e.g., ML‑based ETA predictions) could look like.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
