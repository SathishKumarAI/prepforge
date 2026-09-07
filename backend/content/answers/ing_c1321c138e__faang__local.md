---
qid: ing_c1321c138e__faang__local
question: 'Explain: Internal APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 435
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:37-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, system‑design‑style explanation of “Internal APIs” and what constitutes an *API*. Assume we’re designing an internal service layer for a large web platform where multiple microservices must communicate securely and efficiently.

**Approach**  
1. Define the API abstraction (contract, data format).  
2. Identify key attributes: versioning, authentication, throttling, observability.  
3. Sketch a high‑level architecture (API gateway → service registry → business services).  
4. Discuss trade‑offs between synchronous REST vs asynchronous gRPC.

**Depth**  
- **What is an API?** A formal interface exposing operations and data schemas to clients, decoupling implementation from consumption.  
- **Internal API**: Same contract but confined within the organization’s infrastructure, typically over a private network or VPC.  
- **Design elements**  
  - *Contract*: OpenAPI/Protobuf spec; immutable once released.  
  - *Security*: Mutual TLS + OAuth2 token exchange via an internal IAM service.  
  - *Versioning*: URI path (`v1`, `v2`) and semantic version headers to avoid breaking clients.  
  - *Observability*: Distributed tracing (OpenTelemetry), metrics (Prometheus), logs (ELK).  
  - *Resilience*: Circuit breakers, retries with exponential back‑off; fallbacks for critical paths.  

**Edge Cases**  
- Downtime of the gateway → graceful degradation via cached responses.  
- Schema drift when a service evolves faster than its consumers.  
- Network partition causing inconsistent state across replicas.

**Optimize & Communicate**  
Explain that internal APIs enable rapid iteration while preserving stability through strict contract enforcement and observability. Highlight that choosing gRPC for high‑throughput services reduces latency, whereas REST is preferable for loosely coupled components needing human readability. Conclude by stressing the importance of a governance process (API review board) to balance speed with reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
