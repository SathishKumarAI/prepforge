---
qid: ing_25c0d63bf2__star__local
question: 'Explain: TCP vs UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 342
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:20-05:00'
sources: []
---

**Situation** – While deploying a real‑time fraud detection microservice on our payment gateway, we noticed the end‑to‑end latency spiked to 120 ms during peak hours. The service was pulling model scores from a remote inference cluster over HTTP (TCP) and the network stack became a bottleneck.

**Task** – Reduce round‑trip time to under 50 ms without compromising reliability, so that transaction approvals could happen in real time.

**Action** – I redesigned the data plane to use gRPC over UDP with QUIC. First, I profiled packet loss on our internal LAN; it was <0.1 %, so we could tolerate a few dropped packets. I switched the inference client to send prediction requests as small UDP datagrams, added lightweight sequence numbers and retransmission logic for critical packets, and leveraged QUIC’s built‑in congestion control. On the server side, I modified the model loader to respond with compressed protobufs over UDP, ensuring idempotent handling of duplicates.

**Result** – Latency dropped from 120 ms to 35 ms on average, while throughput increased by 40 %. We maintained 99.9 % success rate and learned that for low‑loss internal networks, UDP + application‑level reliability can beat TCP’s handshake overhead in latency‑critical ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
