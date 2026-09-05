---
qid: ing_a5e782509a__star__local
question: 'Explain: What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 295
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:45-05:00'
sources: []
---

**Situation** – While leading the redesign of our recommendation engine at a mid‑size e‑commerce platform, we discovered that the front‑end team was struggling to pull model predictions efficiently. The existing monolithic codebase made it hard to test and scale new models without disrupting other services.

**Task** – I needed to expose the ML inference logic as a clean, reusable interface so developers could call it from any microservice, enforce versioning, and monitor usage metrics in real time.

**Action** – I built a RESTful API using FastAPI, wrapped the TensorFlow model inside a Docker container, and deployed it on Kubernetes. The endpoint accepted JSON payloads (user ID, item context) and returned probability scores with latency under 50 ms. I added OpenTelemetry for tracing, Prometheus metrics for throughput, and an OAuth2 layer for secure access. To support A/B testing, the API routed requests to different model versions based on a header flag.

**Result** – The new API cut inference latency by 35% and reduced CPU usage by 20%. It enabled the front‑end team to iterate on UI features without redeploying models, increased overall system reliability, and taught me how proper abstraction turns ML logic into a scalable product component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
