---
qid: ing_36ee0dc41d__eli5__local
question: 'Explain: Bandwidth-Delay Product — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 245
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:47-05:00'
sources: []
---

Think of a highway that carries cars (data packets) from one city to another.  
* **Latency** is the time it takes for a single car to reach its destination – how long you have to wait before the first packet arrives.  
* **Bandwidth** is the width of the highway – how many cars can drive side‑by‑side at once, i.e., the maximum data rate (bits per second).  
* The **Bandwidth‑Delay Product (BDP)** is like the length of a stretch of freeway that stays fully occupied while one car travels. It equals bandwidth × round‑trip delay. If the BDP is large, you need many cars on the road at once to keep it full; if it's small, only a few cars are enough.

In networking, latency tells you when you’ll first get data, bandwidth tells how fast you can push more data, and the BDP shows how much “in‑flight” data you should keep to fully use that bandwidth. Understanding all three lets engineers design systems that avoid bottlenecks and make traffic flow smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
