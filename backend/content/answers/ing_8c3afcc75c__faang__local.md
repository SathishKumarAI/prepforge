---
qid: ing_8c3afcc75c__faang__local
question: 'Explain: System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 568
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:22-05:00'
sources: []
---

**Clarify**

We’re asked to sketch a high‑level system design for a food‑delivery platform (e.g., Zomato/Swiggy).  
Assumptions:  
* Millions of users, thousands of restaurants, real‑time order flow.  
* Primary services: user & restaurant onboarding, discovery, ordering, payment, delivery tracking, rating.  
* Goal: low latency, high availability, and scalability.

**Approach**

1. **API Gateway → Service Mesh** (user, restaurant, order, payment, delivery).  
2. **Database layer**: mix of relational (PostgreSQL) for orders & users + NoSQL (Cassandra/Redis) for catalog & caching.  
3. **Search & recommendation**: ElasticSearch + ML model cluster.  
4. **Messaging**: Kafka for order events, pub/sub to decouple services.  
5. **Real‑time delivery tracking**: WebSocket / SSE + mobile push via FCM/APNs.  
6. **Load balancing & autoscaling** (K8s) + CDN for static assets.  
7. **Observability**: Prometheus/ELK, distributed tracing.

**Depth**

*Order flow*: User places order → gateway authenticates → Order Service validates inventory, calculates ETA via routing service, publishes “order‑created” to Kafka. Delivery agents consume, pick nearest agent via geospatial DB (PostGIS). Agent updates status; Order Service updates state and pushes notifications. Payment Service processes asynchronously after delivery confirmation.  
*Data model*: Orders are immutable event streams; current state materialized in a read‑model for quick queries.  
*Complexity*: API latency < 200 ms, throughput 10k orders/s; Kafka handles spikes with partitioning.  

**Edge Cases**

* Network partitions → eventual consistency on order status.  
* Agent failure → reassign via Kafka consumer group.  
* Payment rollback → idempotent APIs.  
* Restaurant offline → queue or fail‑fast.

**Optimize & Communicate**

- **Caching**: Popular menu items in Redis to reduce DB hits.  
- **Batching**: Deliver updates in micro‑batches to agents to cut network overhead.  
- **Geo‑sharding**: Partition data by region for locality and latency.  
Explain trade‑offs (e.g., eventual consistency vs. strong consistency) and justify choices with scalability metrics. This structure shows clear problem framing, a modular approach, deep technical reasoning, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
