---
qid: ing_111e2bc103__star__local
question: 'Explain: Design decisions and Technology choices — System Design of food
  delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 459
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:57-05:00'
sources: []
---

**Situation**  
When I joined the core platform team at a mid‑stage food‑delivery startup, our order‑throughput had just surpassed 200 k orders/day and latency was creeping above 350 ms for critical “order confirmation” routes. Customers were complaining about delayed updates and the engineering budget was tight.

**Task**  
I needed to redesign the backend so that we could handle a 3× traffic surge, reduce end‑to‑end latency by at least 40 %, and keep infrastructure costs under 15 % of revenue.

**Action**  
1. *Micro‑service split*: I broke the monolith into Order, Restaurant, Delivery, Payment, and Notification services, each with its own PostgreSQL schema for strong consistency where needed and a shared Redis cache for hot reads (e.g., restaurant menus).  
2. *Event‑driven architecture*: Introduced Kafka as the backbone for inter‑service communication, enabling asynchronous processing of order state changes and reducing blocking calls.  
3. *gRPC + HTTP/2*: Switched Order ↔ Delivery RPCs to gRPC with HTTP/2 multiplexing, cutting round‑trip time by ~20 %.  
4. *Auto‑scaling & Spot instances*: Leveraged Kubernetes autoscaler on GKE, using spot VMs for non‑critical services; this cut compute spend by 12 %.  
5. *Observability*: Implemented OpenTelemetry tracing and Prometheus alerts, which surfaced a hidden “delivery queue lag” that was the real bottleneck.

**Result**  
After rollout, we handled 650 k orders/day with average confirmation latency dropping from 350 ms to 190 ms (45 % improvement). Monthly ops cost fell by $30K, and customer NPS rose from 68 to 82. I learned that coupling architectural change with real‑world metrics—throughput, latency, cost—is key to delivering measurable value in a fast‑moving domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
