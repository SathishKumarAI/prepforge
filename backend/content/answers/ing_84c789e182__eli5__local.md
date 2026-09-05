---
qid: ing_84c789e182__eli5__local
question: Here are ~120 lines of working but messy code with passing tests. Improve
  the architecture without breaking them. What do you change first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 189
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:17-05:00'
sources: []
---

Imagine your codebase as a busy kitchen that’s started out with every chef standing at their own stove and everyone shouting recipes over each other. The first thing you do is set up a clear menu—**a single place where the recipe (the public interface) lives**. In practice, that means creating one small module or class that exposes only the functions your tests need, while moving all the internal helpers into private modules.  

Why start here? Because once everyone knows *where to order from*, you can reorganize the rest of the kitchen without changing the menu: split the big file into focused files, group related helpers together, and let each module talk only through the public API. This keeps tests happy while giving you a tidy, easier‑to‑understand structure for future changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
