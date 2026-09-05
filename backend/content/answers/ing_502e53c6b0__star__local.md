---
qid: ing_502e53c6b0__star__local
question: 'Explain: Best Practices for Designing a Pragmatic RESTful API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 414
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:43-05:00'
sources: []
---

**Situation:**  
At my last startup we built an internal recommendation engine that served personalized content via a new public-facing API. Early adopters complained the endpoint was slow and the docs were confusing, so our user growth stalled at ~5 % per month.

**Task:**  
I had to redesign the REST interface to be intuitive, scalable, and secure while keeping latency under 200 ms for 95 % of requests, and reduce support tickets by half within three months.

**Action:**  
1. **Resource‑oriented design:** I mapped entities (users, items, recommendations) into clear nouns (`/users/{id}/recommendations`) and used pluralized paths.  
2. **Versioning & deprecation:** Added `/v1/` prefixes and a “deprecate” header to allow gradual migration.  
3. **Pagination + caching:** Implemented cursor‑based pagination (`?after=token`) and set `Cache-Control: s-maxage=60` for hot data, reducing load on the recommendation engine.  
4. **Stateless auth with JWT** plus rate limiting (10 req/s per key) to protect against abuse.  
5. **OpenAPI spec + Swagger UI:** Auto‑generated docs, example payloads, and automated contract tests via `schemathesis`.  
6. **Monitoring & telemetry:** Integrated Prometheus metrics (`http_latency_seconds`, `api_errors_total`) and alerts for SLA breaches.

**Result:**  
Latency dropped to 110 ms average; the 95th percentile hit 180 ms. User adoption grew from 5 % to 18 % per month, and support tickets fell by 60 %. I learned that a well‑structured REST API is not just about endpoints—it’s a combination of clear resource modeling, backward compatibility, caching strategy, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
