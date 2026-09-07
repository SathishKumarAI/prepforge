---
qid: ing_527a9b14d9__faang__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 441
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:17-05:00'
sources: []
---

**Clarify**  
You’re asking what an *API contract* is and why it matters in system design—i.e., the formal agreement between a client and a service about data shapes, verbs, auth, errors, etc.

**Approach**  
1. Define “API” (interface exposed over HTTP/REST, gRPC, GraphQL).  
2. Break down *contract* into: request schema, response schema, semantics, versioning, latency guarantees, security, error handling, and monitoring.  
3. Explain how the contract is captured (OpenAPI/Swagger, protobuf, GraphQL SDL) and enforced (codegen, validation middleware).  

**Depth**  
- **Request & Response**: JSON or binary payloads must match a schema; mismatches lead to `400 Bad Request`.  
- **HTTP verbs / gRPC methods** encode intent.  
- **Versioning**: path (`/v1/...`) or header; ensures backward compatibility.  
- **Auth/OAuth2**: scopes and token lifetimes are part of the contract.  
- **Error codes** (`404`, `500`, custom `X‑Error-Code`) give clients predictable error handling.  
- **Rate limits & quotas** expose SLA terms.  
- **Monitoring**: health endpoints, metrics, and tracing IDs are contractual guarantees for observability.

**Edge Cases**  
- Schema drift (adding fields) → use nullable or default values.  
- Deprecation of endpoints → soft‑deprecation flags before hard removal.  
- Mixed media types in one endpoint → content negotiation must be documented.  

**Optimize & Communicate**  
Start with a single “contract-first” approach: write the OpenAPI spec, generate stubs, and test against it. Iterate by adding versioning early to avoid breaking clients. When explaining, use analogies (a contract is like a lease agreement—both parties know obligations) and highlight that a well‑defined API contract reduces integration friction, speeds onboarding, and enables automated testing and continuous delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
