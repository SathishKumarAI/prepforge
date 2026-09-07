---
qid: ing_da805ba588__faang__local
question: 'Explain: we have a i don''t know web — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 624
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:41-05:00'
sources: []
---

**Clarify**

You want a highly‑scalable, fault‑tolerant *Parking Garage* system that can handle millions of cars per day, support multiple entry/exit gates, real‑time spot availability, and integration with payment & loyalty services.  
Assumptions to confirm:  

- Capacity (number of levels/slots).  
- Geographic distribution (single vs multi‑site).  
- Pricing model (flat, hourly, subscription).  
- Required SLAs for latency (< 200 ms for spot lookup).  
- Data consistency needs (eventual vs strong).  

**Approach**

1. **API layer** – REST/GraphQL gateway with rate limiting and auth.  
2. **Service decomposition** – `GateService`, `SpotService`, `PaymentService`, `AnalyticsService`.  
3. **Data store** – NoSQL (Cassandra) for spot metadata + Redis cache for hot availability, PostgreSQL for transactions.  
4. **Event bus** – Kafka to propagate state changes (spot taken/returned).  
5. **Load balancing & auto‑scaling** – Kubernetes with HPA on CPU/queue depth.  
6. **Observability** – Prometheus/Grafana + distributed tracing.

**Depth**

- *Spot allocation*: Each spot has a unique ID, level, and status (`FREE`, `OCCUPIED`). A write‑through cache in Redis keeps the last known state; writes go to Cassandra first (partitioned by level) then publish an event.  
- *Concurrency*: Use optimistic locking in Cassandra (`compare-and-set`) or a lease key in Redis with TTL to avoid double booking.  
- *Pricing*: On entry, the `GateService` records a start timestamp and assigns a temporary ticket ID. On exit, `PaymentService` calculates fee based on duration and applies any coupons from a separate micro‑service.  
- *Fault tolerance*: Each service runs 3 replicas; Kafka provides replayability if a consumer fails. Data is replicated across AZs.  

**Edge Cases**

- Two cars arrive simultaneously at the same spot → lease mechanism prevents race.  
- Gate hardware failure → system falls back to manual mode, logs event.  
- Cache miss → fallback to Cassandra read (slower but consistent).  
- Payment gateway timeout → retry with exponential back‑off; if still failing, mark parking as “pending payment” and alert ops.

**Optimize & Communicate**

- *Performance*: Batch spot lookups per gate; pre‑warm Redis cache on startup.  
- *Cost*: Use tiered storage—hot spots in Redis, cold history in S3 with Athena queries for analytics.  
- *Future extensions*: Add a mobile app (push notifications for spot availability), integrate with EV charging stations, support dynamic pricing via ML model.  

This design balances low‑latency real‑time operations with durability and scalability, meeting typical FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
