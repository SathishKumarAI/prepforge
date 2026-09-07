---
qid: ing_ae079e45f7__aws__local
question: 'Explain: Choose TCP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:05-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign the telemetry ingestion layer for a global IoT fleet (15 M devices). The spec demanded low latency, high throughput, and guaranteed delivery of control‑plane messages while keeping operational costs under $200k/month.

**Action**  
I evaluated **TCP vs UDP**. For *control traffic* (configuration pushes, acknowledgments) I chose TCP because it guarantees in‑order, reliable delivery—critical for state consistency across devices. I implemented a lightweight **AWS IoT Core MQTT broker** over TLS‑encrypted TCP, leveraging its auto‑scaling and built‑in QoS 1/2 to ensure at least once delivery without manual retry logic.

For *sensor telemetry* (high‑frequency, tolerant of occasional loss) I opted for UDP wrapped in **Datagram Transport Layer Security (DTLS)**. This reduced connection overhead by ~70 % compared to TCP, enabling us to push 10× more data into a single EC2 Auto Scaling group without hitting the network interface limit. We paired this with **Amazon Kinesis Data Streams** for downstream analytics; the stream’s built‑in replay and retention mitigated occasional packet drops.

**Result**  
Latency dropped from 250 ms (TCP‑only) to 90 ms on average, throughput increased by 12×, and cost fell to $150k/month. We achieved a 99.9% success rate for control commands with zero data loss in telemetry over the first six months.

**Reflection / Learning**  
I learned that *ownership* means rigorously validating assumptions—here, measuring packet loss under load—and *dive deep* into protocol trade‑offs to surface hidden costs. This approach earned me a “Bar‑Raiser” endorsement during my interview for the Machine Learning Systems Engineer role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
