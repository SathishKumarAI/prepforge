---
qid: ing_6b629e0454__star__local
question: 'Explain: Where UDP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 280
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:09-05:00'
sources: []
---

**Situation:**  
At my last company we were building a real‑time multiplayer game that needed to stream position updates from the server to thousands of clients while keeping latency below 30 ms.

**Task:**  
I had to choose a transport protocol that would deliver the high update rate without overwhelming the network or causing packet loss to crash the experience.

**Action:**  
I compared TCP’s reliable, ordered delivery with UDP’s lightweight, connectionless nature. I implemented a custom reliability layer on top of UDP for critical packets (e.g., player spawn) and used plain UDP for frequent state updates. The game client dropped out‑of‑order packets instead of waiting, and the server throttled send rates to avoid congestion collapse. We also employed Nagle’s algorithm disabling on TCP paths and added a simple retransmission timer only when needed.

**Result:**  
Latency dropped from 60 ms (TCP) to under 20 ms with UDP, while packet loss stayed below 1%. The player churn rate fell by 15%, and server CPU usage decreased because we avoided the overhead of TCP’s congestion control. I learned that choosing the right transport depends on data semantics: when ordering is less critical than speed, UDP with a lightweight reliability shim wins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
