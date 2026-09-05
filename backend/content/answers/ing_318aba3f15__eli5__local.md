---
qid: ing_318aba3f15__eli5__local
question: 'Explain: Sub-Agents and Parallelism — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 222
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:14-05:00'
sources: []
---

Think of an AI project like a kitchen where you’re baking a giant cake.  
The *main chef* (the big model) has a list of tasks: mix the batter, bake it, glaze it, and decorate it. Instead of doing everything one by one, the chef can hand off each task to a *sub‑chef*—a sub‑agent—that works on its part at the same time.  

In Claude’s code, a **sub‑agent** is just a small helper program that tackles a specific piece of the overall job (e.g., summarizing text or searching for facts).  
When several sub‑agents run **in parallel**, they all work simultaneously, so the whole process finishes faster—just like having multiple cooks in the kitchen instead of one juggling every step alone.  

So, sub‑agents are tiny specialists, and parallelism is letting them all go at once to speed up the big AI “recipe.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
