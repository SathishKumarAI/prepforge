---
qid: ing_5a50e16e5a__faang__local
question: 'Explain: these types of problems end up actually — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:36-05:00'
sources: []
---

**Clarify**

> *Design a parking‑garage system for Amazon.*  
> I’ll assume we need to support high‑volume, real‑time reservations, dynamic pricing, and integration with Alexa/Prime delivery fleets.

**Approach**

1. **Requirements & Constraints** – capacity, peak hours, user flow, payment, security, API contracts.  
2. **High‑level architecture** – microservices (Reservation, Availability, Pricing, Payment, Analytics), message bus, cache layer, database.  
3. **Data model & state management** – spot status, reservation tokens, pricing rules.  
4. **Scalability & fault tolerance** – sharding by region, redundant services, circuit breakers.

**Depth**

- *Reservation Service*: REST/GRPC endpoint; uses a distributed lock (e.g., Redlock) to claim a spot atomically. Complexity: O(log n) per lookup in an AVL‑tree index of free spots.  
- *Pricing Service*: Rules engine with weighted factors (time, demand, fleet priority). Uses a Bloom filter for quick “spot available?” checks.  
- *Analytics*: Kafka streams → time‑series DB; real‑time dashboards for occupancy heatmaps.  

Trade‑offs: Using Redis for lock gives low latency but risk of split‑brain; fallback to database transaction if lock fails.

**Edge Cases**

- Simultaneous reservations for the last spot → test with high contention loads.  
- Spot becomes unavailable after reservation (e.g., maintenance) – need cancellation flow.  
- Integration failures (payment gateway, Alexa) – implement retry & compensation logic.

**Optimize & Communicate**

- Cache free‑spot lists per zone to reduce DB hits; evict on reservation.  
- Use CDN for static assets; serverless functions for lightweight queries.  
- Explain the rationale: “We chose a lock‑based approach because reservations must be atomic, and Redis gives us sub‑millisecond latency.”  

This structured plan shows clear assumptions, a concrete architecture, complexity analysis, edge‑case handling, and an optimization narrative—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
