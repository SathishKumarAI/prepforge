---
qid: ing_c5900a1c2b__faang__local
question: 'Explain: Now let''s say if you want to — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 546
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:29-05:00'
sources: []
---

**Clarify**  
You’re asking how a large‑scale mapping service (like Google Maps) is architected—its data ingestion, storage, routing, real‑time updates and user‑centric APIs. Confirm assumptions:  
- Do we focus on the core map rendering + navigation or also traffic/POI?  
- Are latency & scale requirements explicit?  
- Is this a single‑region design or global with multi‑zone replication?

**Approach**  
1. **Data ingestion** → satellites, LiDAR, user uploads → batch pipelines (Kafka → Spark).  
2. **Storage** → tiered: immutable vector tiles in object store (S3/GCS), relational DB for routing graph, NoSQL for POI.  
3. **Routing engine** → pre‑computed shortest‑path trees + on‑the‑fly Dijkstra/Contraction Hierarchies; hot cache per region.  
4. **Real‑time layer** → streaming traffic (Kafka) → in‑memory store (Redis or Memcached) for live edge weights.  
5. **API gateway** → GraphQL/REST with rate limiting, request routing to regional edge nodes.  
6. **CDN** → serve static tiles; edge compute for personalization.

**Depth**  
- **Tiles**: 256×256 pixel vector tiles at multiple zoom levels (pbf). Pre‑rendered in Mapbox style.  
- **Routing graph**: Weighted directed graph, edges store base cost + dynamic traffic multiplier. Use Contraction Hierarchies to answer queries < 50 ms.  
- **Traffic pipeline**: Sensors → Kafka → Flink → update edge weights; Bloom filters for fast lookup.  
- **Consistency**: Eventual consistency for POI updates; strong consistency for routing via two‑phase commit across data centers.

**Edge Cases**  
- Network partition → fallback to last known good tile set.  
- Sudden traffic spike → cache warm‑up, autoscale streaming workers.  
- New road addition → re‑index only affected subgraph (incremental graph update).  

**Optimize & Communicate**  
Explain trade‑offs: heavier precomputation vs. lower latency; larger tile caches reduce storage but increase bandwidth. Mention monitoring (latency SLA 95th % < 200 ms), A/B testing for routing algorithms, and cost control via spot instances for batch jobs. Conclude by highlighting the end‑to‑end flow from data ingestion to user request with clear service boundaries, ensuring interviewers see a full, scalable picture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
