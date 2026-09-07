---
qid: ing_3d0465ec0e__faang__local
question: 'Explain: This is traditionally not the case for — What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 472
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:41-05:00'
sources: []
---

**Clarify**  
The question asks you to explain **RPC (Remote Procedure Call)** and its modern incarnation, **gRPC**, while noting that “this is traditionally not the case for—” refers to the fact that RPC was once limited to *synchronous* calls over a single transport but now works in many more contexts. I’ll assume the interviewer wants:  
- What RPC means conceptually  
- How gRPC builds on it (protocol, language‑agnostic, streaming)  

**Approach**  
1. Define RPC as a client invoking a procedure on a remote server as if local.  
2. Contrast classic HTTP/REST vs RPC’s binary framing.  
3. Introduce gRPC: open‑source, Google‑originated, uses Protocol Buffers, supports multiple transports (HTTP/2).  

**Depth**  
- **RPC core idea:** Client sends a request message; server executes and returns a response. No shared memory or state.  
- **gRPC specifics:**  
  - *Transport*: HTTP/2 → multiplexed streams, flow control, header compression.  
  - *IDL*: `.proto` files generate strongly‑typed stubs in many languages.  
  - *Communication patterns*: Unary, server streaming, client streaming, bi‑directional streaming.  
  - *Features*: Interceptors (middleware), authentication via TLS/metadata, load balancing.  
- **Complexity:** Serialization/deserialization O(n); network latency dominates; streaming can reduce round trips but increases buffer usage.  

**Edge Cases**  
- Version mismatches in `.proto` files → need backward compatibility.  
- Network partitions: gRPC’s error handling vs retry policies.  
- Large payloads: HTTP/2 flow control may stall if not tuned.  

**Optimize & Communicate**  
I’d highlight that gRPC solves the “traditional limitation” by enabling **high‑performance, type‑safe, streaming RPC** over any transport, making it ideal for microservices and mobile backends. I’d finish by stressing its trade‑offs: tighter coupling to protobuf, less human‑readable traffic compared to REST, but gains in speed and developer ergonomics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
