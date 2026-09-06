---
qid: ing_d3bc8e038f__fp__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — gRPC vs. REST: Key Similarities
  and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 444
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:24-05:00'
sources: []
---

**Why HTTP 2 for gRPC?**  
At its core, a client‑server system must transport messages reliably and efficiently. HTTP 1.1 was built for human‑readable requests: one request per TCP connection, limited pipelining, and large header overhead. In contrast, modern ML workloads demand *high‑throughput, low‑latency* streams of binary data (e.g., tensor shards).  
HTTP 2 solves this by introducing **multiplexed streams** on a single connection, **header compression**, and optional **server push**—all crucial for streaming RPCs. gRPC leverages these features to deliver concise protobuf payloads over a single persistent channel, avoiding the per‑request handshake overhead of REST.

| Feature | gRPC (HTTP 2) | REST (HTTP 1.1) |
|---------|---------------|-----------------|
| **Transport** | Binary frames, multiplexed streams | Textual requests/responses, one request per connection |
| **Serialization** | Protobuf (compact, schema‑based) | JSON/XML (verbose, loosely typed) |
| **Streaming** | Bi‑directional streaming natively supported | Requires workarounds (chunked transfer, websockets) |
| **Performance** | Lower latency, higher throughput due to header compression & multiplexing | Higher overhead from repeated handshakes and textual parsing |
| **Tooling** | Code generation from .proto → typed stubs | Ad‑hoc HTTP clients; less compile‑time safety |

**Non‑obvious insight:**  
Because gRPC keeps a *single* long‑lived connection, it can perform *connection‑level flow control*. This allows the server to back‑pressure the client by limiting in‑flight messages—something REST cannot do without custom TCP tuning. Thus, gRPC isn’t just “faster” but also **more robust** under bursty ML workloads where the producer may temporarily overwhelm the consumer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
