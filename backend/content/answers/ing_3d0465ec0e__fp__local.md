---
qid: ing_3d0465ec0e__fp__local
question: 'Explain: This is traditionally not the case for — What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 445
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:56-05:00'
sources: []
---

**Remote Procedure Call (RPC)** is a communication pattern that lets a program invoke code on another address space—usually a different machine—as if it were a local function call.  
Why this design?  
1. **Abstraction of network latency**: The caller need not manage sockets or message framing; the runtime hides these details, turning a *distributed* operation into a *sequential* one.  
2. **Strong typing and contract**: By declaring procedures with explicit signatures, both sides agree on data structures before any call, avoiding ad‑hoc serialization bugs.  
3. **Synchronous semantics**: The caller blocks until the callee replies, which aligns with imperative programming models and keeps control flow simple.

Underlying principle: RPC is essentially a *function application* over a network that preserves the *reflexive property* of local calls—call = apply + wait for result. It leverages **information theory**: each invocation carries a well‑defined message payload; the receiver decodes it deterministically, guaranteeing *lossless* communication.

---

### gRPC – Google’s Modern RPC Framework
gRPC builds on these ideas but adds:

| Feature | Rationale |
|---------|-----------|
| **Protocol Buffers (proto)** | Compact binary encoding → lower bandwidth & faster parsing. |
| **HTTP/2 transport** | Multiplexed streams + server push → efficient use of a single TCP connection. |
| **Streaming APIs** | Continuous data flow (client, server, bidi) matches real‑time workloads. |
| **Pluggable interceptors** | Cross‑cutting concerns (auth, metrics) without altering business logic. |

Non‑obvious insight:  
*gRPC’s choice of HTTP/2 is not merely for performance; it enforces a clear separation between *transport framing* and *application semantics*. Because HTTP/2 already handles flow control and prioritization, gRPC can focus on **service definition** (proto) and let the underlying protocol handle congestion—an elegant split that makes scaling microservices trivial.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
