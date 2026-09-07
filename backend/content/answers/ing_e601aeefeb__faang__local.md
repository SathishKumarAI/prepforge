---
qid: ing_e601aeefeb__faang__local
question: 'Explain: And then use that historical data to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 523
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:07-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Google‑Maps–style* system that ingests historical location logs (timestamped GPS points) and then serves real‑time routing/traffic queries. Key assumptions:  

1. Data volume ≈ 10⁹ daily points, stored in a time‑series format.  
2. Queries include shortest path, live traffic, and predictive ETA.  
3. Latency < 200 ms for 95% of requests; availability > 99.9%.  

**Approach**  
1. **Data Ingestion** – Kafka + Flink to stream raw GPS into HDFS/Parquet partitions by day.  
2. **Graph Construction** – Convert road network to a weighted graph (nodes = intersections, edges = road segments). Persist in a distributed graph store (Neo4j or JanusGraph) with pre‑computed edge weights.  
3. **Traffic Modeling** – Aggregate speeds per segment over sliding windows; update edge weights in an in‑memory cache (Redis Cluster).  
4. **Routing Engine** – Use Dijkstra/A* on the cached graph for static routes, and Contraction Hierarchies or HNSW for fast queries.  
5. **Prediction Layer** – LightGBM/ XGBoost models trained offline on historical traffic patterns; served via TensorFlow Serving.  

**Depth**  
- Storage: Parquet + Delta Lake for ACID and incremental updates.  
- Compute: Spark jobs run nightly to refresh edge weights.  
- Latency: Edge‑weight cache hit in < 5 ms; routing algorithm ~ 10–15 ms on 8 cores.  
- Complexity: O(|E| log |V|) per query, but amortized over cached weights.  

**Edge Cases**  
- Sudden road closures → fallback to static graph + manual override.  
- Data gaps (missing GPS) → impute with map‑matching and smoothing.  
- Spike in traffic queries during events → auto‑scale routing service via Kubernetes HPA.  

**Optimize & Communicate**  
Future work: incorporate real‑time sensor feeds, use vector‑quantized embeddings for road segments to speed up nearest‑neighbor lookups, and add multi‑modal routing (bike, transit). I’d present the architecture diagram, trade‑offs between consistency vs. latency, and a deployment pipeline that guarantees zero‑downtime updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
