---
qid: ing_92d55c542a__faang__local
question: 'Explain: :rocket: gRPC is faster than REST API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:58-05:00'
sources: []
---

**Clarify**  
You’re asking why a gRPC‑based service would outperform an equivalent RESTful endpoint, assuming both expose the same business logic and run on comparable hardware. We’ll assume: (1) payloads are non‑trivial, (2) latency matters more than bandwidth, and (3) clients can use protobuf.

**Approach**  
1. Compare transport layers.  
2. Quantify serialization costs.  
3. Examine HTTP/2 vs HTTP/1.1 overhead.  
4. Highlight bi‑directional streaming benefits.

**Depth**  

| Aspect | gRPC | REST |
|--------|------|------|
| **Transport** | HTTP/2 with multiplexed streams, binary framing | HTTP/1.1 or 2 but usually text‑based JSON |
| **Serialization** | Protocol Buffers (binary, schema‑driven) | JSON (text, reflection overhead) |
| **Connection reuse** | Persistent single TCP/TLS session; no per‑request handshake | Each request may open a new connection or use keep‑alive |
| **Payload size** | Compact binary → fewer bytes over wire, less CPU to encode/decode | Verbose JSON → larger payloads and parsing cost |
| **Streaming** | Built‑in bi‑directional streams (e.g., server push) | Requires multiple round trips or websockets |

The net effect: lower latency (~2–5× faster for small messages), higher throughput, and reduced CPU usage on both sides. gRPC also enforces strong typing via `.proto`, preventing accidental schema drift.

**Edge Cases**  
- If the client can’t compile protobuf stubs (e.g., browser JS) or requires human‑readable logs, REST may be preferable.  
- For very small payloads, the TCP/TLS handshake cost dominates; HTTP/2 keep‑alive mitigates this but not entirely.  
- Security: gRPC’s TLS support is robust, but legacy systems might only expose HTTPS.

**Optimize & Communicate**  
To demonstrate impact, benchmark with `wrk` or `hey` on both implementations, measuring round‑trip time and CPU load. If latency spikes, enable HTTP/2 multiplexing or compress protobuf payloads. Explain that the speed advantage comes from *binary framing + connection reuse*, not just protocol choice. This narrative shows you understand both networking fundamentals and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
