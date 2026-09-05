---
qid: ing_febf9b8f0f__star__local
question: 'Explain: UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:15-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a real‑time multiplayer gaming platform that needed to stream position updates from thousands of players to a central server with sub‑10 ms latency.

**Task:**  
I had to decide whether to use TCP or UDP for the transport layer so the game could deliver rapid state changes while keeping packet loss tolerable and maintaining a clean codebase.

**Action:**  
I first profiled our network stack. With TCP, each packet incurred three‑way handshakes and retransmission timers, causing jitter spikes during peak load. I ran a controlled test: sending 10 kB updates over both protocols at 500 pps on a simulated LAN. UDP dropped only ~0.4% of packets but maintained consistent latency; TCP dropped <0.1% yet had a 12 ms variance due to retransmits.  
I implemented a lightweight reliability layer on top of UDP: sequence numbers, selective ACKs for critical updates, and exponential back‑off for reconnection. I also added congestion control by monitoring round‑trip times and throttling send rates during high contention.

**Result:**  
Latency dropped from 25 ms to 8 ms average, jitter fell below 2 ms, and overall throughput increased by ~30%. The system scaled to 50k concurrent players without packet loss exceeding 1%. I learned that choosing UDP with a custom reliability layer can outperform TCP in latency‑sensitive real‑time systems when you control the application‑level guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
