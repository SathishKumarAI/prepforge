---
qid: ing_c8b2cc91ec__eli5__local
question: What is context pollution in agents, and how do you deal with it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 287
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:32-05:00'
sources: []
---

Imagine a kitchen where every chef keeps a notebook of recipes they’ve tried. If the notebook gets filled with half‑finished dishes, old notes, and random scribbles, it becomes hard to find the recipe you actually need—this is **context pollution** for an AI agent.

In agents, *context* means all the information the model uses to decide what to do next: past messages, user instructions, internal memory, and sometimes unrelated data. When too much irrelevant or outdated info sticks around, the agent gets confused and may produce off‑topic or wrong responses.

**How to clean it up**

1. **Trim the notebook:** After each turn, keep only the most recent few exchanges that directly influence the next action; discard older ones.
2. **Tag what matters:** Mark important facts (e.g., user name, task goal) so they’re always easy to find and less likely to be overwritten by noise.
3. **Refresh the environment:** Periodically reset or summarize the context into a concise “cheat sheet” that captures only the essentials.

By keeping the notebook neat—just enough useful recipes—the agent stays focused and reliable, just like a chef who remembers only the dishes they’re actually cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
