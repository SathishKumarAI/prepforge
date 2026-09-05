---
qid: ing_ae35757be0__eli5__local
question: 'Explain: Improving Throughput — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 216
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:35-05:00'
sources: []
---

Imagine a kitchen where orders arrive at the restaurant.  
**Latency** is how long it takes for one dish to travel from the stove to your table—one order’s wait time.  
**Throughput** is how many dishes you can finish in an hour—the overall productivity of the kitchen.  
**Bandwidth** is the size of the kitchen’s conveyor belt: a wider belt lets more plates move at once, but doesn’t guarantee each plate gets ready quickly.

In machine‑learning systems, we often trade off latency for throughput. A fast model (low latency) can answer one question instantly, but if many users ask questions at once, the system may become a bottleneck. By batching inputs—letting several queries share the same computation—we increase throughput and better use GPU bandwidth, even though each individual query feels slower. Balancing these three factors lets you design systems that are both fast for single requests and efficient when serving many people simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
