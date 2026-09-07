---
qid: ing_b6eced32ae__faang__local
question: 'Explain: the bread and butter of the problem — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 478
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:48:26-05:00'
sources: []
---

**Clarify**  
*Problem:* Build a real‑time location service for DoorDash that maps drivers, customers, and restaurants onto a shared coordinate system and pushes updates instantly.  
*Assumptions to confirm:*  
1. Latency < 200 ms for position sync.  
2. Scale: 10M concurrent users, 100K active couriers.  
3. Data durability only for the last few minutes (caching preferred).  

**Approach**  
1. **Geo‑hashing** – convert lat/long to a hierarchical string (e.g., geohash) that preserves locality and allows fast range queries.  
2. **Partitioning & sharding** – each hash prefix maps to a Redis shard; couriers update their hash as they move.  
3. **WebSockets / MQTT** – keep persistent connections per device; broker routes messages based on the courier’s current geohash bucket.  

**Depth**  
*Geo‑hashing:* 6‑char precision ≈ 0.61 km²; trade‑off between granularity and key count.  
*Redis:* `SET key value` for position, `HGETALL` for nearby entities; TTL = 5 min to purge stale data.  
*WebSocket flow:* Courier → server → “neighborhood” channel → nearby restaurants & customers receive push. Complexity: O(1) per update; broadcast cost ≈ (#clients in bucket).  

**Edge Cases**  
- Rapid movement across multiple buckets → batch updates or “ghost” entries until confirmation.  
- Network partitions → fallback to polling every 30 s.  
- High churn of couriers (e.g., at lunch rush) → monitor shard hot‑spots, auto‑shard.  

**Optimize & Communicate**  
*Improvements:* Use a geospatial index in PostgreSQL for historical analytics; switch to gRPC for lower overhead if WebSocket scales poorly.  
*Narrative:* “We’ll first hash coordinates into 6‑char buckets, store them in Redis shards keyed by bucket, and push changes over websockets so each device only receives events relevant to its current area.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
