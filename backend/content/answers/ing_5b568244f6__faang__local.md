---
qid: ing_5b568244f6__faang__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 438
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:32-05:00'
sources: []
---

**Clarify**  
The interview asks how we would design a *directed* graph system (e.g., Google Maps) that supports real‑time routing, updates, and large scale traffic data.  
Assumptions to confirm:  
1. Graph size – millions of nodes/edges (cities → roads).  
2. Query load – millions of shortest‑path queries per day.  
3. Edge weights change frequently (traffic, construction).  

**Approach**  
1. **Graph storage** – adjacency lists in a distributed key‑value store (e.g., BigTable), sharded by geographic region.  
2. **Routing engine** – precompute *contraction hierarchies* or *Hub Labeling* for O(log N) lookups; keep a lightweight cache per shard.  
3. **Dynamic updates** – use a delta stream that propagates weight changes to affected shards via Pub/Sub; recompute local contraction layers incrementally.  

**Depth**  
- Contraction Hierarchies: preprocess in O(E log V), query in ~O(log V).  
- Edge updates trigger *partial* re‑compression only for the impacted subgraph, avoiding full rebuilds.  
- Cache invalidation policy: LRU with a TTL of 5 min to balance freshness vs latency.  

**Edge Cases**  
- Disconnected components → fallback to global Dijkstra.  
- Massive simultaneous traffic spikes → scale cache horizontally; fall back to approximate routing (e.g., A* with heuristic).  
- Edge removal during query → atomic versioning per shard ensures consistency.  

**Optimize & Communicate**  
Highlight that the system trades off a small increase in storage for sub‑millisecond query times, essential for navigation apps. Explain how we monitor latency metrics and auto‑scale shards during peak hours. Conclude by noting that this architecture scales horizontally, tolerates failures via replication, and keeps updates near real‑time—key qualities for any large‑scale map service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
