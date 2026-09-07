---
qid: ing_691843d284__faang__local
question: 'Explain: When the Order Service makes a gRPC — What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 474
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“When the Order Service calls another service via gRPC, what exactly is an RPC and how does gRPC work?”*  
Assumptions:  
- We’re working in a micro‑service architecture where services communicate over HTTP/2.  
- The goal is to understand the abstraction (RPC) and the concrete protocol (gRPC).

**Approach**  
1. Define “Remote Procedure Call” as an abstraction for invoking code on another machine.  
2. Explain gRPC as Google’s open‑source implementation built on HTTP/2, Protocol Buffers, and code generation.  
3. Highlight key benefits: low latency, bi‑directional streaming, type safety.

**Depth**  
- **RPC (Remote Procedure Call)**: Client issues a function call; the system serializes arguments, sends them to the server, which executes the function and returns a result—opaque to the caller.  
- **gRPC**:  
  - Uses **HTTP/2** for multiplexed streams, header compression, and flow control → lower latency than REST/JSON.  
  - Employs **Protocol Buffers (protobuf)** as a compact binary schema; services define `.proto` files that generate stubs in multiple languages.  
  - Supports four RPC styles: unary, server streaming, client streaming, bi‑directional streaming.  
  - Handles authentication via TLS and optional interceptors for logging/metrics.  
- **Workflow**: Order Service → generates stub call → marshals protobuf → sends over HTTP/2 → service handler unmarshals, processes, marshals response → returns.

**Edge Cases**  
- Network partitions → gRPC retries or client‑side circuit breakers.  
- Backward compatibility → protobuf versioning (optional fields).  
- Large payloads → streaming RPCs to avoid memory blowup.

**Optimize & Communicate**  
Explain that gRPC’s binary format and multiplexed streams give ~30 % lower latency than JSON/REST, while the strong typing catches many bugs at compile time. Conclude by noting that for high‑throughput order processing, gRPC’s streaming and efficient serialization make it a natural fit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
