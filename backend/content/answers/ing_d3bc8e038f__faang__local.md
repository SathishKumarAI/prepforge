---
qid: ing_d3bc8e038f__faang__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — gRPC vs. REST: Key Similarities
  and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 528
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:41-05:00'
sources: []
---

**Clarify**  
We’re comparing two API styles that both run over TCP/IP but differ in transport (HTTP 1.1 vs HTTP/2) and semantics (RESTful JSON vs gRPC’s protobuf). Assume the client/server are on a stable network, we care about throughput, latency, and developer ergonomics.

**Approach**  
1. List shared foundations: both use request/response over TLS, support authentication, and can be deployed behind load balancers.  
2. Contrast transport features of HTTP 2 (multiplexing, header compression).  
3. Compare payload formats, method definitions, error handling, and tooling.

**Depth**  

| Feature | REST (HTTP 1.1) | gRPC (HTTP 2) |
|---------|-----------------|--------------|
| **Transport** | Single request per connection; head‑of‑line blocking | Multiplexed streams on one connection; no HOL blocking |
| **Payload** | Textual JSON/XML → larger overhead, slower parse | Binary protobuf → smaller size, faster serialization |
| **Methodology** | CRUD via verbs (GET/POST/PUT/PATCH/DELETE) | RPCs defined in .proto files; strict contract |
| **Streaming** | Long‑polling or SSE for push | Bidirectional streaming natively supported |
| **Tooling** | Swagger/OpenAPI, broad language support | Codegen from proto → typed stubs, strong typing |
| **Error handling** | HTTP status codes + body | gRPC status codes + trailers |
| **Observability** | Logs & metrics per request | Built‑in interceptors, structured tracing |

Both can use TLS and be load‑balanced; the main divergence is in how they exploit HTTP 2’s multiplexing and binary framing.

**Edge Cases**  
- Legacy clients that only support HTTP 1.1 → REST required.  
- Extremely low‑latency mobile apps benefit from gRPC streams, but need protobuf compatibility.  
- In environments with strict text‑only firewalls, REST wins.

**Optimize & Communicate**  
If I were designing a new microservice, I’d lean to gRPC for internal high‑throughput services (e.g., data pipelines) and REST for public APIs where tooling and human readability matter. I would explain that the choice trades off bandwidth/latency against developer friendliness and ecosystem maturity. This narrative shows clear trade‑off reasoning expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
