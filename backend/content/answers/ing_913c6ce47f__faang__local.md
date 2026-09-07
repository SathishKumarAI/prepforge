---
qid: ing_913c6ce47f__faang__local
question: 'Explain: Now there will be a map update — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 505
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:10-05:00'
sources: []
---

**Clarify**  
We’re asked to design the core of *Google Maps* after an upcoming “map update” feature (e.g., bulk road/POI refresh). I’ll assume:  
1. Updates are large‑scale, potentially billions of vertices/edges.  
2. Latency for end‑users must stay ≤ 200 ms.  
3. Consistency is eventual; users may see old or new data concurrently.

**Approach**  
1. **Data Model** – graph (vertices = intersections, edges = roads). Store in a distributed key‑value store with spatial indexing (R‑tree/GeoHash).  
2. **Update Pipeline** – ingest delta files → stream processor (Kafka) → worker nodes that apply diffs to the graph.  
3. **Versioning & Rollout** – keep two replicas: live and staging. Use *immutable snapshots* per update; switch traffic via feature flags once the new snapshot is fully propagated.  
4. **Serving Layer** – read‑only in‑memory graph shards (e.g., Redis Cluster) for routing queries, backed by a persistent store for persistence.

**Depth**  
- **Update Latency**: Kafka + Spark/ Flink can process ~10⁶ updates/sec; propagation to shards ≈ 30 s.  
- **Routing**: Dijkstra/A* on in‑memory shard (O(|E| log |V|)).  
- **Consistency**: Use *read‑your‑writes* by routing user’s session to the same shard version.  
- **Fault Tolerance**: Replicate shards, use write‑ahead logs.

**Edge Cases**  
- Network partitions → serve stale data until sync.  
- Conflicting updates (e.g., overlapping road closures) → merge policy based on timestamp or authority level.  
- Hotspots (city centers) may overload a shard; sharding by geographic tiles mitigates this.

**Optimize & Communicate**  
We can reduce memory footprint with *compressed adjacency lists* and *delta encoding*. For faster rollouts, incremental deployment per region. I’d explain the trade‑off: higher replication = better availability but increased storage cost. Finally, I’d present a diagram of ingestion → processing → snapshot → serving to illustrate end‑to‑end flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
