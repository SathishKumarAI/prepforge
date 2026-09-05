---
qid: ing_83f58702f4__star__local
question: 'Explain: API Contracts — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:12-05:00'
sources: []
---

**Situation**  
During a senior‑level interview at a fintech startup, the interviewer asked me to sketch an API contract for a real‑time fraud detection service that would ingest transaction streams from multiple payment gateways.

**Task**  
I had to define clear request/response schemas, versioning strategy, and error handling so that downstream services could reliably call the endpoint without breaking when new features were added.

**Action**  
First, I drafted an OpenAPI v3 spec in YAML, starting with a `POST /transactions` endpoint. I used JSON Schema to enforce required fields (transactionId, amount, currency, timestamp) and added a discriminated union for card vs. ACH payloads. For versioning, I introduced a header `X-Api-Version: 1.0` and kept backward‑compatible defaults. I incorporated OAuth2 client credentials flow for authentication, and defined standard HTTP status codes—`201 Created`, `400 Bad Request`, `401 Unauthorized`, `500 Internal Server Error`. To guard against schema drift, I set up a contract test suite with Pact that would run on every CI commit.

**Result**  
The interview panel praised the spec’s clarity; we moved forward to prototype in 45 minutes. In production, the API handled 2 M transactions/day with <0.5% error rate, and our automated contract tests caught a breaking change before it hit staging—saving us a costly rollback. I learned that a well‑structured contract not only speeds up development but also provides a safety net for evolving systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
