---
qid: ing_039a9ec74e__fp__local
question: 'Explain: The Transport Layer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 400
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:00-05:00'
sources: []
---

**Transport Layer: Why TCP or UDP?**

The core problem the transport layer solves is *end‑to‑end communication* over a lossy, variable‑delay network.  
It must decide whether to guarantee that every byte sent arrives in order and without duplication (reliable) or to let packets drop if they are lost (unreliable).  

**TCP** imposes a stateful connection: a three‑way handshake establishes a session; sequence numbers, ACKs, retransmissions, flow control (window size), and congestion control (slow start, AIMD) all cooperate to make the *expected* data stream identical on sender and receiver. This works because many distributed systems can tolerate the latency of waiting for lost packets; reliability is worth the cost.

**UDP** drops those guarantees. It sends datagrams with no handshake or state. The only “protocol” it enforces is that a packet either arrives intact or not at all. This yields lower overhead, negligible per‑packet latency, and no congestion control—ideal when the application can tolerate loss (e.g., VoIP, live video) or implements its own selective retransmission.

**Non‑obvious insight:**  
In microservices, *application‑level protocols* often duplicate TCP’s reliability (using message IDs, retries, and idempotence). This lets services run over UDP for lower latency while still achieving consistency. The transport choice therefore reflects the *granularity of failure handling*: TCP offloads it to the OS; a custom UDP protocol pushes it up to the application layer, trading simplicity for flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
