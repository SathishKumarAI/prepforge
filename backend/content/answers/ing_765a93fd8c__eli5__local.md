---
qid: ing_765a93fd8c__eli5__local
question: 'Explain: kind of a real-time update and so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 241
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:43:55-05:00'
sources: []
---

Imagine a delivery driver as a moving dot on a giant map‑board. To keep the board fresh without repainting it entirely every second, we split the map into small squares—just like cutting a pizza into slices. Each square gets a short label (a *geo‑hash*). When a driver moves, only the slice that now contains him changes its label; everyone else sees nothing new.

Now think of the board’s audience as people watching a live news ticker. Instead of each viewer pulling the whole map every few minutes, they open a single “WebSocket” line—a continuous phone call—to the server. Whenever a driver’s square (geo‑hash) updates, the server pushes that tiny change instantly through the call to all interested viewers.

So DoorDash uses geo‑hashing to locate drivers quickly and WebSockets to stream those location changes in real time, keeping customers’ apps up to date without constant heavy traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
