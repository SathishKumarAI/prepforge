---
qid: ing_fa1c852c61__faang__local
question: 'Explain: we might need the data in real — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 430
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:21:05-05:00'
sources: []
---

**Clarify**  
The interviewer is asking why a ride‑hailing platform (Uber/Ola) would need *real‑time* data and how that requirement shapes the system design. Key assumptions: we must serve millions of concurrent users, deliver instant ETA/price, and maintain high availability.

**Approach**  
1. Identify core real‑time needs: driver location, rider request, dynamic pricing, surge detection.  
2. Map those to architectural layers: ingest → processing → storage → serving.  
3. Choose technologies that guarantee low latency, scalability, and fault tolerance (Kafka, Redis, Cassandra).  

**Depth**  
- **Data ingestion:** Mobile SDK streams GPS every ~5 s via WebSocket to a load‑balanced API gateway.  
- **Processing pipeline:** A stream processor (Apache Flink/Storm) enriches events with map tiles, calculates ETA using a graph database (Neo4j) and publishes results back to the user.  
- **Storage:** Hot data lives in an in‑memory store (Redis) for <50 ms access; cold data (trip history) goes to Cassandra for fast writes.  
- **Serving:** A stateless microservice reads from Redis, applies surge pricing rules, and returns a price estimate.  
Complexity: *O(log N)* for nearest driver lookup in a geohash index; overall latency <200 ms.

**Edge Cases**  
- Network partition → fallback to last known location.  
- Driver churn → rapid eviction of stale entries.  
- Surge spikes → auto‑scale stream workers horizontally.

**Optimize & Communicate**  
We can reduce read latency by pre‑computing ETA for popular routes and caching them in a CDN edge cache. For communication, explain the trade‑off: higher write throughput vs. eventual consistency in Cassandra, versus strict consistency but higher cost in relational DBs. Conclude with how this architecture supports 99.9% SLA for ride requests while keeping operational costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
