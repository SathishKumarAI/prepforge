---
qid: ing_8ede79bd15__fp__local
question: 'Explain: Round Trip Time (RTT) — Top 9 Website Performance Metrics You
  Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 482
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:09:01-05:00'
sources: []
---

**Round‑Trip Time (RTT)**  
*Why it matters: the physics of a request‑response cycle*

When a browser asks a server for a resource, the HTTP packet travels through routers, switches, and possibly long‑haul links before reaching the destination. The **RTT** is the time from when the first byte leaves the client to when the first byte of the reply arrives back. It is essentially the *round‑trip latency* of the underlying transport (TCP or QUIC).

Why RTT must be small:

| Principle | Derivation |
|-----------|------------|
| **Bottleneck in pipelining** | A browser can open at most N concurrent TCP connections per domain. Each connection’s throughput ≈ bandwidth / (1 + 2·RTT/BW). When RTT dominates, the “pipeline” stalls and the page must wait for each request to finish before new ones can be issued. |
| **TCP slow‑start** | The congestion window starts at one segment and grows exponentially until a loss occurs. If RTT is high, the window takes many round‑trips to reach its optimal size, delaying data delivery. |
| **User perception** | Studies show that perceived load time correlates strongly with the *maximum* RTT among critical resources; a single slow link can drag down the whole page. |

**Non‑obvious insight:**  
Most developers treat RTT as a static network property, but it is highly dynamic even within a single session. As a browser fetches more resources, the TCP congestion window grows and *reduces* the effective RTT (because more data is sent per round‑trip). Thus, an early high RTT can be mitigated by **pre‑fetching** or **HTTP/2 multiplexing**, which amortize latency across many streams. Ignoring this dynamic behavior leads to pessimistic performance estimates and over‑optimization of unrelated metrics.

In short, RTT is the *first‑principles* limiter of how fast a page can progress; it ties together network physics, transport control theory, and human perception.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
