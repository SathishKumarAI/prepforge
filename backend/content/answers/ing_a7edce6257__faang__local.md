---
qid: ing_a7edce6257__faang__local
question: 'Explain: DoorDash System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 442
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:15-05:00'
sources: []
---

**Clarify**  
We’re asked to design a scalable system that lets users (drivers) pick up and deliver orders from restaurants to customers—essentially the core of DoorDash’s delivery platform. Key assumptions:  

* High volume of simultaneous orders (tens of thousands per minute).  
* Real‑time ETA, routing, driver–customer matching.  
* Reliability & fault tolerance; data consistency for payments and ratings.

**Approach**  
1. **API layer** – REST/GraphQL gateways with rate limiting.  
2. **Order service** – immutable order objects stored in a partitioned NoSQL DB (e.g., Cassandra).  
3. **Matching engine** – publish‑subscribe queue (Kafka) that feeds a worker pool; workers compute proximity + driver availability, push matches to Redis sorted sets.  
4. **Routing & ETA** – microservice calling an external map API; cache routes in Memcached.  
5. **Payment & Reconciliation** – event‑driven saga pattern; use transactional outbox for consistency.  
6. **Monitoring/Observability** – Prometheus + Grafana, distributed tracing (OpenTelemetry).

**Depth**  
* **Latency**: Matching workers run <100 ms per order; ETA service caches 1‑minute window.  
* **Throughput**: Kafka topics partitioned by region; consumer groups scale horizontally.  
* **Consistency**: Use eventual consistency for driver status; strong consistency for order state via ACID transactions in the outbox pattern.

**Edge Cases**  
* Driver disconnects mid‑trip → re‑route to next available driver.  
* Network partitions between microservices → fallback to local cache, retry logic.  
* Surge pricing conflicts → atomic price update with optimistic locking.

**Optimize & Communicate**  
Explain trade‑offs: NoSQL gives speed but weak consistency; we mitigate with outbox saga for payments. Highlight that each component is independently scalable and observable, enabling quick isolation of issues—key to a high‑availability delivery platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
