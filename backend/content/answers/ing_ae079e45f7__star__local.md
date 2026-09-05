---
qid: ing_ae079e45f7__star__local
question: 'Explain: Choose TCP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 297
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:11-05:00'
sources: []
---

**Situation:**  
In a real‑time fleet‑tracking system I was tasked with delivering vehicle telemetry to the central dashboard every 100 ms. The data stream consisted of GPS coordinates, speed, and engine diagnostics that must be displayed without gaps for safety monitoring.

**Task:**  
I had to decide whether to use TCP or UDP so that the front‑end always received a consistent, ordered stream while keeping latency below 50 ms under peak load (≈30 k packets/sec).

**Action:**  
I profiled both protocols with a custom benchmark. UDP offered lower overhead but introduced packet loss spikes of up to 8% when network congestion hit. I then implemented TCP with selective acknowledgments and tuned the window size (10 KB) to match the 100 ms burst pattern, adding an application‑level heartbeat to detect stalls quickly. To mitigate retransmission delays, I used a lightweight Nagle’s algorithm disabling and added a small jitter buffer on the client.

**Result:**  
Latency dropped from 70 ms (UDP with loss handling) to 35 ms (TCP), while data integrity improved—zero missing packets in production over 48 h. The system now reliably feeds operators, and I learned that for safety‑critical telemetry, controlled congestion control outweighs UDP’s raw speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
