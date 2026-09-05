---
qid: ing_006531f6a0__eli5__local
question: 'Explain: do I know the address changed I — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 268
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:48-05:00'
sources: []
---

Think of a busy kitchen in a restaurant. Every time a cook finishes a dish, they shout “Dish ready!” into the air. The waiter hears that shout and immediately knows which table to bring the food to—no one has to keep checking the stove or asking the cook directly. In this kitchen, **events** are the shouts (“dish finished”, “order placed”), and **event-driven architecture** is the whole system that lets different parts of the restaurant react automatically when an event happens.

An **event** is just a notification: “something happened.” An **event bus** is like the open hallway where those shouts travel. A **publisher** (the cook) sends out an event; any number of **subscribers** (waiters, bill‑generators, inventory systems) listen for that specific shout and act when they hear it. The components never talk to each other directly—they only send and receive events—so adding a new waiter or changing the cooking station doesn’t disturb the rest.

In short: event‑driven architecture is a loose‑coupling system where independent parts communicate by broadcasting “I just did X” messages, letting everything stay in sync without tight dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
