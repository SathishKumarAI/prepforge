---
qid: ing_dd1bc0119f__faang__local
question: 'Explain: That would too complicated to run a — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 544
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:38-05:00'
sources: []
---

**Clarify**  
You’re asked to design the core of **Google Maps**—the routing and location service that powers real‑time navigation for millions daily. Confirm key assumptions: (1) traffic data is available from sensors/partners; (2) latency < 200 ms for route queries; (3) scalability to >10M concurrent users; (4) support incremental updates (road closures, construction).

**Approach**  
1. **Data Layer** – store road graph in a distributed key‑value store with adjacency lists; use a spatial index (R‑tree/Geohash).  
2. **Routing Engine** – precompute *hierarchical* shortest paths (e.g., Contraction Hierarchies) for fast online Dijkstra/A*.  
3. **Traffic Layer** – ingest real‑time sensor streams into a stream processor (Kafka → Flink); update edge weights lazily.  
4. **Cache & CDN** – cache popular routes in memcached; use edge nodes to reduce round‑trip time.  
5. **API Gateway** – expose REST/GRPC endpoints with rate limiting and authentication.

**Depth**  
- **Graph Storage**: Use a sharded graph DB (e.g., Neo4j or custom key‑value) where each node’s adjacency list is a value; this gives O(1) neighbor fetch.  
- **Routing**: Contraction Hierarchies reduce query time to ~O(log n). For dynamic traffic, maintain *edge weight updates* in memory and recompute affected routes on demand.  
- **Scalability**: Partition graph by geographic region; route requests hit local shard → lower latency. Use consistent hashing for failover.  
- **Complexity**: Preprocessing O(|E| log |V|); online query O(log |V|). Traffic updates are O(1) per edge.

**Edge Cases**  
- Sudden road closures → trigger incremental re‑routing; fall back to cached path if latency > 200 ms.  
- Sparse traffic data → default to historical averages.  
- Concurrent updates on same edge → use optimistic concurrency control.

**Optimize & Communicate**  
Explain that the hierarchical routing gives sub‑millisecond queries, while streaming traffic ensures relevance. Highlight trade‑offs: heavier precomputation vs. lower latency; more memory for caching vs. cost. Conclude with how this architecture satisfies scalability, low latency, and real‑time adaptability—key FAANG criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
