---
qid: ing_d3fd90bfc6__think__local
question: 'Explain: This would have a length of 5 — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 527
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:56:25-05:00'
sources: []
---

**1. Clarify the prompt & set assumptions**  
   - Identify what “this” refers to (the component or system being described).  
   - Assume we’re asked to sketch a high‑level architecture for a service that returns a path of length 5 between two points on Google Maps.  
   - Note constraints: real‑time response, large graph, scalability.

**2. Choose a mental model / framework**  
   - Use the classic *System Design* four‑step approach: (a) requirements & scope, (b) high‑level design, (c) data flow & storage choices, (d) trade‑offs & scaling concerns.  
   - For pathfinding, lean on graph theory fundamentals (nodes = intersections, edges = roads).

**3. Reason step by step toward the answer**  
   1. **Define functional requirements**: find shortest or most efficient route of exactly five segments between two points.  
   2. **Model the data**: store road network as a weighted graph; use adjacency lists for sparsity.  
   3. **Algorithm choice**: modified BFS/DFS that stops after depth 5, or Dijkstra with early exit when distance > 5 edges.  
   4. **Caching & precomputation**: keep popular routes in cache; pre‑compute 5‑hop neighborhoods for hot spots.  
   5. **Scalability**: shard graph by geographic region, use distributed graph databases (e.g., Neo4j or JanusGraph).  
   6. **Fault tolerance**: replicate shards, circuit breakers around external services.

**4. Common traps to avoid**  
   - Forgetting that “length 5” refers to number of edges, not physical distance.  
   - Over‑engineering: adding full routing engine when a simple BFS suffices for fixed depth.  
   - Ignoring the impact of traffic data on edge weights; assuming static weights can mislead.

**5. Sanity‑check & communicate**  
   - Re‑explain each component in one sentence to ensure coherence.  
   - Verify that the design meets latency goals (e.g., < 200 ms) and scales with millions of queries.  
   - Highlight trade‑offs: e.g., precomputation vs. real‑time traffic updates.  

This structured, stepwise approach lets you tackle similar system‑design questions confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
