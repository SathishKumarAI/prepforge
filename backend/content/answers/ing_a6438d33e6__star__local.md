---
qid: ing_a6438d33e6__star__local
question: 'Explain: Some REST API implementations might break them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:38-05:00'
sources: []
---

**Situation** – In the second quarter of 2024 I was leading a feature to expose our recommendation engine as a public REST API for partner apps. The spec called for a `GET /recommendations?userId=…` endpoint that returned a JSON array, and we were under pressure to hit a 10 % adoption target by month‑end.

**Task** – I had to guarantee the endpoint was truly idempotent, stateless, and cacheable so that external clients could rely on it without side effects. Yet our internal framework automatically logged every request for analytics, which altered the response headers and caused cache misses in CDN edge nodes.

**Action** – First, I refactored the middleware to separate analytics from business logic using a decorator pattern. Then I added explicit `Cache-Control: public, max-age=300` headers and removed any session cookies from the response. Finally, I introduced an ETag computed from the recommendation payload hash, and updated our unit tests to assert that repeated GETs returned identical bodies and headers.

**Result** – The API became fully compliant with REST constraints; partner apps reported a 0 % error rate in production. Cache hit ratios jumped from 12 % to 87 %, cutting response times by 70 %. I learned that even small cross‑cutting concerns like logging can silently violate REST principles, and rigorous header checks are essential before exposing endpoints publicly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
