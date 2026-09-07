---
qid: ing_d70e831cf3__faang__local
question: 'Explain: that and um to be able to — Amazon System Design Interview: Design
  Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 552
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:59:25-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *parking‑garage* system for Amazon (e.g., an automated multi‑level lot).  
Assumptions to confirm:  

1. Scale – thousands of cars per day, multiple levels.  
2. Use cases – reservations, walk‑in, express entry, valet, security, billing.  
3. Constraints – real‑time availability, safety, low latency, high uptime.  

**Approach**  
1. **Front‑end**: Mobile/web UI + API gateway.  
2. **Core services**:  
   * Reservation Service* (calendar & capacity).  
   * Parking Spot Service* (state machine for spot status).  
   * Ingress/egress Gate Service* (ticketing, gate control).  
3. **Data layer**: DynamoDB per level + Redis cache for hot availability data.  
4. **Message bus** (Kafka) for event‑driven updates (spot freed, vehicle entered).  
5. **Monitoring & Alerting** – CloudWatch + Prometheus.  

**Depth**  
- *Reservation*: store slot id, time window; conflict resolution via optimistic locking.  
- *Spot Allocation*: greedy nearest‑available algorithm; fallback to machine‑learning model that predicts future demand per level (uses historical hourly occupancy).  
- *Ingress*: camera + OCR for license plate → ticket ID; gate opens once spot assigned.  
- *Billing*: compute cost from entry/exit timestamps, apply discounts.  

Complexity: Reservation lookup O(log n) in DynamoDB; spot allocation O(1) with cache. ML inference is batched nightly (offline) to update a lightweight model served via SageMaker endpoint during peak hours.  

**Edge Cases**  
- Over‑booking → queueing system.  
- Power loss at gates → manual override & fail‑safe lock state.  
- Lost tickets → fallback to license‑plate recognition.  

**Optimize & Communicate**  
We can reduce latency by moving spot status to an in‑memory data grid (Hazelcast) and pre‑compute optimal paths for drivers using Dijkstra’s algorithm on the garage graph.  
Explain trade‑offs: caching improves speed but risks stale data; we mitigate with TTL + event invalidation.  
In a real interview, I’d sketch the diagram, walk through a reservation flow, then discuss scaling, reliability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
