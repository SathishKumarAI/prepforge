---
qid: ing_d70e831cf3__star__local
question: 'Explain: that and um to be able to — Amazon System Design Interview: Design
  Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 327
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:52-05:00'
sources: []
---

**Situation** – While working at a mid‑size software firm, we were tasked with building an online reservation platform for a new multi‑level parking garage in downtown Seattle. The client wanted real‑time availability, dynamic pricing during peak hours, and seamless mobile payments.

**Task** – I needed to design the backend architecture that would support thousands of concurrent users, guarantee 99.9% uptime, and scale with future expansions (adding more levels or integrating electric vehicle charging).

**Action** – I chose a microservices approach: an *Availability Service* using Redis for fast in‑memory state, a *Pricing Engine* written in Go that applied time‑of‑day rules and occupancy thresholds, and a *Payment Gateway* wrapped around Stripe. The services communicated over gRPC with mutual TLS. For persistence, we used PostgreSQL partitioned by level, and Kafka to stream events (entry/exit) for real‑time analytics. I also implemented circuit breakers and health checks in Kubernetes, ensuring graceful degradation if one service failed.

**Result** – The platform launched on schedule; user traffic peaked at 12,000 concurrent sessions during the first week with no downtime. Occupancy accuracy improved from 70% to 98%, and dynamic pricing increased revenue by 15% within three months. I learned that coupling lightweight stateful services with robust messaging guarantees both performance and resilience in high‑availability systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
