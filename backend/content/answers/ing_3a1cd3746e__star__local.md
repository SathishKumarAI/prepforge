---
qid: ing_3a1cd3746e__star__local
question: 'Explain: 113: System Design Interview — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 371
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:49-05:00'
sources: []
---

**Situation** – In my last role I was asked to sketch a high‑level design for an online marketplace similar to Airbnb, focused on handling millions of listings and users with sub‑second latency.

**Task** – Build a scalable, fault‑tolerant architecture that supports search, booking, payment, reviews, and real‑time availability while keeping the data model flexible enough for future features.

**Action** – I started by defining core services: **Search**, **Booking**, **User**, **Listing**, and **Payment**. For search I chose a hybrid of Elasticsearch (full‑text, geo filters) and Redis caches to serve 90 % of queries in <50 ms. Bookings used an event‑driven microservice pattern with Kafka for ordering and eventual consistency; the payment service was split into a “payment intent” queue and a separate fraud‑check worker. I modeled listings in a NoSQL document store (Cassandra) to allow dynamic attributes, while relational Postgres stored user profiles for ACID guarantees. To avoid single points of failure, every stateless service ran behind an NGINX load balancer with health checks, and critical data was replicated across two AZs.

**Result** – The prototype handled 1 M concurrent search requests per day with a 99.9% SLA, and booking latency stayed under 200 ms even during peak traffic. Deployment to Kubernetes enabled zero‑downtime upgrades, and we reduced infrastructure costs by 15 % through autoscaling. I learned that balancing consistency and performance often means separating concerns into dedicated services rather than forcing all logic into a monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
