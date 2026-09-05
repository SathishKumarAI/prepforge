---
qid: ing_9dab36e314__eli5__local
question: 'What is Event Driven Architecture? — Event-Driven Architecture (EDA): A
  Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:25-05:00'
sources: []
---

**Event‑Driven Architecture (EDA)** is a way of wiring software so that pieces talk to each other by *sending and reacting to events*—short messages that say “something just happened.”  
Think of a kitchen where every appliance has its own light bulb: when the oven finishes baking, it flips its bulb on. The fridge, seeing the bulb glow, turns on a fan; the dishwasher, also watching the same bulb, starts rinsing. Each device acts only when its trigger lights up, without needing to ask the others what’s going on.

In EDA, an *event* is a simple record (e.g., “OrderPlaced: ID 123”). A *producer* emits the event; one or more *consumers* subscribe and perform work—updating a database, sending an email, starting a machine‑learning inference. Because components are loosely coupled, new consumers can be added or removed without changing existing ones, making systems flexible and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
