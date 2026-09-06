---
qid: ing_cdea018e08__fp__local
question: 'What is a REST API? — gRPC vs. REST: Key Similarities and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 397
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:24-05:00'
sources: []
---

**REST (Representational State Transfer)** is an architectural style that exposes resources as URLs, letting clients manipulate them via standard HTTP verbs (GET, POST, PUT, DELETE). The fundamental problem it solves is *stateless communication*: each request must contain all information needed to understand the operation, so servers need not keep session data. This statelessness yields horizontal scalability and cacheability—key for distributed web services.

**gRPC** takes a different route: it uses HTTP/2 as transport, Protocol Buffers (or other binary formats) for serialization, and code‑generation from service definitions (`*.proto`). Its core problem is *low‑latency, high‑throughput inter‑service communication* in microservices or mobile backends. By multiplexing streams over a single connection and compressing payloads, gRPC achieves lower overhead than REST.

| Feature | REST | gRPC |
|---------|------|------|
| **Transport** | HTTP/1.1 (text) | HTTP/2 (binary) |
| **Serialization** | JSON/XML | Protobuf (or others) |
| **Statefulness** | Stateless by design | Stateless, but can maintain streaming state |
| **Interoperability** | Wide language support via HTTP | Strongly typed contracts; requires generated stubs |
| **Performance** | Higher text overhead | Lower latency, better for high‑volume |

### One non‑obvious insight
Both styles are *resource‑centric*, but gRPC’s service‑method abstraction hides the resource model. A client may think in terms of *operations* rather than *resources*, which can lead to tighter coupling between producer and consumer. This subtle shift means that a change in a method signature forces all clients to recompile, whereas REST’s loose URL/JSON contract allows more graceful evolution—an important consideration when designing long‑lived public APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
