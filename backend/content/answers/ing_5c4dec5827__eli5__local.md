---
qid: ing_5c4dec5827__eli5__local
question: 'Explain: Summary — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 261
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:22-05:00'
sources: []
---

Imagine your favorite grocery store. When only a few customers walk in, one cashier can handle everyone quickly. But as the crowd grows—more shoppers, more carts—you need extra cashiers and larger aisles so people don’t wait forever. That’s **scalability** for a machine‑learning system.

In ML, the “customers” are data points or requests to make predictions. A single computer (the lone cashier) can serve a handful of users, but as you add more users, data volume, or model size, that one machine becomes a bottleneck: it slows down or runs out of memory. To scale, we add more machines (more cashiers), split the workload across them (each handles part of the data), and design the system so they can communicate efficiently.

Key terms:
- **Load** – how many prediction requests or training samples you have.
- **Throughput** – predictions made per second; higher throughput means better scalability.
- **Horizontal scaling** – adding more machines rather than upgrading one.

By treating your ML pipeline like a busy store and expanding staff (hardware) as traffic increases, you keep the system responsive and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
