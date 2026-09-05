---
qid: ing_3bccb87b27__eli5__local
question: 'Explain: to call instead you say the event — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 238
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:11:03-05:00'
sources: []
---

Imagine a kitchen where every appliance (oven, fridge, blender) is a tiny “service.”  
Instead of one big recipe book telling each appliance *what* to do all the time, they listen for simple signals—**events** like “BreadReady,” “MilkLow,” or “FruitSliced.” When an event appears on the kitchen’s whiteboard (the **event bus**), any appliance that cares can act right away: the oven starts baking, the fridge sends a reminder to buy milk, the blender begins chopping.  

An **event-driven architecture** works the same way in software: services emit events when something noteworthy happens, and other services react only if they’re interested.  
- *Event*: a brief message that “something happened.”  
- *Event bus*: the shared channel where events travel.  
- *Subscriber*: a service listening for specific events.  

This keeps systems loose‑coupled: one part can change or disappear without breaking others, just like swapping out appliances without rewriting the whole recipe book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
