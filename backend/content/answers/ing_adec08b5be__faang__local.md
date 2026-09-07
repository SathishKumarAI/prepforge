---
qid: ing_adec08b5be__faang__local
question: 'Explain: Business Service — Proximity Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 516
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:59-05:00'
sources: []
---

**Clarify**  
You’re asking for a *Business‑Service* that exposes *Proximity* data—i.e., “Given a user’s device, return nearby points of interest (POIs) and their metadata.”  Confirm:  
- Do we need real‑time location?  
- What granularity (meters vs. km)?  
- How many POIs per request?  
- Is this read‑only or does it support writes/updates?

**Approach**  
1. **Data model & storage** – Use a spatial index (R‑tree / GeoHash) in a NoSQL store (Cassandra/BigTable).  
2. **Service layer** – RESTful API with `/nearby?lat=&lon=&radius=`.  
3. **Geospatial query engine** – Convert the radius into bounding box, fetch candidates via index, then filter by haversine distance.  
4. **Caching & CDNs** – Edge caches (e.g., CloudFront) for hot regions; in‑memory LRU cache per shard.  
5. **Scalability** – Horizontal sharding by geohash prefix; auto‑scaling compute with Kubernetes.

**Depth**  
- *Index*: GeoHash 12 (~100 m resolution) gives sub‑millisecond lookups.  
- *Complexity*: Query is O(log N + k), where `k` is returned POIs.  
- *Latency*: <50 ms average on edge; write latency ~200 ms (async).  
- *Fault tolerance*: Multi‑region replicas, quorum reads for consistency.

**Edge Cases**  
- **Border crossing**: A radius may span shards—ensure cross‑shard joins.  
- **High density zones** (downtown): Apply pagination or “max 1000 results” guard.  
- **Precision loss** at poles: Use EPSG:4326 → WebMercator conversion.

**Optimize & Communicate**  
Improvements:  
- *Adaptive caching* based on hotspot popularity.  
- *Batching writes* to reduce write amplification.  
Explain trade‑offs: tighter radius → fewer index lookups but higher CPU for distance calc; larger radius → more candidates, so pagination or approximate filtering (e.g., MinHash).  

This structured plan shows clear problem framing, a scalable technical stack, complexity analysis, and real‑world edge considerations—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
