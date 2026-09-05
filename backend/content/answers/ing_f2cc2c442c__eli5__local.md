---
qid: ing_f2cc2c442c__eli5__local
question: 'Explain: for quite a while you can find — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 249
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:50-05:00'
sources: []
---

Imagine a kitchen where every appliance—oven, fridge, blender—acts only when someone presses its button. In this kitchen, the “button” is an event (like “turn on,” “start mixing”). An **event‑driven architecture** is just a software kitchen built the same way: each component stays idle until it receives a signal (an event) telling it what to do.

In Martin Fowler’s talk, he shows how this idea can mean many different things. One meaning is that the system reacts to events as they happen, like a chef watching the timer and adding ingredients at the right moment. Another meaning is that events are stored in a log so any component can replay them later—like keeping a recipe card of every step so you can retrace what was done. Fowler compares these “many meanings” to different cooking styles that all use the same basic rule: do something only when an event tells you to.

So, just as a kitchen stays calm until a button is pressed or a recipe card is read, an event‑driven system waits for signals before acting, but the exact rules of how it does that can vary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
