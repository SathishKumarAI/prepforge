---
qid: ing_1c318a36f3__eli5__local
question: 'Explain: Tell me about a time a prompt change broke production.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 220
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:47-05:00'
sources: []
---

Imagine your production system is a kitchen that prepares meals for thousands of customers every day. The recipe cards (prompts) tell the chefs exactly what to do: ingredients, timing, and presentation. One morning, someone updated a recipe card—perhaps they shortened “add salt” to just “salt.” The chef follows the new card, but now each dish comes out bland because the amount of salt was never specified. Suddenly, customers complain, orders get delayed, and the kitchen’s reputation suffers.

In AI production, prompts are like those recipe cards for a language model. A small wording change can alter how the model interprets the task—just as “salt” changed the flavor. If the new prompt makes the model give incomplete or wrong answers, the entire system that relies on those responses (e.g., customer support bots, data pipelines) breaks down until the prompt is fixed. The lesson: even tiny edits to prompts can ripple through a live deployment and must be tested carefully before going live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
