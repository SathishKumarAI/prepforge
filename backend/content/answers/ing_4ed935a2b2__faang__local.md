---
qid: ing_4ed935a2b2__faang__local
question: What Does RPC do? — Remote Procedure Call (RPC) in Operating System - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 464
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:00-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks: *“What does an RPC do?”* I’ll confirm they’re referring to **Remote Procedure Call**—a mechanism that lets a program invoke code on another machine as if it were local, abstracting network details. Assume we’re talking about OS‑level or distributed system RPC (e.g., gRPC, Thrift).

**2️⃣ Approach**  
Explain the high‑level workflow: client → stub → marshalling → transport → server → unmarshalling → execution → return path. Mention key concepts: stubs, proxies, serialization, synchronous vs asynchronous calls.

**3️⃣ Depth**  
- **Marshalling/Unmarshalling:** Arguments are serialized into a byte stream (JSON, Protobuf, etc.) and deserialized on the receiver side.  
- **Transport Layer:** Typically TCP or HTTP/2; handles connection establishment, retransmission, flow control.  
- **Stub/Proxy Generation:** Code is auto‑generated from an IDL, providing a local API that hides network calls.  
- **Call Modes:** Blocking (synchronous) vs non‑blocking callbacks/promises; streaming RPCs for large data flows.  
- **Error Handling:** Network failures map to exceptions or status codes; retries and circuit breakers are common patterns.  
- **Security & Authentication:** TLS, mutual auth, tokens, or OAuth scopes protect the call.

**4️⃣ Edge Cases**  
- *Network partitions* → fallback strategies (caching, default values).  
- *Version mismatches* → backward compatibility via message evolution rules.  
- *Large payloads* → chunking or streaming to avoid memory blow‑up.  
- *Cross‑language clients* → careful type mapping in the IDL.

**5️⃣ Optimize & Communicate**  
Highlight performance knobs: connection pooling, compression, batching multiple RPCs, using HTTP/2 multiplexing. Stress that RPC abstracts complexity but introduces latency; measuring round‑trip times and throughput is essential. Conclude by summarizing: *RPC turns a remote call into a local‑looking function, handling serialization, transport, and error mapping under the hood.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
