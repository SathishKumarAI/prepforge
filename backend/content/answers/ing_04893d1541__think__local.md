---
qid: ing_04893d1541__think__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 494
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:02:35-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify what “run a Dijkstra on” actually means (e.g., compute shortest path in a road network).  
- Assume we have a graph representation of roads, edge weights as travel times, and that we need to answer queries quickly.  

**2️⃣ Choose a mental model / framework**  
- Use the classic *graph‑theory + algorithm design* lens: data structures (adjacency list, priority queue), complexity analysis, and scalability concerns.  
- Map it onto a real‑world system design hierarchy: raw data ingestion → graph construction → query service → caching & sharding.  

**3️⃣ Step‑by‑step reasoning**  
1. **Graph construction** – ingest OpenStreetMap (OSM) tiles, parse nodes/ways into an in‑memory or disk‑based adjacency list.  
2. **Edge weighting** – convert speed limits, lane counts, traffic data into weights; decide if static or dynamic.  
3. **Algorithm choice** – plain Dijkstra for small queries, A* with heuristics (e.g., straight‑line distance) for speed, and potential use of contraction hierarchies for massive scale.  
4. **Scaling the query layer** – shard graph by geographic region, replicate hot spots, expose a REST/GRPC API that accepts source/destination IDs.  
5. **Caching & precomputation** – store frequently used routes, use incremental updates when traffic changes.  

**4️⃣ Common pitfalls to avoid**  
- Forgetting that real road networks are directed and may have one‑way streets.  
- Ignoring the cost of maintaining up‑to‑date edge weights (traffic, construction).  
- Assuming Dijkstra alone is enough; for millions of queries you need preprocessing or parallelism.  

**5️⃣ Sanity checks & verbalizing**  
- Verify that the graph’s size fits in memory or choose an on‑disk solution.  
- Check that latency requirements (e.g., < 200 ms) are met with chosen data structures.  
- Explain trade‑offs: more preprocessing → faster queries vs higher storage and update cost.  

By walking through these steps, you can systematically design a system that runs Dijkstra efficiently at Google‑Maps scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
