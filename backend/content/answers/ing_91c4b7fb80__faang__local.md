---
qid: ing_91c4b7fb80__faang__local
question: 'Explain: with one server that is probably this — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 470
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:23:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a high‑level design of Uber’s core server stack (matching, dispatch, routing, and scaling). I’ll assume: *real‑time trip matching*, *geo‑spatial queries*, *high availability*, *low latency* (< 200 ms), and *global deployment*.  

**Approach**  
1. **Service decomposition** – microservices: `TripMatcher`, `DriverLocator`, `PricingEngine`, `Notification`.  
2. **Data layer** – distributed key‑value store (Cassandra/Redis) for driver state, Postgres for immutable logs, and a geo‑indexing engine (GeoMesa / ElasticSearch).  
3. **Routing & dispatch** – publish‑subscribe queue (Kafka) to push driver locations; use consistent hashing + local caches for nearest‑driver lookups.  
4. **Scalability** – autoscale per region, multi‑AZ deployment, circuit breakers.  

**Depth**  
- *TripMatcher* subscribes to driver events, keeps a local in‑memory k‑d tree of nearby drivers (lat/long). On rider request it queries this tree, filters by vehicle type, calculates ETA via an external routing API (OSRM), and assigns the best match.  
- Updates are written to Cassandra for durability; Kafka ensures eventual consistency across shards.  
- Pricing uses a stateless function that pulls surge data from Redis.  

**Edge Cases**  
- Driver churn: handle out‑of‑order events with sequence numbers.  
- Latency spikes: fallback to nearest cached driver if routing API fails.  
- Data partitioning: ensure geo‑shards don’t split cities arbitrarily.  

**Optimize & Communicate**  
Explain trade‑offs: in‑memory k‑d tree gives O(log n) lookup vs. disk‑based R‑tree; Cassandra offers tunable consistency but higher write latency. Discuss monitoring (Prometheus + Grafana), automated rollback, and blue/green deployments to keep 99.9% uptime. Conclude with how this architecture meets the constraints of global scale, low latency, and high reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
