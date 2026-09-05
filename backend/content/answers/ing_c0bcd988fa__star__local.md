---
qid: ing_c0bcd988fa__star__local
question: Why This Architecture? — Airbnb System Design - by Neo Kim and Hayk
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:42-05:00'
sources: []
---

**Situation** – In a mock interview I was asked to design the core architecture for a new Airbnb‑style marketplace that needed to support 50 M monthly active users, real‑time booking, and high availability across three continents.

**Task** – My goal was to propose a scalable, fault‑tolerant system that could handle spikes during peak travel seasons while keeping latency under 200 ms for the search API and ensuring eventual consistency for bookings.

**Action** – I chose a microservices stack:  
- **API Gateway + Kubernetes** for routing and autoscaling.  
- **Event‑driven services** (search, booking, payment) communicating via Kafka; this decouples write traffic from read replicas.  
- **Search service** built on Elasticsearch with geo‑sharding to reduce query latency.  
- **Database layer**: PostgreSQL for ACID guarantees on bookings, and a Redis cache for seat availability.  
- I implemented **CQRS** so that read models were updated asynchronously, reducing write contention. For resilience, each service ran in multiple AZs with Circuit Breaker patterns.

**Result** – The architecture could sustain 10 k concurrent booking requests per second, with 99.95% uptime during a simulated 24‑hour peak. Latency dropped from 350 ms to 140 ms on the search API after geo‑sharding. I learned that balancing consistency and performance often means accepting eventual consistency for reads while keeping writes strongly consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
