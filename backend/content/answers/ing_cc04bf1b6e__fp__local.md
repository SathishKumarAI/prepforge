---
qid: ing_cc04bf1b6e__fp__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — Grpc'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 476
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:07-05:00'
sources: []
---

**Why gRPC builds on HTTP 2, not HTTP 1.1**

At its core gRPC is a high‑performance Remote Procedure Call system that must support:

* **Low latency** – messages arrive quickly.
* **High throughput** – many calls per second.
* **Streaming** – bidirectional data streams of arbitrary length.

HTTP 1.1 was designed for simple request/response over text, not for these demands. Its single‑threaded, pipelined model suffers from *head‑of‑line blocking*: one slow response stalls all others on the same TCP connection. To keep throughput high, an application would open dozens of parallel connections—wasting sockets, memory, and risking TLS handshake overhead.

HTTP 2 solves this by **binary framing** and **multiplexed streams**. Each stream is independent; the protocol interleaves frames from many calls over one TCP link without blocking. Flow‑control headers let servers back‑pressure clients, keeping buffers bounded. Header compression (HPACK) reduces the cost of transmitting gRPC’s protobuf metadata.

The deeper principle here is *efficient utilization of a shared channel*. By treating each RPC as an independent stream and letting the transport schedule them optimally, HTTP 2 turns the network into a fine‑grained resource allocator—exactly what any scalable distributed system needs.

**Non‑obvious insight:**  
Although gRPC never uses **server push**, it still benefits from HTTP 2’s *stream dependencies*. The client can set priority levels on its streams; the server’s scheduler respects these, ensuring that critical calls are serviced first even when many long‑running streams coexist. This subtle feature gives gRPC a predictable latency profile that HTTP 1.1 cannot match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
