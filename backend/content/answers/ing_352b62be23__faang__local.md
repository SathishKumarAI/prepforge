---
qid: ing_352b62be23__faang__local
question: 'Explain: What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:33-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of *Remote Procedure Call (RPC)* and a brief intro to *gRPC*. I’ll assume the audience is familiar with networking basics but not necessarily with RPC internals.

**Approach**  
1. Define RPC at a high level.  
2. Contrast it with plain HTTP/REST.  
3. Introduce gRPC: its core tech stack, protocol buffers, and key benefits.  
4. Summarize typical use‑cases and trade‑offs.

**Depth**  
- **RPC** is an abstraction that lets a client invoke functions on a server as if they were local calls. The client serializes arguments, sends them over the network, the server deserializes, executes, then returns serialized results.  
- gRPC builds on this by using **Protocol Buffers (protobuf)** for compact, language‑neutral serialization and HTTP/2 for multiplexed streams, flow control, and header compression.  
- A `.proto` file declares services and messages; codegen creates stubs in the target language. gRPC supports both *unary* and streaming RPCs (client, server, bi‑directional).  
- It provides built‑in authentication (TLS), load balancing, interceptors for logging/metrics, and is highly performant—often 2–3× faster than REST with JSON.

**Edge Cases**  
- Legacy clients that only speak HTTP/JSON cannot use gRPC directly.  
- Large payloads may still be costly; streaming helps but adds complexity.  
- Some firewalls block non‑standard ports; gRPC can run over HTTPS (port 443) to mitigate this.

**Optimize & Communicate**  
When presenting, start with a relatable analogy (“calling a function on another machine”), then layer in the technical stack, highlighting why HTTP/2 + protobuf matters. End by summarizing “gRPC = fast, typed, streaming‑friendly RPC for modern microservices.” This structure shows clear problem understanding, methodical planning, depth, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
