---
qid: ing_6e0f4151ef__faang__local
question: 'Explain: Real-world Systems — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 463
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:34-05:00'
sources: []
---

**Clarify**

We’re asked to explain how a food‑ordering platform (e.g., Zomato or Swiggy) works in production.  
Assumptions:  
1. The system serves millions of users and restaurants worldwide.  
2. Latency < 200 ms for UI interactions, high availability, and fault tolerance are critical.

**Approach**

1. **User → API Gateway → Service Layer** (authentication, routing).  
2. **Catalog Service** (restaurant & menu data) backed by a read‑optimized DB + cache.  
3. **Search/Recommendation Engine** using embeddings or collaborative filtering to rank items.  
4. **Order Service** handles cart, payment, and order state transitions.  
5. **Delivery Logistics** (dispatch, ETA prediction) powered by graph routing + ML for traffic.  
6. **Real‑time Analytics** feed into a data lake & batch pipelines for personalization.

**Depth**

- *Catalog*: Use PostgreSQL/PostGIS for geospatial queries; Redis cache for hot restaurants.  
- *Search*: Vector similarity search (FAISS/Annoy) to surface relevant dishes, with A/B‑tested ranking models.  
- *Order Flow*: Event‑driven microservices (Kafka). Each state change emits an event consumed by downstream services (payment, notifications).  
- *Delivery*: Graph database for road network; ML model predicts ETA using historical traffic + weather.  
- *Scalability*: Auto‑scaling groups per region, multi‑AZ deployments, and circuit breakers to isolate failures.

**Edge Cases**

- Network partitions → graceful degradation of recommendation.  
- Sudden surge (e.g., festival) → capacity auto‑scale triggers; fallback to static ranking.  
- Payment failures → idempotent order placement, rollback mechanisms.  

**Optimize & Communicate**

Highlight trade‑offs: cache hit ratios vs. staleness, real‑time vs. batch ML for recommendations. Emphasize observability (distributed tracing) and continuous integration of new models via A/B testing. Conclude with how this architecture balances latency, throughput, and reliability—core FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
