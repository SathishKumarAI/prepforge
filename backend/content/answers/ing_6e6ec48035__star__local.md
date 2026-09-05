---
qid: ing_6e6ec48035__star__local
question: 'Explain: Where TCP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:20-05:00'
sources: []
---

**Situation:**  
While leading a team that built a live monitoring dashboard for a fleet of delivery drones, we had to stream sensor data (altitude, velocity, battery level) from each drone to our backend in real time while keeping the UI responsive.

**Task:**  
I needed to decide on the transport protocol and design the ingestion pipeline so that every packet arrived reliably without overwhelming the network or causing latency spikes.

**Action:**  
I evaluated TCP and UDP. Because the data is small, frequent, and order‑sensitive (a missing altitude update could mislead the UI), I chose TCP for the control channel to guarantee in‑order delivery. For bulk telemetry bursts, we switched to UDP with a custom acknowledgment layer: each drone sent a 64‑byte packet over UDP, and our edge server used selective retransmission only when a checksum mismatch was detected. We wrapped this logic in a Go microservice that multiplexed sockets, logged packet loss (<0.2 %), and throttled sending to respect the drones’ 1 Mbps uplink.

**Result:**  
The dashboard latency dropped from 350 ms (UDP naïve) to 180 ms with our hybrid approach, while packet loss remained under 0.1 %. I learned that TCP’s built‑in reliability is essential for control signals, but a lightweight UDP layer can handle high‑volume telemetry if you add minimal error handling—balancing speed and consistency in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
