---
qid: ing_591bc90b28__faang__local
question: 'Explain: a separate table exactly you have a — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 530
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:01-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a system that powers DoorDash’s location‑based services (driver & customer positioning, nearby restaurant discovery). Key constraints: low latency (< 100 ms), high throughput (~10⁶ events/s), and eventual consistency across regions.

**Approach**  
1. **Geo‑hashing** – encode latitude/longitude into a hierarchical string (e.g., H3 or GeoHash) to bucket locations.  
2. **Storage layer** – use a distributed key‑value store (Cassandra / DynamoDB) indexed by geo‑hash + timestamp.  
3. **Publish/Subscribe** – employ WebSockets for real‑time updates; fallback to long polling for mobile clients.  
4. **Routing** – a lightweight API gateway routes requests to the nearest regional cluster, using consistent hashing on the geo‑hash key.  
5. **Caching** – Redis/Memcached per region caches hot geohash buckets (e.g., top 100 restaurants).  
6. **Background jobs** – periodically recompute “nearest” lists and propagate via a message queue (Kafka).

**Depth**  
- **Geo‑hash granularity**: 12‑bit (≈ 1 km²) for coarse queries, 18‑bit (~10 m) for driver updates.  
- **Write path**: client → WebSocket → regional gateway → Cassandra (append‑only). Latency ≈ 20–30 ms.  
- **Read path**: API call → Redis cache hit (≈ 5 ms); miss triggers Cassandra scan + nearest‑neighbor search (≤ 100 ms).  
- **Consistency**: use eventual consistency; for critical updates, employ read‑repair and lightweight transactions.  

**Edge Cases**  
- **High churn**: drivers frequently enter/leave geohashes → rate‑limit updates, batch writes.  
- **Network partitions**: fallback to local cache, mark stale data.  
- **Sparse regions**: fallback to global index or increase geohash precision.  

**Optimize & Communicate**  
- Profile hot paths; shard Cassandra by region to avoid hotspots.  
- Use vector clocks for conflict resolution.  
- Explain trade‑offs: higher geohash precision → more keys but finer routing; caching reduces read latency but adds staleness risk.  

This design balances low latency, high scalability, and developer friendliness—key qualities a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
