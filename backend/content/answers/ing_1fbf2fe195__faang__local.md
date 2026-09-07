---
qid: ing_1fbf2fe195__faang__local
question: 'Explain: Traffic and all other things will come — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:58:32-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design for the core “traffic & routing” service that powers Google Maps. I’ll assume: (1) real‑time traffic data from millions of vehicles, (2) route calculation for any origin/destination pair, (3) low latency (<200 ms), and (4) scalability to billions of queries per day.

**Approach**  
1. **Data ingestion** – stream vehicle telemetry (speed, GPS, acceleration) into a distributed log (Kafka).  
2. **Real‑time processing** – use Flink/Storm to aggregate traffic density on road segments; update a graph database in near‑real time.  
3. **Routing engine** – pre‑compute base shortest paths (Dijkstra/A*), then adjust edge weights with the latest congestion scores. Cache popular routes in Redis.  
4. **API layer** – stateless gRPC services behind a load balancer, each service reads from the graph store and cache.  
5. **Monitoring & autoscaling** – Prometheus metrics + Kubernetes HPA.

**Depth**  
- Edge weights = base cost × (1 + congestion factor).  
- Graph stored in Neo4j or RocksDB; read‑optimized for adjacency lists.  
- Latency: ingestion → processing <500 ms; routing query <150 ms.  
- Complexity: O(E log V) per update, amortized via incremental algorithms.

**Edge Cases**  
- Sudden road closures → fall back to next‑best route.  
- Data gaps from disconnected vehicles → use historical averages.  
- Load spikes (e.g., during rush hour) → scale cache replicas.

**Optimize & Communicate**  
I’d iterate on the congestion model (use ML to predict short‑term delays), shard the graph by geographic region, and introduce a “hot spot” cache for city centers. I’ll explain trade‑offs: more accurate models cost compute; sharding reduces latency but adds consistency complexity. This structured plan demonstrates clear problem understanding, technical depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
