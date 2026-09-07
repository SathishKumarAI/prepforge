---
qid: ing_e16ecedafa__faang__local
question: 'Explain: Network APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 644
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:33-05:00'
sources: []
---

**Clarify**  
*What you’re asking:* “Explain what a network API is, and how it fits into system‑design conversations.”  
Assumptions to confirm:  
- The audience knows basic networking but not necessarily REST/GraphQL jargon.  
- We should cover both the *definition* (what an API is) and its *role* in distributed systems.

**Approach**  
1. Define “API” in plain terms.  
2. Distinguish between *network APIs* vs. local ones.  
3. Outline typical patterns (REST, gRPC, GraphQL).  
4. Show how APIs enable modular system design and scaling.  
5. Touch on security, versioning, and monitoring.

**Depth**  
An **API** (Application Programming Interface) is a contract that exposes programmatic operations—functions, data structures, or endpoints—to other software. A *network API* moves this contract over a transport layer (TCP/UDP), allowing clients to invoke services hosted on remote machines.  

Typical HTTP‑based APIs use stateless CRUD semantics:  
- **GET** fetches resources, **POST** creates, **PUT/PATCH** updates, **DELETE** removes.  
- The URL path encodes the resource hierarchy; query parameters or request bodies carry payloads.  

Alternatives:  
- **gRPC** (Protocol Buffers + HTTP/2) offers low‑latency, strongly typed RPC, ideal for microservices that need high throughput.  
- **GraphQL** lets clients specify exact data shapes, reducing over‑fetching but adding query complexity.

In system design, APIs are the *glue* between services: they define boundaries, enable independent scaling, and provide a versioned contract that decouples teams. They also surface observability hooks (e.g., OpenTelemetry tracing) and security controls (OAuth2, API keys).  

**Edge Cases**  
- **Stateful operations** over REST can lead to cache invalidation issues; consider using WebSockets or server‑sent events for real‑time data.  
- **Versioning**: Blindly changing an endpoint breaks clients—use URI versioning (`/v1/...`) or header‑based schemes.  
- **Rate limiting**: Without it, a malicious client can exhaust resources; implement token buckets at the API gateway.

**Optimize & Communicate**  
To improve design:  
- Use an API gateway for cross‑cutting concerns (auth, throttling).  
- Adopt contract‑first development (OpenAPI/ProtoBuf) to auto‑generate docs and stubs.  
- Emphasize clear error codes (`4xx` for client misuse, `5xx` for server faults).

When explaining this in an interview, start with the “what” and immediately tie it to a concrete design problem—e.g., “In our e‑commerce platform we expose a `/orders` API via gRPC so that the catalog service can place orders without waiting on HTTP round trips.” This shows you’re thinking system‑wide, not just about syntax.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
