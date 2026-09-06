---
qid: ing_4d90b2ec83__fp__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 398
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:14-05:00'
sources: []
---

**Why HTTP‑style APIs insist on TCP rather than UDP**

The *fundamental problem* is delivering a request/response pair reliably and in order to the correct endpoint.  
In a client‑server interaction each packet that carries part of the payload must be acknowledged, retransmitted if lost, and reordered before the application can assemble the complete message.  

TCP solves this by embedding a **stateful finite state machine** on both sides:  
1. *Connection establishment* (SYN–ACK–SYN/ACK) guarantees that the two hosts are ready to exchange data.  
2. *Sequence numbers* and *acknowledgements* enforce in‑order delivery and detect loss.  
3. *Congestion control* (Additive Increase/Multiplicative Decrease, RTO estimation) adapts sending rate to network capacity, preventing packet storms that would otherwise corrupt a stateless stream.

UDP is merely a “drop‑or‑keep” transport: it has no per‑session state, no sequencing, and no congestion feedback. For HTTP the cost of retransmitting lost packets in application code would duplicate TCP’s reliable channel, but with far less efficiency and predictability.

**Non‑obvious insight:**  
The *congestion control* part of TCP is itself an **optimization problem**: it continually solves a constrained minimization of delay versus throughput by monitoring RTT and loss. A web API that naïvely sends every request as a separate UDP datagram would force the application to implement its own congestion avoidance, essentially reinventing a complex optimization algorithm with higher variance in latency. Thus TCP’s built‑in control loop is not just convenience—it is an optimal solution for the “guaranteed delivery under variable network conditions” problem that web services must solve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
