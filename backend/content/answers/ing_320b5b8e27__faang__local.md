---
qid: ing_320b5b8e27__faang__local
question: 'Explain: Coming to the last thing, now this — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:48-05:00'
sources: []
---

**Clarify**  
You’re asked to design a system like **Google Maps** (routing, POI lookup, real‑time traffic). Key assumptions:  
- Scale: millions of concurrent users worldwide.  
- Latency: < 200 ms for route/POI queries.  
- Data freshness: traffic updates every few seconds; map data updated weekly.  

**Approach**  
1. **Data layer** – store a graph (nodes = intersections, edges = road segments) in a distributed key‑value store; use Geo‑sharding to keep nearby nodes local.  
2. **Routing service** – run A* or Dijkstra on the shard containing the user’s start/end points; cache shortest paths per region.  
3. **Traffic layer** – publish traffic metrics via Kafka; each edge gets a live weight multiplier.  
4. **POI service** – index POIs in an inverted index (text) + spatial index (R‑tree).  
5. **API gateway** – rate‑limit, route requests to nearest region’s services.  

**Depth**  
- *Routing*: pre‑compute “base” routes offline; online layer applies traffic weights. Complexity ≈ O(E log V) per query, but cached paths reduce this dramatically.  
- *Scalability*: sharding + replication gives linear throughput; consistency via eventual updates for traffic (acceptable).  
- *Fault tolerance*: use consensus (Paxos/RAFT) on critical config nodes; hot‑standby replicas for shards.  

**Edge Cases**  
- Sudden road closures → broadcast to all routing instances, invalidate cached paths.  
- Offline users → serve last known map tiles from CDN.  
- Massive traffic spikes during events → auto‑scale by adding more routing workers.  

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit rates reduce compute but increase storage; using a graph database (Neo4j) vs raw KV store affects write latency. End with a diagram sketch and stress that this architecture balances low latency, high availability, and real‑time data freshness—exactly what Google Maps requires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
