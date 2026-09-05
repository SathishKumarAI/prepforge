---
qid: ing_9b454c4abd__star__local
question: 'Explain: How Engineers Use an API — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 293
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:53-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that had to process millions of user interactions per day while keeping latency under 50 ms.

**Task:** My goal was to expose the model inference as a lightweight, scalable service so that frontend teams could call it from various products (web, mobile, API gateway) without duplicating code or re‑training models locally.

**Action:** I designed a RESTful API around a TensorFlow Serving backend. The API layer used FastAPI with Pydantic schemas for input validation, and an async gRPC client to forward requests to the model server. To handle burst traffic, I wrapped the endpoint in a rate limiter (Redis‑backed token bucket) and implemented caching of frequent queries using Redis. For observability I added OpenTelemetry tracing and Prometheus metrics so we could monitor request latency and error rates per endpoint.

**Result:** The API reduced inference latency from 120 ms to 35 ms on average, handled a peak of 300k requests per minute with <1% error rate, and cut the engineering effort for new product integrations by 70%. I learned that treating the model as an external service via a well‑defined API simplifies scaling, security, and continuous deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
