---
qid: ing_039a9ec74e__star__local
question: 'Explain: The Transport Layer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 335
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:42-05:00'
sources: []
---

**Situation**  
I was building an edge‑to‑cloud pipeline for real‑time anomaly detection on IoT sensor streams. The sensors sent high‑frequency telemetry (≈10 kB/s) to a central inference cluster, and the latency had to stay under 50 ms for safety alerts.

**Task**  
Choose a transport protocol that would guarantee timely delivery while handling occasional packet loss without over‑complicating the stack or adding extra latency.

**Action**  
I mapped out the data flow: each sensor published batches of JSON records via MQTT, which internally uses TCP. However, the heavy payloads caused head‑of‑line blocking on the broker and increased round‑trip time. I switched to a lightweight UDP‑based protocol (Datagram Transport Layer Security) for the bulk stream, adding sequence numbers and a small ACK window at the application layer. For critical control messages (e.g., model version updates), I retained TCP to ensure ordered delivery. I also implemented selective retransmission logic that only re‑sends missing packets when latency exceeded 30 ms.

**Result**  
Latency dropped from an average of 90 ms to 35 ms, and throughput increased by 40 %. The system still achieved 99.8% packet delivery reliability while keeping CPU overhead low on the edge devices. I learned that protocol choice must align with data semantics: high‑volume telemetry benefits from UDP’s low overhead, whereas control traffic demands TCP’s guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
