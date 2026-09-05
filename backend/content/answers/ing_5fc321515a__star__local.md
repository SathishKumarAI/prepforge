---
qid: ing_5fc321515a__star__local
question: 'Explain: Choose UDP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 304
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:00-05:00'
sources: []
---

**Situation:**  
While designing a real‑time multiplayer game backend, we had to stream positional updates from thousands of clients to a central match server and back with sub‑10 ms latency. The initial prototype used TCP sockets; the latency jitter was unacceptable for smooth gameplay.

**Task:**  
I needed to redesign the communication layer so that position packets arrived quickly and reliably enough for the game loop, while still handling occasional packet loss gracefully.

**Action:**  
I switched from a pure TCP stream to UDP datagrams. First, I implemented a lightweight reliability layer: each update carried a sequence number; the server acknowledged only every Nth packet, allowing clients to drop lost packets without blocking. I also added client‑side prediction and lag compensation, so missing updates didn’t cause visible stutter. On the network side, I used multicast groups for broadcasting state to many players, reducing per‑client bandwidth. Finally, I introduced a congestion control heuristic that throttled packet bursts during high traffic periods.

**Result:**  
Latency dropped from an average of 35 ms (TCP) to under 8 ms with UDP, and jitter fell below 2 ms. The game’s user retention increased by 18% over the next quarter. I learned that choosing UDP is essential when low latency outweighs strict reliability, provided you build a minimal acknowledgment scheme and client‑side buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
