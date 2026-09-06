---
qid: ing_8329f34bf0__fp__local
question: 'Explain: Streaming — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 324
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:10-05:00'
sources: []
---

**Streaming over HTTP/HTTPS in system design**

At its core, streaming is the *online* delivery of data chunks as soon as they become available, rather than waiting for a complete payload. The fundamental problem it solves is **latency vs throughput trade‑off**: users want to see content immediately, but servers must still transmit large files efficiently.

HTTP/HTTPS gives us a stateless request–response protocol that can be *reused* for streaming by exploiting two primitives:

1. **Chunked transfer encoding (HTTP 1.1)** – the server sends an indefinite sequence of data blocks prefixed with their length, letting the client render progressively.
2. **Range requests (HTTP 2/3)** – clients request specific byte ranges; servers can push segments as they are encoded or cached.

Because HTTPS is already ubiquitous and firewall‑friendly, these primitives allow streaming to coexist with existing infrastructure without opening new ports or protocols. The design must therefore focus on *backpressure*: the client signals its consumption rate (via TCP flow control or explicit “pause” headers) so the server does not overwhelm the network or memory.

**Non‑obvious insight:**  
The *chunk boundary* itself can encode semantic information (e.g., video keyframes). By aligning chunk boundaries with codec GOPs, a client can skip ahead without buffering entire segments—this is why adaptive bitrate algorithms rely on HTTP range requests rather than pure chunked streams. This subtle coupling of protocol mechanics and media semantics is what makes modern streaming efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
