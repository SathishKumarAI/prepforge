---
qid: ing_63af739592__star__local
question: 'Explain: Tech Decisions — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 328
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:15-05:00'
sources: []
---

**Situation** – I was leading the backend team at a mid‑size startup that wanted to launch a food‑ordering app in a market dominated by giants like Zomato and Swiggy. Our user base grew from 2,000 to 20,000 in three months, but we were hitting latency spikes during peak hours.

**Task** – Reduce end‑to‑end request latency below 200 ms for order placement while keeping the architecture cost‑effective and scalable.

**Action** – I proposed a hybrid microservices approach: split the monolith into “Order”, “Restaurant Catalog”, and “Payment” services, each in Docker containers orchestrated by Kubernetes. For real‑time inventory, we introduced Redis Streams to decouple write traffic from read queries, and used gRPC for inter‑service calls to cut serialization overhead. We also migrated our PostgreSQL database to a read replica pool with connection pooling (PgBouncer) and added a CDN for static assets. To monitor performance, I set up Prometheus + Grafana dashboards that surfaced latency per service in real time.

**Result** – Latency dropped from 480 ms to 140 ms during peak periods, reducing cart abandonment by 18%. The cost of infrastructure fell by 12% due to efficient scaling policies. I learned the importance of aligning tech choices with user experience metrics and the value of observable metrics for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
