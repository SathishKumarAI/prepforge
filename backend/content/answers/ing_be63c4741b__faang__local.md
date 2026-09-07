---
qid: ing_be63c4741b__faang__local
question: 'Explain: What does an API gateway do? Why — What is API Gateway?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 457
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:22-05:00'
sources: []
---

**Clarify**  
You’re asking about the *role* of an API gateway in a micro‑service architecture: what it does and why we use one.

**Approach**  
I’ll first restate the core function, then list common responsibilities (routing, security, monitoring). After that I’ll explain the motivations—simplifying client interactions, centralizing cross‑cutting concerns, and enabling scaling and resilience.

**Depth**  
An API gateway is a reverse proxy that sits between clients and backend services. It accepts incoming HTTP(S) requests, performs *request routing* to the appropriate microservice (often using path or header rules), aggregates responses if needed, and returns a unified payload. Beyond routing it typically handles:

- **Authentication & authorization** – validating tokens, enforcing scopes.
- **Rate limiting / throttling** – protecting services from overload.
- **Caching** – reducing latency for repeat calls.
- **Protocol translation** – exposing RESTful endpoints to gRPC or message‑queue backends.
- **Observability** – collecting metrics, logs, and tracing headers.

By moving these concerns out of individual services we reduce boilerplate, enforce consistent security policies, and give a single entry point for monitoring. It also allows us to evolve backend APIs without breaking clients; the gateway can perform version mapping or schema transformations.

**Edge cases**  
- **High‑throughput services**: the gateway itself must be highly available and horizontally scalable; otherwise it becomes a bottleneck.  
- **Stateful protocols** (e.g., WebSocket) require special handling or separate adapters.  
- **Strict latency budgets**: extra hops add overhead, so we need efficient implementations.

**Optimize & communicate**  
To improve performance I’d employ connection pooling, async IO, and edge‑caching. For resilience, implement circuit breakers per downstream service. When presenting this to interviewers, I’d emphasize the trade‑off between centralization (simpler client code) and added latency, and note that in some cases a *service mesh* may be preferable for internal traffic while keeping an API gateway for external access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
