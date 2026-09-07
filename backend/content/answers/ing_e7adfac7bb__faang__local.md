---
qid: ing_e7adfac7bb__faang__local
question: 'Explain: Airbnb System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 597
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:46-05:00'
sources: []
---

**Clarify**

> *“Explain the Airbnb system design – recent FAANG interview questions.”*  
I’ll assume we’re asked to sketch a high‑level architecture for a global booking platform that must support: user auth, listings, search & recommendation, reservations, payments, and notifications. I’d confirm constraints (latency ≤ 200 ms, 10⁶ users, 10⁴ requests/sec) and whether the focus is on scalability or fault tolerance.

**Approach**

1. **Front‑end** – load‑balanced HTTP/HTTPS with CDN caching for static assets.  
2. **API Gateway** – request routing, rate limiting, auth via OAuth/JWT.  
3. **Microservices** – separate services: Auth, Listings, Search, Booking, Payment, Notification. Each owns its own database (polyglot persistence).  
4. **Data stores** – PostgreSQL for relational data, Elasticsearch for search, Redis for session/cache, Kafka for event streaming.  
5. **Distributed transaction** – Saga pattern or two‑phase commit for booking consistency.  
6. **Observability** – Prometheus + Grafana, distributed tracing (Jaeger).  
7. **Scalability** – auto‑scaling groups, horizontal partitioning of data, read replicas.

**Depth**

- *Search* uses Elasticsearch with geo‑spatial indices and ML‑ranked relevance.  
- *Recommendation* runs offline batch jobs on Spark to update user/item embeddings; online inference via a lightweight model served by TensorFlow Serving.  
- *Payment* is handled by an external gateway (Stripe) with idempotent POSTs; we store only tokens, never raw card data.  
- *Booking* service writes to PostgreSQL and publishes “booking‑created” events to Kafka for downstream services (availability, analytics).  
- Complexity: read ops O(log n), write ops O(1) amortized due to caching.  
- Trade‑offs: eventual consistency vs. strong ACID; we choose eventual consistency for search but use Sagas for booking.

**Edge Cases**

- Concurrent booking of the same slot → conflict resolution via optimistic locking or a distributed lock (Redlock).  
- Payment failures → retry with exponential backoff, fallback to manual review.  
- Data center outage → multi‑region replication; failover routing at DNS level.  
- High traffic surge → burst buffer in Kafka + autoscaling.

**Optimize & Communicate**

To improve latency, cache frequently searched listings in Redis and precompute recommendation vectors during off‑peak hours. I’d explain that this reduces load on Elasticsearch and the recommendation microservice, trading a small staleness window for performance. Finally, I’d emphasize monitoring key metrics (latency percentile, error rate) and iterating based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
