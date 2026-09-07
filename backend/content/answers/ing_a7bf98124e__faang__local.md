---
qid: ing_a7bf98124e__faang__local
question: 'Explain: location that is the latest location of — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 450
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:14:34-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is the ‘latest location’ of a driver in Uber’s system?”*  
Assumptions to confirm:  
1. We’re talking about real‑time position for dispatch.  
2. The solution must scale to millions of drivers and be highly available.  

**Approach**  
- Store each driver’s latitude/longitude, timestamp, status in a geo‑spatial index (e.g., Redis‑GEO or Spanner with geohash).  
- Push updates from the mobile SDK via a message queue (Kafka/RabbitMQ) to decouple producers and consumers.  
- Use a “last write wins” policy with clock skew handling.  
- Expose a REST/GRPC endpoint for clients to fetch a driver’s current position.  

**Depth**  
1. **Data model:** `driver_id | lat | lon | ts | status`.  
2. **Indexing:** Geohash buckets allow O(1) lookup of nearby drivers; we maintain a TTL on stale data (e.g., 30 s).  
3. **Consistency:** Eventual consistency is acceptable; for safety, use vector clocks or Lamport timestamps to resolve conflicts.  
4. **Scalability:** Partition by driver region; use read replicas for high‑rate queries.  
5. **Complexity:** Write O(log N) per update (hash table insert); read O(1) for exact match.  

**Edge Cases**  
- Driver disconnects: mark as inactive after timeout.  
- Clock drift between device and server: use NTP or client‑side monotonic counters.  
- Offline updates: batch queue replay on reconnection.  

**Optimize & Communicate**  
We can further reduce latency by pushing updates to a CDN edge cache near the rider’s region, and compressing geohash data. In discussion, I’d emphasize trade‑offs between consistency vs. speed and explain why eventual consistency is acceptable for ride dispatch while still guaranteeing no stale driver positions are shown.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
