---
qid: ing_d505596867__fp__local
question: 'Explain: Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 359
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:19-05:00'
sources: []
---

**Polling vs. WebSockets**

The core problem in real‑time web apps is *low‑latency bidirectional communication* with minimal overhead. Traditional HTTP polling solves “request → response” but forces the client to repeatedly ask the server for updates, incurring a round‑trip and bandwidth waste whenever no data changes.

A **WebSocket** is a protocol that upgrades an initial HTTP connection to a full duplex channel. The handshake is just one HTTP request; thereafter both sides exchange frames over a single TCP socket, eliminating the per‑request latency and header overhead. This satisfies the *information‑theoretic* requirement: only when new data arrives does either side send a frame, so bandwidth usage equals entropy of updates.

Why it must work this way:

1. **Persistence** – TCP guarantees ordered delivery; WebSocket frames are framed with minimal metadata (2–14 bytes), preserving throughput.
2. **Bidirectionality** – Both parties can push events immediately, matching the *online optimization* model where decisions depend on latest state.
3. **Scalability** – Servers keep a lightweight socket per client; no thread per request, so the system scales with linear memory rather than quadratic.

**Non‑obvious insight:** Many treat WebSockets as just “better polling.” In fact, they enable *event‑driven architectures* where the server can push complex state changes (e.g., collaborative editing) without any client‑side timers. This shifts computation from client to server, allowing richer protocols (like real‑time consensus or game physics) that would be infeasible with stateless HTTP callbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
