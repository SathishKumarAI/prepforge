---
qid: ing_bb59b1cc9c__star__local
question: 'Explain: Timeouts and Retries — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 385
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:56-05:00'
sources: []
---

**Situation**  
When I was leading the redesign of our real‑time analytics pipeline, we had two data streams: a high‑volume sensor feed (UDP) and a critical status update channel (TCP). The UDP stream dropped packets during network congestion, while the TCP channel suffered from occasional half‑open connections that lingered for minutes.

**Task**  
I needed to ensure the analytics system could recover quickly from transient failures without compromising data integrity or latency. Specifically, I had to implement an adaptive timeout and retry strategy that worked differently for each protocol yet kept overall processing within a 200 ms window.

**Action**  
For UDP, I added a lightweight “ack‑nowledgment” layer: every packet carried a sequence number, and the receiver sent back a compact ACK. If no ACK arrived after 30 ms, the sender retried up to three times before dropping the packet. For TCP, I tuned the socket’s `SO_KEEPALIVE` interval to 10 s and implemented an exponential backoff on connection attempts (starting at 100 ms, doubling each retry). I also introduced a circuit‑breaker that paused retries when the failure rate exceeded 5% for more than two consecutive windows. Both strategies were wrapped in a unified metrics dashboard.

**Result**  
Packet loss on the UDP stream fell from 12% to 2%, and TCP connection stalls dropped from 45 s to under 3 s on average. Overall end‑to‑end latency improved by 35 %. I learned that protocol semantics dictate timeout design: UDP demands explicit acknowledgments, while TCP relies on built‑in reliability but benefits from smart retry backoffs and circuit breaking to avoid cascading delays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
