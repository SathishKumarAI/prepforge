---
qid: ing_25c0d63bf2__fp__local
question: 'Explain: TCP vs UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 379
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:23-05:00'
sources: []
---

**TCP vs UDP – a principled comparison**

At its core, a transport protocol must decide *how* to carry byte streams between two endpoints over an unreliable network.  
Two extremes arise:

| Feature | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---------|-------------------------------------|------------------------------|
| **Guarantees** | Ordered, loss‑free delivery; retransmission & congestion control | No ordering, no reliability, no flow control |
| **Overhead** | 20‑byte header + handshake + ACKs | 8‑byte header, no handshakes |
| **Latency** | Higher due to handshaking and retransmissions | Lower – packets sent “fire‑and‑forget” |

From an *optimization* standpoint, TCP solves the problem of maximizing throughput subject to network constraints: it adapts its sending window based on ACK feedback (congestion avoidance), ensuring that data flows efficiently without overloading routers. UDP abandons this control loop; it assumes application‑level guarantees or tolerates loss.

**Non‑obvious insight:**  
Because UDP carries no sequence numbers, a single packet can be dropped **without affecting the entire stream**. This makes it ideal for *stateless* services (e.g., DNS, NTP) where one lost query is simply retried by the client. In contrast, TCP’s stateful handshake and cumulative ACKs make even a single missing packet stall all subsequent data until retransmitted, which can be disastrous for real‑time media or high‑frequency trading.

In system design, pick **TCP** when *correctness* outweighs latency; choose **UDP** when the application can tolerate loss but demands minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
