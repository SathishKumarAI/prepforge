---
qid: ing_2a7a006289__star__local
question: 'Explain: Data Transfer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:03-05:00'
sources: []
---

**Situation** – While building a real‑time image classification pipeline for an autonomous drone swarm, we had to stream raw sensor footage from each UAV to the edge server for inference. The video bandwidth was limited (≈10 Mbps) and latency critical (<30 ms).

**Task** – Design a data transport layer that maximized throughput while keeping packet loss below 0.5% so the neural net’s confidence scores remained stable.

**Action** – I prototyped two variants: a TCP stream wrapped in gRPC for reliability, and a UDP multicast with custom sequence numbers and selective retransmission. Using Wireshark I measured RTTs; TCP averaged 45 ms due to congestion control, while UDP stayed at ~12 ms. I added forward error correction (FEC) on the UDP path: every 10 packets, we sent 2 parity packets. This reduced observed loss from 4% to 0.3% with only a 5 % bandwidth overhead.

**Result** – Switching to UDP+FEC cut inference latency by 70 % and increased frame rate from 15 fps to 30 fps under the same network load. The system now delivers near‑real‑time predictions, and I learned that hybrid transport—leveraging UDP’s speed with application‑level reliability—is often superior for ML pipelines where occasional packet loss is tolerable but latency is unforgiving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
