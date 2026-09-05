---
qid: ing_d6582a73fb__eli5__local
question: 'Explain: lot of people don''t really like very — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 257
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:17-05:00'
sources: []
---

Imagine a kitchen where every chef has a tiny “alert button.” When the oven’s timer rings, the button lights up and sends a message to all chefs: *“The cake is ready!”* Some chefs may start frosting immediately, while others might check the recipe first or pause because they’re busy. The same alert can mean different things to each chef—some take it as “time to serve,” others as “time to clean.” In this kitchen, nothing happens unless a button fires; there’s no single boss telling everyone what to do next.

That’s event‑driven architecture (EDA). It’s a design style where software components react to **events**—messages that something happened. Each component subscribes to events it cares about and reacts independently. Because the same event can be interpreted differently by different subscribers, EDA has many meanings: it could be “publish/subscribe,” “message queues,” or even “reactive streams.” The core idea is simple: components communicate through events, not direct calls, letting each decide how to respond. This gives flexibility but also means you need clear event definitions so everyone interprets the signals the same way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
