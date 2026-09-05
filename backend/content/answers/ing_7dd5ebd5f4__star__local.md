---
qid: ing_7dd5ebd5f4__star__local
question: 'Explain: Common API Styles — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 374
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:29-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine that served real‑time suggestions to our mobile app. The product team needed a unified interface so the front‑end could fetch recommendations and push user feedback without touching the underlying ML pipeline.

**Task:**  
Design an API that balances speed, flexibility, and maintainability: it must expose prediction endpoints for live traffic, allow batch inference for nightly training updates, and support versioning as models evolve.

**Action:**  
I chose a RESTful style for the production endpoint (`GET /recommend?user_id=…&context=…`) because it’s stateless, cache‑friendly, and works with our CDN. For batch jobs I built a gRPC service (`PredictBatch`) to push large payloads efficiently over HTTP/2, reducing latency by ~30 %. I added an OpenAPI spec for the REST layer and protobuf definitions for gRPC, using versioned paths (`v1`, `v2`) and semantic tags so clients can opt‑in. To keep the contract stable I introduced a lightweight GraphQL wrapper that lets mobile developers query only the fields they need, cutting payload size by 25 %. All endpoints were secured with OAuth2 and rate‑limited via Envoy.

**Result:**  
The API cut response times from 350 ms to 120 ms for live predictions, boosted batch throughput by 4×, and allowed front‑end teams to iterate without touching the ML code. I learned that mixing REST, gRPC, and GraphQL—each chosen for its strengths—provides a pragmatic, production‑ready solution for machine‑learning services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
