---
qid: ing_65a7c57987__star__local
question: 'Explain: http long polling or something i think — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 335
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:11-05:00'
sources: []
---

**Situation:**  
When I joined the real‑time delivery team at a fast‑growth food‑tech startup, we had to reduce the latency between a rider’s GPS ping and the dispatch system updating the rider’s status on the app. The existing polling approach sent HTTP requests every 10 seconds, causing a spike in server load and stale location data during peak hours.

**Task:**  
I was tasked with designing a lightweight, scalable solution that could deliver sub‑second updates to both riders and customers while keeping infrastructure costs under control.

**Action:**  
I proposed a hybrid system using **Geo‑Hashing** to partition the city into 1 km² tiles and store rider coordinates in Redis Sorted Sets keyed by their hash. For real‑time communication, I switched from long polling to **WebSockets**, opening a single persistent connection per device. The server pushes only when a rider crosses a tile boundary or a customer’s order status changes. To avoid flooding the client, I implemented delta compression and throttled updates to a maximum of 5 messages per second. We also added a fallback HTTP long‑poll endpoint for devices that couldn’t maintain a WebSocket.

**Result:**  
The change cut the number of server round‑trips by 70%, reduced memory usage by 35%, and lowered average update latency from 8 s to under 500 ms. The system handled a 3× increase in simultaneous riders without any additional cost, and I learned how careful data partitioning and protocol choice can dramatically improve scalability and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
