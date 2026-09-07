---
qid: ing_52f12cf80f__faang__local
question: 'Explain: Now let''s have suddenly a lot of — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 450
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:07-05:00'
sources: []
---

**Clarify**  
You’re asked to design the core of Google Maps (routing, navigation, real‑time traffic).  
Assumptions: we need near‑real‑time updates for millions of users, low latency (<100 ms), high availability, and support for offline maps.

**Approach**  
1. **Data ingestion** – ingest road graph, POIs, and sensor streams (GPS, cameras).  
2. **Graph storage** – partition the global road network into *tiles* (e.g., 10 km²) and store each tile in a distributed key‑value store (Cassandra/Spanner).  
3. **Routing engine** – run Dijkstra/A* on the local tiles, then stitch results across tiles using a hierarchical routing layer (macro roads as meta nodes).  
4. **Traffic layer** – maintain a time‑series DB (Druid) for congestion; publish deltas via Pub/Sub to cache layers.  
5. **Serving** – edge CDN + in‑app cache (Redis) for map tiles and precomputed routes.  

**Depth**  
- Routing complexity: O(E log V) per request, but we reduce E by using hierarchical edges.  
- Traffic updates propagate in ~1 s; stale data tolerance set to 30 s.  
- Consistency: eventual consistency on traffic, strong on road topology (schema changes).  

**Edge Cases**  
- Sudden road closures → hot‑swap graph segment and recompute affected routes.  
- Offline mode → ship static tiles + cached routing tables.  
- High load spikes → auto‑scale edge servers via Kubernetes.

**Optimize & Communicate**  
We can precompute *shortcut* edges for popular queries, reducing latency by ~30 %. Explain trade‑offs: more storage vs faster response. Emphasize monitoring (latency, cache hit ratio) and continuous A/B testing of routing heuristics. This structured plan shows clear problem understanding, systematic design, and readiness to iterate under real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
