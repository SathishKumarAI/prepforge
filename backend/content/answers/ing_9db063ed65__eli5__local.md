---
qid: ing_9db063ed65__eli5__local
question: 'Explain: The Many Meanings of Event-Driven Architecture • Martin Fowler
  • GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 282
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:32-05:00'
sources: []
---

Imagine a kitchen where every appliance has its own “talk” button. When the oven finishes baking, it presses its button and all devices that care about “baked‑food ready” hear the signal: the fridge cools the cake, the display shows a notification, and the timer resets. That’s event‑driven architecture in plain terms—systems react to events (signals) instead of constantly asking each other what they’re doing.

Martin Fowler says this idea isn’t just one thing; it can mean different things depending on context:

* **Event** – any noteworthy change, like “order placed” or “temperature high.”
* **Publisher** – the component that creates the event.
* **Subscriber** – the component that listens and acts when the event arrives.
* **Bus/Message broker** – the hallway where all signals travel.

In practice you might use a simple in‑memory queue for a small app, or a cloud service like Kafka for millions of events. The key is that components stay independent; they only know about the event type, not each other’s internal workings. Thus, the kitchen stays organized: appliances can be added or removed without rewiring everything, just by wiring up to the same button.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
