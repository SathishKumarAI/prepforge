---
qid: ing_cc04bf1b6e__faang__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — Grpc'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 522
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:43-05:00'
sources: []
---

**Clarify**  
We’re asked why gRPC uses HTTP/2 instead of the older HTTP 1.1, and what that means for clients, servers, and performance.

**Approach**  
Explain: (1) key differences between HTTP 1.1 & 2; (2) how those map to gRPC’s requirements—multiplexed streams, binary framing, flow‑control, header compression; (3) practical benefits in latency, throughput, and resource usage.

**Depth**  

| Feature | HTTP/1.1 | HTTP/2 (gRPC) |
|---------|----------|---------------|
| **Connection model** | One request per connection → head‑of‑line blocking | Single persistent connection with *multiplexed* streams → no HOL block |
| **Transport** | Textual, line‑oriented frames | Binary framing over TCP, efficient parsing |
| **Header handling** | ASCII headers, no compression | HPACK header compression → smaller overhead for RPC calls |
| **Flow control & priority** | None | Per‑stream flow control + priority → better bandwidth utilisation |
| **TLS handshake** | Optional; often separate per request | Single TLS session reused across streams → lower latency |

gRPC’s binary protocol (Protocol Buffers) fits naturally with HTTP/2’s framing, enabling efficient serialization and deserialization without extra round‑trips. The multiplexing lets a client issue dozens of RPCs over one socket, drastically reducing connection churn and improving throughput on high‑latency links.

**Edge cases**  
- Legacy proxies that only support HTTP 1.1 can break the stream multiplexing; gRPC falls back to HTTP/1.1 in such environments but loses performance benefits.  
- Early TLS implementations may not handle HTTP/2’s ALPN negotiation, causing handshake failures.  
- Very low‑traffic workloads may see negligible difference; however, high‑concurrency scenarios expose the full advantage.

**Optimize & communicate**  
Highlight that gRPC’s choice of HTTP/2 is a *design decision* aligning protocol features with microservice needs: minimal latency, high concurrency, and efficient resource usage. Communicate this by mapping each HTTP/2 feature to a concrete performance metric (e.g., reduced round‑trips → lower JIT latency). Conclude that without HTTP/2, gRPC would lose multiplexing, header compression, and flow control—key enablers for scalable distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
