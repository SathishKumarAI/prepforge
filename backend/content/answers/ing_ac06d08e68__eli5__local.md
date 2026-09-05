---
qid: ing_ac06d08e68__eli5__local
question: 'Explain: Data & context strategy — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 222
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:28-05:00'
sources: []
---

Imagine you’re a chef who can only cook with recipes written in plain English, but the kitchen’s oven needs instructions in a special “SQL” language to bake each dish. A **Text‑to‑SQL agent** is like an invisible sous‑chef that reads your recipe (the text), understands what ingredients (tables) and actions (queries) you need, then writes the exact oven commands for you.

It works in two steps:

1. **Data strategy** – The chef keeps a catalog of all available ingredients (databases, tables, columns). Knowing where everything lives lets the agent know which items to use.
2. **Context strategy** – Before cooking, the sous‑chef asks clarifying questions (“Do you want the latest prices?”) and remembers earlier parts of the conversation so it can combine pieces correctly.

By blending a full inventory with live context, the agent turns your natural‑language instructions into precise SQL code that runs in the kitchen (your database).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
