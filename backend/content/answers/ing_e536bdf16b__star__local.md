---
qid: ing_e536bdf16b__star__local
question: 'Explain: Pattern Selection Guide — Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 350
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:15-05:00'
sources: []
---

**Situation** – At my previous company we were building a recommendation engine for an e‑commerce platform that needed to scale from 10k to 1M users while keeping latency under 50 ms. The existing monolithic service was hitting CPU limits and the dev team was overwhelmed by feature churn.

**Task** – I had to design a modular architecture that could handle high throughput, support A/B testing of new algorithms, and allow independent scaling of components without breaking the API contract.

**Action** – First, I mapped out the system requirements against the Pattern Selection Guide: we needed a *Command Query Responsibility Segregation* (CQRS) pattern for decoupling reads from writes, a *Saga* pattern to coordinate long‑running recommendation workflows, and an *Event Sourcing* pattern to capture state changes for auditability. I then chose Kafka as the event bus, Redis Streams for saga orchestration, and PostgreSQL with logical replication for read replicas. I wrote a prototype in Python using FastAPI, integrated it with our CI pipeline, and set up automated metrics dashboards (Prometheus + Grafana) to monitor latency and throughput.

**Result** – The new architecture reduced average response time from 120 ms to 35 ms, increased user session duration by 18%, and cut CPU usage on the recommendation microservice by 45%. I learned that a systematic pattern selection guide not only speeds up decision‑making but also ensures that each component’s trade‑offs align with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
