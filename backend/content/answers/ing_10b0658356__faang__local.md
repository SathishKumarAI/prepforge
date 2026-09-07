---
qid: ing_10b0658356__faang__local
question: 'Explain: Design Uber — Grokking System Design Interview: Patterns & Mock
  Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:21-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a high‑level system design for “Uber” (the ride‑hailing platform). I’ll assume we need: a mobile client, backend services, real‑time matching of riders to drivers, fare calculation, geo‑spatial routing, and a scalable architecture that can handle millions of concurrent users worldwide.

**Approach**  
1. **Client → API Gateway → Services** (Auth, Ride, Driver, Pricing).  
2. **Ride Service**: receives request → validates, pushes to *Matchmaking Queue* (Kafka).  
3. **Matchmaker**: consumes queue, queries *Driver Registry* (Redis) for nearby available drivers, scores them (distance, rating), sends a notification.  
4. **Driver App**: accepts → updates status in Driver Registry; receives trip details via WebSocket.  
5. **Trip Service**: tracks location (via GPS streams to Kafka → Event Store), calculates fare (dynamic pricing engine), persists trip record in PostgreSQL + Elasticsearch for search.  
6. **Observability & Billing**: metrics to Prometheus, logs to ELK, billing triggers after trip completion.

**Depth**  
- *Geo‑spatial indexing* with R‑tree or geohash in Redis.  
- *Scalability*: stateless microservices behind Kubernetes autoscaling; Kafka partitions for high throughput.  
- *Latency*: keep matchmaking under 2 s by pre‑computing driver proximity and caching.  
- *Fault tolerance*: idempotent message handling, retry policies, circuit breakers.

**Edge Cases**  
- Driver drops out mid‑match → re‑enqueue rider.  
- Network partitions → eventual consistency in driver status.  
- Surge pricing spikes → rate limiter to avoid denial of service.  

**Optimize & Communicate**  
I’d iterate on the matchmaking algorithm (e.g., use a *k‑nearest neighbors* search) and add a *driver incentive model*. I’d explain trade‑offs: tighter latency vs. higher memory usage for in‑memory geospatial store, or using Cassandra for write‑heavy trip logs versus PostgreSQL for ACID guarantees. This demonstrates structured thinking, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
