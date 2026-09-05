---
qid: ing_c2d7d213d9__eli5__local
question: 'Explain: Measuring Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 190
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:44:50-05:00'
sources: []
---

Think of your machine‑learning model as a busy coffee shop.  
**Latency** is the time from when you order a cup to when it’s handed to you—how long a single request waits.  
**Throughput** is how many cups the barista can finish in an hour; it tells you the overall speed of the system.  
**Bandwidth** (in networking terms) is the width of the road that carries all those orders; if the road is narrow, traffic slows even though each cup might still be quick once it reaches the shop.

In a data center, latency is measured in milliseconds for one inference call, throughput counts calls per second, and bandwidth is the total data rate (bytes/s) the network can handle. Balancing them ensures your model runs fast, handles many users, and keeps data moving smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
