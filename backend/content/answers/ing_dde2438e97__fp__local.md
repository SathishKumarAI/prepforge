---
qid: ing_dde2438e97__fp__local
question: 'Explain: TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 476
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:27-05:00'
sources: []
---

**TCP vs UDP in system design**

At its core a network protocol must decide *how* to transport bits from sender to receiver.  
The two dominant choices are **TCP** (connection‑oriented) and **UDP** (stateless).  

1. **Reliability & ordering** – TCP guarantees that every byte arrives, in order, without duplication. It does this by assigning sequence numbers, acknowledging receipt, and retransmitting lost segments. UDP offers no such guarantee; the application must decide whether to tolerate loss or add its own ACKs.

2. **Flow‑control & congestion‑control** – TCP’s sliding window adapts transmission rate to receiver buffer size and network capacity (the *slow start*–*congestion avoidance* algorithm). UDP leaves bandwidth management entirely to the sender, which is useful when latency dominates over throughput (e.g., real‑time audio).

3. **Overhead & latency** – The three‑way handshake and per‑segment ACKs add 40 bytes of header and at least one round‑trip before data can be sent. UDP’s 8‑byte header eliminates that cost, making it the default for low‑latency protocols.

4. **Use‑case principle** – Treat *TCP* as an *implicit “error‑correcting code”* over the network; treat *UDP* as a *raw channel* that lets you design your own error‑correction (e.g., forward‑error correction, selective retransmission).  

**Non‑obvious insight:**  
Many modern services use **UDP for the “control plane”** of their protocols (e.g., QUIC’s early packets over UDP) because they can implement *probabilistic* congestion control that adapts faster than TCP’s conservative slow start. This hybrid approach gives you the low latency of UDP while still enjoying a tunable reliability layer, something many designers miss when choosing “TCP or UDP” at a single decision point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
