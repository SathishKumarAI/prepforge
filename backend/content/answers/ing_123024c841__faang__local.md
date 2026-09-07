---
qid: ing_123024c841__faang__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 489
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:00-05:00'
sources: []
---

**Clarify**

> *What is an API and how does it fit into a production ML system?*  
I’d confirm that the question targets **API contracts for model serving**, not just REST basics: we need to understand data schemas, versioning, latency SLAs, and security.  

---

**Approach**

1. Define “API” in ML context (model‑inference endpoint).  
2. List core contract elements: request/response schema, authentication, rate limits, versioning, monitoring hooks.  
3. Show how to encode this in a spec language (OpenAPI / gRPC proto).  

---

**Depth**

- **Request/Response** – JSON body or protobuf with feature vector keys and types; optional metadata header for context.  
- **Authentication** – OAuth/JWT tokens tied to user roles, ensuring only whitelisted services call the endpoint.  
- **Rate‑limiting & Quotas** – per‑API key sliding window, back‑off policy exposed in headers (`X‑Retry‑After`).  
- **Versioning** – `v1`, `v2` tags in URL or header; deprecation strategy via `Deprecation-Warning`.  
- **Latency SLA** – contract specifies max 10 ms average for 99th percentile, enforced by Prometheus alerts.  
- **Observability hooks** – OpenTelemetry traces automatically injected; metrics exposed on `/metrics`.  

*Complexity*: O(1) per request to validate schema; overall system scales linearly with inference traffic.

---

**Edge Cases**

- Missing fields → 400 Bad Request with detailed error schema.  
- Unsupported data type → 422 Unprocessable Entity.  
- Back‑pressure when model is overloaded → 429 Too Many Requests + `Retry-After`.  

Testing: contract‑driven tests using Pact or OpenAPI‑generator to ensure client/server alignment.

---

**Optimize & Communicate**

Explain that a well‑defined API contract reduces friction for downstream services, allows automated CI/CD with contract checks, and enables graceful model rollouts. Narrate by walking through a sample request lifecycle, highlighting where each contract rule intervenes. This showcases structured problem solving, clear communication, and deep technical grasp—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
