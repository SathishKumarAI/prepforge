---
qid: ing_158729f603__star__local
question: 'Explain: REST APIs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 328
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:14-05:00'
sources: []
---

**Situation**  
I was part of a product team building an internal analytics dashboard that needed a quick way to share user‑specific reports. The existing link generator produced long URLs with tracking parameters, which were hard to copy and prone to errors.

**Task**  
Design and expose a lightweight RESTful service that could shorten any report URL into a short, memorable code (like TinyURL) while preserving the original query string for downstream analytics.

**Action**  
I chose Go for its low latency and built an HTTP/1.1 API with three endpoints: `POST /shorten`, `GET /{code}`, and `DELETE /{code}`. The service hashed the full URL with SHA‑256, truncated to 6 characters, and stored the mapping in Redis (TTL of 90 days). I added rate limiting via a token bucket algorithm, implemented idempotent creation by checking existing hashes, and logged each request to Kafka for audit. The API used JSON payloads, returned HTTP 201 on success, and handled errors with clear messages.

**Result**  
Within two weeks the service was deployed; we reduced copy‑paste errors by 80 % and cut link‑click latency from ~300 ms to <30 ms. The dashboard saw a 25 % increase in user sharing activity. I learned how to balance speed, reliability, and observability in a simple REST API, and the importance of clear contract design for downstream teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
