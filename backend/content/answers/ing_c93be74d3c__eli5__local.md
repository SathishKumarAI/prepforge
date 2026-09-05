---
qid: ing_c93be74d3c__eli5__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:15-05:00'
sources: []
---

Imagine your AI is a chef cooking a dish. Each **tool call** is like the chef picking up a specific kitchen gadget—mixing bowl, whisk, or oven—while the **multi‑step progress** shows the recipe unfolding: “chop onions,” then “sauté,” then “add sauce.” In a UI you can display this as a simple, scrollable list:

1. **Tool calls** appear as little icons with labels (e.g., 📚 “Search”, 🧪 “Analyze”), so you instantly know which gadget was used.
2. **Progress steps** are numbered or bullet‑pointed, each paired with the tool icon that performed it and a short status (“in progress,” “done”).
3. A small progress bar or spinner next to each step lets you see how far along the recipe is.

This keeps the interface clean, mirrors real cooking stages, and lets anyone understand what the AI is doing without technical jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
