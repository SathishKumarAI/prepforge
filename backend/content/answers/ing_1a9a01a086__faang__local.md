---
qid: ing_1a9a01a086__faang__local
question: 'Explain: So think of two points let''s say — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 531
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:00-05:00'
sources: []
---

**Clarify**  
> *Problem*: Build a scalable service that receives any two geographic coordinates (latitude/longitude) and returns the shortest path between them on Google‑Maps‑style routing (distance, ETA, turn‑by‑turn).  
> *Assumptions to confirm*: map coverage (global vs city), traffic data availability, user device constraints, required accuracy (< 5 m), latency target (< 200 ms).

**Approach**  
1. **Graph model**: Road network → directed weighted graph; nodes = intersections, edges = road segments with base travel time + real‑time traffic weight.  
2. **Pre‑processing**: Build a *hub labeling* or *reach‑based* index for fast shortest‑path queries (O(1)–O(log n)).  
3. **Routing engine**: Use Dijkstra/A\* with heuristic (Euclidean distance). For large graphs, apply contraction hierarchies.  
4. **Data pipeline**: Ingest live traffic from sensors/partners → update edge weights in a distributed store (e.g., Apache Kafka + Cassandra).  
5. **Caching & CDN**: Cache frequent routes; serve pre‑computed itineraries via edge servers.

**Depth**  
*Time*: Pre‑processing O(n log n), query O(log n) with contraction hierarchies.  
*Space*: Store adjacency lists + labels (~10× original size).  
*Trade‑offs*: More accurate traffic → higher write load; heavier indices → larger memory footprint.

**Edge Cases**  
- *Road closures*: Re‑run routing on affected subgraph or fall back to cached route.  
- *Disconnected networks*: Return “no route” with alternative suggestions.  
- *Extreme latencies*: Graceful degradation (use historical average speeds).

**Optimize & Communicate**  
1. **Incremental updates**: Only recompute labels for affected nodes.  
2. **Parallelism**: Partition graph by region; run routing in parallel for multi‑segment trips.  
3. **Monitoring**: Latency dashboards, traffic anomaly alerts.

*Narration*: I’d first lay out the high‑level diagram, then walk through each layer—data ingestion → graph storage → routing query—highlighting scalability knobs and failure scenarios, ensuring interviewers see a holistic, production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
