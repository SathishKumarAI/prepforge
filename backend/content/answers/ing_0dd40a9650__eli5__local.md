---
qid: ing_0dd40a9650__eli5__local
question: 'Explain: Bandwidth — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 234
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:17-05:00'
sources: []
---

Imagine your brain’s memory as a kitchen where you’re cooking a big meal (data).  

* **Latency** is the time it takes to get the first ingredient from the fridge—how long before the first byte of data appears at its destination.  
* **Throughput** is how many ingredients you can pull out per minute—how much data can flow once the process starts, measured in bits per second.  
* **Bandwidth** is the size of the kitchen doorway: the maximum amount that could ever pass through at one time, but not necessarily what actually passes.  

In a computer system, low latency means quick start‑up for any request; high throughput means you can move many packets quickly once started; bandwidth sets an upper limit on how much data could be in transit, like the width of the pipe. All three matter: if the doorway is wide (high bandwidth) but you have to wait a long time to open it (high latency), or you open it slowly (low throughput), your overall performance suffers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
