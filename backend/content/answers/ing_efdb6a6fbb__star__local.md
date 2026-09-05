---
qid: ing_efdb6a6fbb__star__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 346
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:38-05:00'
sources: []
---

**Situation**  
While leading the backend team at a start‑up that was pivoting to a food‑delivery platform, we had to re‑architect our API layer after a sudden spike in traffic during a city‑wide festival. Our average request latency was 350 ms and the service crashed when concurrent orders hit 12k per minute.

**Task**  
I needed to design a highly available, low‑latency system that could handle peak loads, guarantee eventual consistency for order status, and support real‑time delivery tracking without overloading the database.

**Action**  
I introduced a microservices split: an **Order Service** (CQRS + event sourcing with Kafka) for write‑heavy flows, a lightweight **Inventory Service** using Redis Streams for cache‑coherent stock checks, and a **Geofence Service** powered by PostGIS. For scaling, we deployed Kubernetes with autoscaling based on CPU and request latency metrics; we also added a CDN layer (CloudFront) to serve static assets. To ensure reliability, each service ran in a 3‑AZ deployment, used circuit breakers (Hystrix), and logged events to ElasticSearch for observability.

**Result**  
Post‑deployment, average latency dropped to 90 ms, the system sustained 25k concurrent orders without failure, and our delivery SLA improved from 88% to 98%. I learned that non‑functional design—especially thoughtful service boundaries, caching strategies, and autoscaling policies—directly translates into user trust and business growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
