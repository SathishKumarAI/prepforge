---
qid: ing_e16ecedafa__star__local
question: 'Explain: Network APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 322
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:37-05:00'
sources: []
---

**Situation:** While working on a real‑time analytics platform for a fintech startup, we needed to expose our recommendation engine to third‑party apps. The existing monolith made it hard for external developers to integrate without pulling the whole codebase.

**Task:** Design a clean, scalable API layer that would let external services query recommendations and push user events, while keeping latency under 50 ms and supporting at least 10k concurrent connections.

**Action:** I chose a RESTful approach with JSON over HTTPS, using FastAPI for its async support. I defined resource endpoints (`/recommendations`, `/events`) and versioned them (v1). To handle authentication, I implemented OAuth2 JWT tokens, ensuring each request was validated before hitting the ML model. For scaling, I wrapped the service in Docker containers behind an NGINX reverse proxy with rate‑limiting and used a Redis cache to store recent recommendations per user, cutting inference time from 120 ms to ~30 ms. I also added OpenTelemetry tracing so we could monitor latency per endpoint.

**Result:** The new API cut external integration time by 70%, lowered average response latency to 28 ms, and handled 12k concurrent users without error. We received positive feedback from partner developers, and the platform now supports automated A/B testing of recommendation models in production. I learned that a well‑designed, versioned API with proper auth and caching is critical for ML model exposure at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
