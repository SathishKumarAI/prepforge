---
qid: ing_690a093418__star__local
question: 'Explain: AI Systems — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 313
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:25-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a real‑time recommendation engine that streamed user interaction data from edge devices to our central ML cluster. The latency budget was under 50 ms, but the network was unreliable because many users were on cellular connections.

**Task:**  
I had to design the transport layer so the system could keep low latency while ensuring critical events (like purchase clicks) reached the model in order and without loss.

**Action:**  
First I benchmarked TCP and UDP under simulated 3G/4G jitter. With pure UDP we saw <30 ms round‑trip but a 12% packet drop rate for high‑priority events. Switching to TCP fixed ordering but increased latency to ~70 ms due to retransmissions. To combine the best of both, I implemented a hybrid protocol: critical messages were sent over TCP with lightweight ACKs, while bulk telemetry went over UDP with forward error correction (FEC). On the receiver side, a small state machine reassembled out‑of‑order packets and dropped stale data after a timeout.

**Result:**  
Latency dropped to 45 ms on average, packet loss for key events fell below 0.5%, and model throughput rose by 30%. I learned that transport choice must be driven by event criticality and network conditions rather than a one‑size‑fits‑all solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
