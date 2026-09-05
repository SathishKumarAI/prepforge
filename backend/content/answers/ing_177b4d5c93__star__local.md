---
qid: ing_177b4d5c93__star__local
question: 'Explain: Design WhatsApp — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 310
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:49-05:00'
sources: []
---

**Situation** – In a campus hackathon we were asked to build a messaging platform for a small community of 5,000 users that could handle real‑time text, media and group chats with minimal latency.

**Task** – I had to design a scalable architecture that supports end‑to‑end encryption, high availability, and efficient message delivery while keeping costs under $200/month.

**Action** – I started by modeling the system as three layers: client → edge API gateway (NGINX + TLS termination) → microservice cluster. For persistence I chose a sharded Cassandra ring for user metadata and an S3‑backed object store for media, with DynamoDB for quick lookup of conversation threads. To push messages I wired Kafka topics per user group, consumed by a Go service that pushes to WebSocket endpoints; fallback to FCM/APNs when clients are offline. I added rate limiting via Envoy’s traffic shadowing and auto‑scaling policies on Kubernetes, using Prometheus + Grafana for observability.

**Result** – The prototype handled 12 k messages per minute with <200 ms average latency, stayed within the budget, and earned a “Best Design” award. I learned how to balance consistency (Cassandra’s eventual consistency) against performance, and the importance of designing for graceful degradation in mobile push scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
