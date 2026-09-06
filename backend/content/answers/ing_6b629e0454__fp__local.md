---
qid: ing_6b629e0454__fp__local
question: 'Explain: Where UDP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 416
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:52:57-05:00'
sources: []
---

**From the problem of “stateful communication” to the choice of transport**

A distributed system must *expose* an interface that allows a client to request data from a server and receive a reply.  
At the lowest level this is a sequence of bytes sent over a link. The fundamental design choice is whether the sender cares about **reliability, ordering, and flow control**.

* **TCP** implements a *stateful, error‑correcting channel*.  
  - It establishes a connection (three‑way handshake) → creates a shared state space.  
  - Each byte carries sequence numbers; lost packets trigger retransmission.  
  - The sender’s window size controls the rate of injection.  

* **UDP** implements a *stateless, best‑effort packet*.  
  - No handshake: each datagram is independent and addressed only once.  
  - No sequencing or acknowledgment → lower overhead, lower latency.  

The deeper principle is **information‑theoretic efficiency vs. robustness**.  
TCP sacrifices bandwidth (≈ 40–50 % of raw link capacity) to guarantee that *every* bit arrives exactly once; UDP preserves bandwidth for *time‑sensitive* data where the application can tolerate or recover from loss.

### Non‑obvious insight
Because UDP carries no sequence number, an application can **embed its own ordering metadata** in the payload and thus trade off *exactly which packets are critical* against *which are optional*. For example, a live video stream may drop entire frames (high‑cost) but keep audio intact. TCP would never allow that selective loss without tearing the whole connection.

In short: **Use UDP when you value low latency and can tolerate or recover from occasional packet loss; use TCP when correctness of every byte is paramount.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
