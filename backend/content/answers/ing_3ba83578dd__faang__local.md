---
qid: ing_3ba83578dd__faang__local
question: 'Explain: So let''s say if there was a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 492
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:03:15-05:00'
sources: []
---

**Clarify**  
> *Problem:* Design a scalable “Google Maps”‑style routing service that returns optimal routes for millions of users in real time.  
> *Assumptions I’d confirm:*  
> - What metrics matter? (latency, throughput, map freshness)  
> - Is the system read‑heavy or write‑heavy?  
> - Do we need multimodal transport (driving, walking, transit)?  
> - Are we okay with approximate solutions for speed?

**Approach**  
1. **Data layer:** Store road graph as a distributed graph DB (e.g., Neo4j) + edge attributes (speed limits, traffic).  
2. **Caching & precomputation:** Use *contraction hierarchies* or *hub labeling* to accelerate shortest‑path queries; cache popular routes in Redis.  
3. **Real‑time layer:** Overlay live traffic via a stream processor (Kafka → Flink) that updates edge weights on the fly.  
4. **API gateway & load balancer**: Route requests to regional microservices; use circuit breakers for fault tolerance.  
5. **Monitoring/Analytics**: Collect latency, error rates; auto‑scale based on demand.

**Depth**  
- *Shortest path*: Dijkstra with contraction hierarchies reduces query time from O(E) to ~O(log V).  
- *Traffic updates*: Apply incremental edge weight changes without recomputing the entire graph.  
- *Complexity*: Preprocessing O(V log V + E); per‑query O(√V).  
- *Trade‑offs*: Exactness vs latency; we accept small detours for 10 ms response.

**Edge Cases**  
- Road closures: flag edges as unavailable and recompute locally.  
- Extreme traffic spikes: fall back to static routes until real‑time data stabilizes.  
- Offline mode: serve last known route from local cache.

**Optimize & Communicate**  
I’d iterate on the graph representation (e.g., using *reach* pruning) to shave latency further, and propose A/B testing of different routing heuristics. I would explain each design choice in plain language, show how it meets SLA goals, and quantify expected throughput (≈10 k RPS per region).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
