---
qid: ing_43d934f6f2__faang__local
question: 'Explain: Server error responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 537
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:17-05:00'
sources: []
---

**Clarify**  
The question asks how servers signal problems with a request using HTTP status codes, specifically the *5xx* “Server Error” family (e.g., 500, 502, 503). I’ll assume we’re talking about RESTful APIs where clients need to interpret failures and retry or fallback.

**Approach**  
1. List the 5xx range and its intent.  
2. Explain each major code’s semantics.  
3. Show how a client can map them to actions (retry, back‑off, circuit breaker).  
4. Mention best practices for designing error responses (JSON payloads, error IDs).

**Depth**  
| Code | Meaning | Typical cause | Client action |
|------|---------|---------------|----------------|
| **500 Internal Server Error** | Generic failure on the server. | Unhandled exception, DB crash. | Retry after delay; log stack trace. |
| **501 Not Implemented** | Endpoint or method unsupported by server. | Feature not yet built. | Do not retry; inform user. |
| **502 Bad Gateway** | Proxy/gateway received invalid response from upstream. | Load balancer mis‑routing, microservice down. | Retry with exponential back‑off. |
| **503 Service Unavailable** | Server overloaded or undergoing maintenance. | CPU/Memory exhaustion, scheduled deploy. | Retry after `Retry-After` header; use circuit breaker. |
| **504 Gateway Timeout** | Proxy timed out waiting for upstream. | Slow downstream service. | Retry with longer timeout; consider time‑outs at client side. |

Clients should parse the *body* (e.g., `{ "error":"db_connection_failed","id":"abc123" }`) to decide on retry logic or user messaging.

**Edge Cases**  
- **Missing `Retry-After`**: default back‑off strategy.  
- **Non‑JSON bodies**: fallback to plain text parsing.  
- **Transient vs permanent errors**: 5xx are usually transient, but 501 is permanent.

**Optimize & Communicate**  
Explain that exposing granular error codes reduces unnecessary retries and improves observability (e.g., Prometheus metrics per status). In an interview I’d emphasize clear contract design between API and client, using standardized headers (`Retry-After`, `X-RateLimit-*`) and consistent payloads. This shows awareness of both system reliability and developer experience—key signals for a FAANG‑style answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
