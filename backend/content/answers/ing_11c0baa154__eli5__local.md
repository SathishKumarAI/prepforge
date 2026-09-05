---
qid: ing_11c0baa154__eli5__local
question: 'Explain: Common Mistakes and Anti-Patterns — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 309
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:57-05:00'
sources: []
---

Imagine you’re building a robot kitchen assistant that can order groceries, cook meals, and clean up. If you give it the same instructions as a human chef—“pick up the apples,” “stir the pot”—you’ll quickly run into problems: the robot doesn’t know what *apples* look like in every grocery store, it can’t decide when a pot is hot enough to stir, and it may spill sauce because it thinks cleaning means wiping with a rag.

That’s what happens when developers build “tool agents” for AI without respecting how machines actually work. The common mistakes are:

1. **Treating the agent like a human** – giving vague, high‑level goals instead of concrete, step‑by‑step commands.
2. **Ignoring tool limits** – assuming an API can do more than its documentation says (e.g., expecting a weather API to predict tomorrow’s rain without specifying time).
3. **Over‑loading the agent with knowledge** – making it try to remember everything, so it gets confused and repeats mistakes.

The anti‑pattern is “over‑engineering” the agent: letting it learn every possible scenario instead of giving it clear rules and a small set of reliable tools. The right approach is to give the agent precise instructions (like a recipe) and let it use only the tools that are guaranteed to work, just as you’d program a kitchen robot with specific commands for each appliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
