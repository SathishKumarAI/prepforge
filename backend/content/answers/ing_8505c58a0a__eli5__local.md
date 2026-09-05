---
qid: ing_8505c58a0a__eli5__local
question: 'Explain: ago we''re familiar from doing that from — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 209
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:40-05:00'
sources: []
---

Imagine a kitchen where every action—turning on the stove, opening a door, hearing a timer—triggers a specific response: the oven lights up, the fridge starts cooling, or a phone buzzes with a reminder. **Event‑driven architecture (EDA)** is like that kitchen, but for software. An “event” is any noteworthy occurrence (e.g., a user clicks “submit,” a sensor reports temperature). When an event happens, it’s *published* to a bus (the kitchen’s air), and any component that cares about that event can *subscribe* and react—without the event source knowing who will respond. Thus, the system stays loosely coupled: components communicate only by sending events, not direct calls. EDA lets software scale, adapt, and evolve more naturally, just as a smart kitchen keeps running smoothly no matter how many appliances are added or removed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
