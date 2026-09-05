---
qid: ing_dc0af96b36__eli5__local
question: 'Explain: Architecture Patterns for Tool-Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 234
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:29-05:00'
sources: []
---

Imagine a kitchen where every appliance (oven, blender, fridge) is an *agent* that can use tools to finish a recipe.  
**Tool‑use agents** are like those appliances, but in software—they act on data or other systems using *tools* (APIs, models, databases).  

The **architecture patterns** tell us how to arrange the appliances so they cooperate smoothly:

1. **Pipeline pattern** – each appliance passes its output straight to the next, like a food‑prep line.  
2. **Actor pattern** – every appliance runs independently, sending messages (requests) to one another, similar to a team of chefs who coordinate over a shared board.  
3. **Orchestration pattern** – a master conductor decides which appliance does what and when, just as a head chef schedules each step in the recipe.  

These patterns help developers decide whether tools should run one after another, in parallel, or under central control, ensuring the whole system stays organized, scalable, and easy to debug.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
