---
qid: ing_bf2d4b8e6a__star__local
question: 'Explain: TCP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:05-05:00'
sources: []
---

**Situation**  
At my previous company I was tasked with redesigning the telemetry pipeline for a fleet of autonomous delivery drones. The existing HTTP/REST over TCP layer caused unacceptable latency, and we had to push real‑time sensor data (LiDAR, GPS) to our analytics cluster within 50 ms.

**Task**  
I needed to replace the heavy, connection‑oriented protocol with something that guaranteed low jitter and minimal packet loss while still allowing us to recover from occasional drops.

**Action**  
I evaluated UDP for its zero‑overhead transport but realized we required reliability. I implemented a custom “UDP‑with‑ack” layer: each telemetry packet included a sequence number; the receiver sent lightweight ACKs back, and the sender retransmitted only out‑of‑order or missing packets. I used ZeroMQ over UDP for message framing, added a small checksum, and tuned socket buffers to 64 KB per stream. To handle bursty traffic, I introduced rate‑limiting via token buckets and monitored RTT with a simple moving average.

**Result**  
The new pipeline cut end‑to‑end latency from 350 ms to 45 ms (average) while maintaining 99.8% packet delivery. Throughput increased by 3×, freeing up CPU cycles for onboard AI inference. I learned that protocol choice is less about “TCP vs UDP” and more about tailoring reliability mechanisms to the application’s tolerance for loss versus latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
