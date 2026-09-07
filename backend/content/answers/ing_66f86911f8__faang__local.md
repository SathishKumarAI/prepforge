---
qid: ing_66f86911f8__faang__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 441
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:50-05:00'
sources: []
---

**Clarify**  
We need an online parking‑garage system that manages vehicle entry/exit, spot allocation, and payments at scale (hundreds of thousands cars/day). Assumptions: multiple levels, varied spot sizes, real‑time availability, mobile app integration, and high fault tolerance.

**Approach**  
1. **Architecture diagram** – API gateway → microservices (Auth, Spot‑Mgr, Billing) → Redis cache + PostgreSQL for persistence.  
2. **Spot allocation** – use a distributed priority queue per level; each spot is a token in Redis with TTL.  
3. **Event sourcing** – every entry/exit emits an event to Kafka; consumer updates DB and triggers billing.  
4. **Scalability** – stateless services behind load balancers, auto‑scaling groups.  
5. **Monitoring** – Prometheus/Grafana dashboards for occupancy & latency.

**Depth**  
- *Entry flow*: App → API (auth) → Spot‑Mgr requests free spot from Redis; if available, lock token and return QR code.  
- *Exit flow*: Scan QR → API verifies token → Billing service calculates fee (duration × rate), updates DB, releases spot back to Redis.  
- Complexity: O(log n) for priority queue ops; caching reduces DB hits by >90%. Fault tolerance via Kafka replay and read‑replicas.

**Edge Cases**  
- Spot lock loss on power failure → use Redis with persistence (RDB/AOF).  
- Overbooking when multiple gateways hit same spot – use distributed locks.  
- Payment failures – rollback token release, show pending status.

**Optimize & Communicate**  
Explain trade‑offs: using Redis for speed vs eventual consistency; Kafka for audit trail vs added latency. Highlight that the design supports real‑time dashboards and can be extended to dynamic pricing or electric‑vehicle charging integration. This structured walk‑through demonstrates clear problem framing, systematic planning, technical depth, and foresight—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
