---
qid: ing_770b98a5d5__star__local
question: 'Explain: HTTP API Codes — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 317
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:02-05:00'
sources: []
---

**Situation** – At my previous company we had a predictive churn model that needed to be served to the sales team via an internal web portal. The product manager insisted on a simple, scalable interface so they could pull predictions in real‑time during customer calls.

**Task** – I was tasked with designing and implementing a RESTful HTTP API that would accept customer IDs, return probability scores, and log usage for monitoring, all while keeping latency under 200 ms and handling 10,000 requests per minute.

**Action** – I used FastAPI in Python to expose three endpoints: `/predict`, `/health`, and `/metrics`. The `/predict` route validated JSON payloads with Pydantic, then called a pre‑serialized XGBoost model loaded into memory via `joblib`. For scaling, I containerized the service with Docker and deployed it on Kubernetes behind an NGINX ingress, adding rate limiting (10 req/s per user) and caching predictions in Redis for 5 minutes. I also instrumented Prometheus metrics for request count, latency percentiles, and error rates.

**Result** – The API achieved a median latency of 120 ms under load, handled peak traffic without outages, and reduced the sales team’s manual lookup time by 70%. I learned how to balance strict SLA requirements with clean REST design and the importance of observability in production ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
