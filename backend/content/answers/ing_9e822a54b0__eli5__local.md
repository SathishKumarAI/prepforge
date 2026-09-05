---
qid: ing_9e822a54b0__eli5__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 216
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:48:42-05:00'
sources: []
---

Think of an online shop’s checkout system like a busy coffee shop that never runs out of cups or milk.  
In **active‑active** design, you have two identical “coffee shops” (servers) working at the same time in different locations. If one shop gets a power outage, the other keeps serving customers without a single customer noticing any delay or missing order.  

Each shop is always on (“active”), and they share the latest menu (data) by constantly synchronizing with each other. When a customer places an order, it can be processed by either shop; both accept the same order because they are kept in sync. If one shop goes down, the remaining shop simply takes over all orders instantly—no waiting or “out of stock” alerts.  

This setup gives **high availability**: the system keeps working even if a part fails, just like the coffee shops keep pouring coffee no matter what happens to one location.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
