---
qid: ing_dec7efa69a__star__local
question: 'Explain: API Design — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 367
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:21-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time recommendation engine that served 1.2 million users per day. The backend was split into three microservices—data ingestion, model inference, and result aggregation—each exposed through RESTful APIs.  

**Task**  
I had to design an API layer that could scale under peak traffic, enforce rate limits, support versioning for evolving models, and expose clear monitoring hooks without leaking internal implementation details.

**Action**  
First, I adopted a contract‑first approach using OpenAPI 3.0: each service defined its own schema, input validation rules, and error codes. To isolate model changes, I introduced a “model version” header that routed requests to the appropriate inference container via an API gateway (NGINX + Envoy). For throttling, I implemented token‑bucket rate limiting per user ID in Redis, ensuring no single client could overwhelm the inference cluster. Finally, I added Prometheus metrics endpoints on each service—`request_latency_seconds`, `model_success_total`, and `api_error_total`—and used Grafana dashboards to alert on SLA violations.

**Result**  
The new API design cut request latency by 35 % during peak hours and reduced error rates from 4.2 % to 0.8 %. The versioning scheme allowed us to roll out a new recommendation model with zero downtime, and the monitoring stack helped detect a surge in failed predictions early, saving us an estimated $120k in avoided infra costs. I learned that clear contracts, decoupled routing, and observability are key pillars for resilient ML‑service APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
