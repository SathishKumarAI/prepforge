---
qid: ing_68fc47068e__star__local
question: 'Explain: Library APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 321
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:17-05:00'
sources: []
---

**Situation:** While leading a data‑science team at a fintech startup, we had built a recommendation engine that scored millions of transactions per day. Stakeholders needed real‑time access to these scores from the mobile app and partner services.

**Task:** I was tasked with exposing the model’s predictions through a robust, scalable API so developers could call it with minimal latency and maximum reliability.

**Action:** First, I defined the contract: a RESTful endpoint that accepted JSON payloads (user ID, transaction context) and returned a score plus confidence. Using FastAPI I built the service, added Pydantic models for input validation, and wrapped the TensorFlow model in a singleton to avoid reloading overhead. To handle bursts, I deployed behind an NGINX reverse proxy with rate limiting, and used Redis caching for repeat queries. For observability, I instrumented OpenTelemetry traces and Prometheus metrics (latency percentiles, error rates). Finally, I wrote unit tests and a CI pipeline that validated the API against regression data.

**Result:** The endpoint achieved 95th‑percentile latency below 30 ms under peak load of 10k requests/s, reduced mobile app crashes by 40%, and cut manual score retrieval time from hours to seconds. I learned that clear contract design, lightweight frameworks, and proactive observability are key when turning a ML model into a production API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
