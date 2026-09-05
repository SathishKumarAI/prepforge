---
qid: ing_44ec9059a9__eli5__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 231
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:25:51-05:00'
sources: []
---

Think of a supermarket checkout line as your machine‑learning system.  
- **Latency** is the time a single customer spends from walking into the register to getting their receipt – how long one request takes.  
- **Throughput** is how many customers you can serve per hour – how many requests you finish overall.  
- **Bandwidth** is the size of the checkout lane: a wider lane lets more customers in at once, but only if you have enough cashiers (processing units) to handle them.

The bottleneck that limits throughput is like the slowest cashier. Even if your lanes are wide (high bandwidth) and you can process many items quickly (low latency), if one cashier takes forever to scan a bag of groceries, the line backs up and overall customers per hour drop. In ML, the component with the longest processing time—whether it's data loading, model inference, or network transfer—becomes the throughput limiter. Adjusting that part (e.g., faster I/O, better parallelism) is what boosts your system’s overall rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
