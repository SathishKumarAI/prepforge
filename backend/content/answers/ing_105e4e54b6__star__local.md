---
qid: ing_105e4e54b6__star__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 346
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:57-05:00'
sources: []
---

**Situation**  
During a sprint for a real‑time IoT dashboard at my last company, we had to ingest sensor data from hundreds of devices over a congested campus network. The existing pipeline used HTTP/TCP and was choking on latency spikes during peak hours.

**Task**  
I needed to design a lightweight ingestion layer that guaranteed low round‑trip time while tolerating occasional packet loss—essentially proving UDP could be the right choice for our use case.

**Action**  
I built a small C++ daemon that listened on a UDP socket, implemented a simple sequence‑number header, and used a sliding window to detect missing packets. On the client side, I wrapped the sensor firmware in a Go routine that sent JSON blobs every 50 ms with minimal overhead. To mitigate reliability, I added an optional ACK/NAK mechanism for critical updates, but left most traffic fire‑and‑forget. The daemon logged retransmission rates and dropped frames to a Prometheus metric so we could monitor quality of service.

**Result**  
Latency dropped from ~120 ms (TCP) to under 20 ms on average, with a packet loss rate of <1% during peak load. We processed 30 % more data points per second, and the dashboard refreshed in real time. The exercise taught me how UDP’s “best‑effort” model can be harnessed when you add lightweight application‑level guarantees, turning what seems like a fragile protocol into a robust backbone for latency‑critical systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
