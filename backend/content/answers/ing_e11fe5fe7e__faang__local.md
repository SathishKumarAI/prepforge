---
qid: ing_e11fe5fe7e__faang__local
question: 'Explain: HTTP Headers — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 581
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:40-05:00'
sources: []
---

**Clarify**  
You’re asking how **HTTP headers** work in a RESTful API and why they matter for machine‑learning pipelines (e.g., model inference services). I’ll assume the client is an ML application that calls a REST endpoint, sends data, and expects JSON or binary predictions.

**Approach**  
1. Define what HTTP headers are.  
2. Map key header categories to REST/ML concerns: authentication, content negotiation, caching, rate‑limiting, tracing.  
3. Illustrate with an example request/response for a model inference call.  
4. Highlight common pitfalls (e.g., missing `Content-Type`, stale caches).

**Depth**  
- **General purpose**: name/value pairs sent before the body; immutable in transit, used by both client and server to exchange metadata.  
- **Common headers in ML REST APIs**:
  - `Authorization`: Bearer token for API keys or OAuth – protects model endpoints.  
  - `Content-Type` / `Accept`: `application/json`, `application/octet-stream` – tells the server how to parse input (e.g., serialized tensors) and what format the client expects back.  
  - `Cache-Control`: prevents caching of predictions that are stateful or time‑sensitive (`no-store`).  
  - `X-Request-ID`: for distributed tracing across microservices.  
  - `User-Agent`: identifies the SDK, useful for analytics.  
- **Example**:  
  ```http
  POST /v1/models/recall/predict HTTP/1.1
  Host: ml.example.com
  Authorization: Bearer abc123
  Content-Type: application/json
  Accept: application/json

  {"features": [0.2, 0.5, 1.3]}
  ```  
  Response:
  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json
  Cache-Control: no-store

  {"prediction": "cat"}
  ```

**Edge cases**  
- Missing `Content-Type` → server may default to text/plain and reject binary payloads.  
- Stale cache (`Cache-Control: max-age`) can return outdated predictions.  
- Long‑running inference without `Transfer-Encoding: chunked` may block the client.

**Optimize & communicate**  
Explain that a well‑defined header contract reduces friction between ML teams and platform ops, enables automated monitoring (via X‑Request-ID), and secures endpoints. Emphasize testing with tools like Postman or curl to validate header handling before deploying models. This structured view demonstrates clear communication, depth, and awareness of production concerns—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
