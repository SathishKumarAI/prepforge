---
qid: ing_8fe083dbaf__faang__local
question: 'Explain: Recommended by LinkedIn — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 566
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:59-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *food‑delivery platform* (think Zomato/Swiggy).  
Key assumptions:  
- Users → mobile/web clients.  
- Restaurants publish menus; orders go through the system.  
- Real‑time ETA, dynamic pricing, and high throughput are critical.  
- We need fault tolerance, low latency for search & ordering, and scalability.

**Approach**  
1. **User layer** – REST/GraphQL APIs + CDN for static assets.  
2. **Search & recommendation** – ElasticSearch / Solr + a separate ML model (collaborative filtering) that updates nightly.  
3. **Order orchestration** – Event‑driven architecture: order created → Kafka topic → microservices (payment, inventory, delivery).  
4. **Delivery routing** – Graph‑based shortest‑path engine; real‑time traffic via a streaming layer (Kafka + Flink).  
5. **Data store** – NoSQL (Cassandra/ DynamoDB) for user & order logs, RDBMS for relational data, Redis cache for hot keys.

**Depth**  
- *Order flow*: client POST /orders → API gateway → Order Service → Kafka “new_order” → Payment Service → Inventory Service → Dispatch Service → Delivery Agent Service. Each microservice is stateless; state lives in DB or distributed cache.  
- *Scalability*: Horizontal scaling of services; auto‑scaling groups on Kubernetes.  
- *Latency*: Use async communication for heavy tasks, keep read path < 200 ms by caching menu & ETA.  
- *Consistency*: Eventual consistency for order status; use Saga pattern to roll back if payment fails.

**Edge Cases**  
- **High surge**: Throttle requests, queue orders, notify users of delays.  
- **Payment failure**: Rollback inventory and mark order as “failed”.  
- **Delivery agent offline**: Reassign via nearest‑available algorithm.  
- **Data loss in Kafka**: Enable replication & exactly‑once semantics.

**Optimize & Communicate**  
Explain trade‑offs:  
- *Latency vs consistency*: We accept eventual consistency for inventory to keep throughput high.  
- *Monolith vs microservices*: Microservices give independent scaling but add complexity; we justify with feature growth.  
- Summarize key metrics (TPS, order latency, failure rate) and how monitoring (Prometheus + Grafana) drives improvements.  

This structure shows clear problem framing, a solid design path, technical depth, awareness of edge cases, and thoughtful optimizations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
