---
qid: ing_caa4ee83ad__eli5__local
question: 'Explain: The Memory Hierarchy — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 259
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:19-05:00'
sources: []
---

Imagine an AI agent as a chef preparing a meal.

**Short‑term “working” memory** is the cutting board and knives—everything it needs right now to chop, stir, or taste. It holds the current ingredients, the recipe step being executed, and any quick calculations. This space is tiny but fast; once the step ends, those items are discarded.

**Long‑term memory** is the pantry and fridge. Here the chef stores spices, canned goods, and whole recipes that can be reused later. These items are kept for years, never lost unless intentionally removed.

The **state** of the agent is like a checklist written on a sticky note: it records what has already been done (e.g., “sautéed onions”) so the chef knows where to pick up next. The state sits between the cutting board and pantry, guiding the flow from short‑term actions to long‑term knowledge.

Together, this hierarchy lets an AI act quickly on fresh data while still remembering useful patterns for future tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
