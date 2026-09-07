---
qid: ing_b3af69baa8__faang__local
question: 'Explain: RPC vs REST — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 569
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:51-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to contrast **Remote Procedure Call (RPC)** and **Representational State Transfer (REST)**, specifically noting that RPC is a concept from operating‑system IPC but also appears in distributed systems (e.g., gRPC). Clarify the scope: *Are we comparing just the networking protocols or also their application patterns?* Assume they want a high‑level technical comparison.

**Approach**  
1. Define each abstraction and its origin.  
2. List core properties: transport, data format, discoverability, statelessness, caching, versioning.  
3. Highlight typical use cases.  
4. Summarize pros/cons and trade‑offs in terms of performance, scalability, tooling.

**Depth**  
| Feature | RPC (e.g., gRPC) | REST |
|---------|-----------------|------|
| **Communication style** | Procedural – client calls a method on a remote server as if local. | Resource‑oriented – clients manipulate resources via URIs and HTTP verbs. |
| **Transport** | Usually binary over HTTP/2 or raw sockets; supports streaming, multiplexing. | Textual (JSON/XML) over HTTP/1.1; stateless requests. |
| **Data format** | Protocol Buffers, Thrift, etc.; self‑describing schema → faster parsing. | JSON/XML; human readable but larger payloads. |
| **Discoverability** | Requires IDL files or service registry (e.g., gRPC reflection). | Implicit via hypermedia links (HATEOAS) or OpenAPI specs. |
| **Caching** | Not built‑in; requires custom logic. | HTTP caching headers out of the box. |
| **Versioning** | API version in package name/IDL. | URI path or header based, plus media type negotiation. |

**Edge cases**  
- *High‑throughput streaming*: RPC shines with bidirectional streams; REST struggles unless you use WebSockets.  
- *Legacy clients*: REST’s HTTP base makes it easier to consume from browsers and simple tools.  
- *Binary payloads*: RPC can transmit large blobs efficiently; REST must encode (Base64) or use multipart.

**Optimize & communicate**  
Mention that modern cloud stacks often blend both: expose a REST gateway for public consumption while internally using gRPC for microservice communication. Highlight tooling (OpenAPI, protobuf compilers) and observability differences (gRPC supports built‑in metrics). Conclude by advising to pick RPC when tight coupling, performance, and streaming are priorities; choose REST for loose coupling, wide compatibility, and cache‑friendly public APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
