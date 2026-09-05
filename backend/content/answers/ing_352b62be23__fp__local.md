---
qid: ing_352b62be23__fp__local
question: 'Explain: What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 435
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:26-05:00'
sources: []
---

### Remote Procedure Call (RPC) – the problem it solves  
When a distributed system needs to perform a task that lives on another machine, the most natural abstraction is “call a function”. RPC formalises this: a client writes `result = foo(arg)` and the runtime marshals the arguments, transports them over the network, invokes `foo` on the server, then returns the result. It hides the *where* of computation, turning inter‑machine communication into ordinary local calls.

### Why an explicit protocol is required  
In reality, you must serialize data, negotiate transport (TCP, HTTP/2), handle failures, and enforce contracts. An RPC framework encodes these concerns in a single language‑agnostic specification so that both sides agree on message formats and error handling. This reduces boilerplate, guarantees type safety, and enables automatic code generation.

### gRPC – the modern incarnation  
gRPC is Google’s high‑performance implementation built on HTTP/2. It uses Protocol Buffers (compact binary schema) to define services (`service Greeter { rpc SayHello(HelloRequest) returns (HelloReply); }`). The core insight: **HTTP/2 multiplexing + streaming** lets gRPC support unary, client‑streaming, server‑streaming, and bidirectional streaming without additional framing logic. This yields low latency, efficient bandwidth usage, and back‑pressure handling.

### Non‑obvious benefit  
Because the same `.proto` file generates both server stubs and client proxies in multiple languages, **gRPC enforces a single source of truth for API contracts**. If you modify a field type, every language automatically updates its serialization code, eliminating version drift that plagues hand‑coded APIs.

> In short, RPC turns remote calls into local ones; gRPC sharpens this by leveraging HTTP/2’s multiplexing and Protobuf’s compactness, giving you a typed, streaming‑friendly, cross‑language API layer with minimal manual glue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
