---
qid: ing_b0f6c8b216__eli5__local
question: 'Explain: Components of Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 217
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:40-05:00'
sources: []
---

Think of a factory line that packages toys.  
*Latency* is the time it takes for one toy to travel from the start of the line to the finished box—just like the delay between sending a request and getting an answer in a machine‑learning system.

*Throughput* is how many toys the line can finish per minute. In ML, it’s how many predictions you can make in a second. A high throughput means the system keeps busy even if each individual prediction takes some time.

*Bandwidth* is the width of the conveyor belt—how many parts can move on it at once without getting stuck. For data, bandwidth is the amount of information that can be transferred per second (e.g., network speed).

So latency = one toy’s travel time; throughput = toys finished per minute; bandwidth = how many parts can flow together. All three shape how fast and efficiently a machine‑learning system works.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
