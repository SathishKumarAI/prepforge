---
qid: ing_caecbf010f__star__local
question: 'Explain: Connection Close — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:54-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our real‑time analytics pipeline at a media company where we had to switch from a legacy TCP‑based ingestion service to a lightweight UDP stream to cut latency. The old system used a graceful shutdown: close sockets, flush buffers, send FIN packets and wait for ACKs.

**Task**  
My goal was to maintain data integrity while eliminating the 100 ms per‑connection teardown overhead that throttled our peak throughput of 2 M events/s.

**Action**  
I introduced a “logical connection” model: each UDP packet carried a session ID and a checksum. On shutdown, the client sent a single *session close* message (a tiny control packet) and the server marked the session as closed but kept the socket alive for an additional 30 s to accept any in‑flight packets. I also added a small ACK layer on top of UDP using sequence numbers so lost packets could be retransmitted only when necessary. In the infrastructure, we switched from epoll on each socket to a shared datagram socket pool and used Redis Pub/Sub to broadcast close signals.

**Result**  
The pipeline throughput jumped from 2 M to 3.8 M events/s (a 90 % increase) while keeping packet loss below 0.02 %. We reduced the average shutdown latency from 120 ms to 12 ms, and the system became more resilient to network jitter. I learned that in UDP‑based designs you must implement your own connection semantics—state tracking, graceful close signals, and lightweight reliability—to match TCP’s guarantees without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
