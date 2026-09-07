---
qid: ing_111e2bc103__faang__local
question: 'Explain: Design decisions and Technology choices — System Design of food
  delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 489
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:38-05:00'
sources: []
---

**Clarify**  
We’re building a real‑time food‑delivery platform that must match users, restaurants, and couriers at scale while keeping latency low and handling high traffic spikes. Key assumptions: ~10M active users, 1 M orders/day, 100k couriers, 20k restaurants, 99.9% uptime, sub‑second response for search/ordering.

**Approach**  
1. **Service decomposition** – microservices (User, Restaurant, Order, Delivery, Payment, Search).  
2. **Data stores** – relational DB (PostgreSQL) for transactional data; NoSQL (Cassandra/Redis) for hot lookup (restaurant menus, user prefs); Geo‑spatial index (Elasticsearch/PostGIS).  
3. **Real‑time matching** – publish/subscribe via Kafka; courier location stream → match engine that assigns nearest available driver using a priority queue.  
4. **Scalability** – autoscaling on Kubernetes, request routing with Envoy + rate limiting.  
5. **Observability** – Prometheus/Grafana for metrics, distributed tracing (Jaeger), log aggregation (ELK).  

**Depth**  
- *Order flow*: API → Order service validates inventory via Restaurant microservice; writes to Kafka → Delivery engine assigns courier; updates reflected in PostgreSQL and Redis cache.  
- Latency: <200 ms for search by cuisine/price; order placement <500 ms.  
- Consistency: eventual consistency on menu updates, strong consistency on payments (two‑phase commit across Payment & Order).  

**Edge Cases**  
- Courier drop‑outs → fallback to next nearest driver; timeouts in Kafka consumers.  
- Surge pricing when demand > supply → dynamic multiplier calculation.  
- Data replication lag → read replicas for analytics only.  

**Optimize & Communicate**  
- Cache popular menus (TTL 5 min) to reduce DB load.  
- Use CDN for static assets, edge‑function for geofencing.  
- Explain trade‑offs: eventual vs strong consistency, Kafka throughput vs latency.  
- Present this architecture in a whiteboard style, walking through a user’s journey from search → order → delivery, highlighting fault isolation and observability at each hop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
