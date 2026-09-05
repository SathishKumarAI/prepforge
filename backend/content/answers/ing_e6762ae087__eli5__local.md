---
qid: ing_e6762ae087__eli5__local
question: 'Explain: Push versus pull and consequences — Asynchronous computing at
  Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 258
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:05-05:00'
sources: []
---

Think of a busy kitchen where chefs (computers) must decide when to fetch ingredients for a dish.

**Pull** is like a chef standing at the pantry, asking “Do I need flour now?” and only grabbing it when the recipe says so. The kitchen works in lock‑step; each step waits for the previous one to finish before moving on. It’s simple but can leave ovens idle while chefs wait for ingredients.

**Push** flips that: a pantry robot notices the chef needs flour, sends a packet of flour directly to the oven (the next task) without waiting for an explicit request. The oven starts baking immediately, even if the chef is still chopping veggies. This decouples tasks so they can run in parallel, speeding up cooking.

At Meta, using **push** for asynchronous computing lets many GPU jobs start as soon as data arrives, reducing idle time and improving throughput. The downside: you need careful bookkeeping (a “queue” of pending jobs) to avoid overloading resources or missing results. Pull keeps things simpler but can waste valuable compute cycles, especially when tasks are long‑running or highly variable in size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
