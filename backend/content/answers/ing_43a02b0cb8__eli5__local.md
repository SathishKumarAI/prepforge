---
qid: ing_43a02b0cb8__eli5__local
question: 'Explain: The Highway Analogy — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 260
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:45-05:00'
sources: []
---

Imagine a busy highway that carries cars (data) from one city to another.

* **Latency** is the time it takes for a single car to travel from its starting point to the destination. If the road is smooth and straight, a car reaches quickly; if there are stops or traffic lights, latency grows.

* **Throughput** is how many cars can finish their trip per minute. Even with a long lane (high bandwidth), if each car needs a long stretch of free road before it can leave, throughput will stay low because cars keep waiting—this is like a bottleneck that limits the flow rate.

* **Bandwidth** is the width of the highway: how many lanes it has and how wide they are. More lanes let more cars travel side‑by‑side, increasing the maximum possible throughput, but only if there’s no other obstruction (latency) stopping them from moving forward.

So, a narrow road with a long stretch before you can start gives high latency; a road that lets many cars move together gives high bandwidth; and the actual number of cars arriving per minute is the throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
