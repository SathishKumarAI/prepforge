---
qid: ing_838282c388__eli5__local
question: 'Explain: CAP and Latency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 225
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:20-05:00'
sources: []
---

Imagine a bakery that must decide how to serve its customers: **Consistency** (every order shows the same fresh price), **Availability** (the kitchen is always open for orders), and **Partition tolerance** (the bakery keeps working even if part of its network goes down). The CAP theorem says you can pick at most two of these three, because making all three true at once is impossible.

In a machine‑learning service, “latency” is the time it takes to get a prediction back. If you insist on **consistency** (every node has the exact same model snapshot) and **availability** (the system never stops answering), then when a network split happens you must drop either up-to-date answers or keep serving with stale models, which can increase latency. Balancing CAP choices lets designers control how quickly predictions arrive versus how fresh they are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
