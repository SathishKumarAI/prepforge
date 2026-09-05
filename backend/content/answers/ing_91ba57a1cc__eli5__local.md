---
qid: ing_91ba57a1cc__eli5__local
question: 'Explain: The Screenshot-Reason-Act Loop — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 197
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:28:06-05:00'
sources: []
---

Imagine a robot chef that can only cook by looking at a recipe book on a screen, deciding what to do next, and then acting in the kitchen.  

**Screenshot** – The robot takes a “photo” of the recipe page (the computer’s current state).  
**Reason** – It reads the photo, thinks about which ingredient to pick or step to follow (an internal plan).  
**Act** – It reaches for the spice jar or turns on the stove (changes the computer or kitchen).

After acting, it snaps another screenshot, starts reasoning again, and so on. This cycle—take a picture, think, act, repeat—is the **Screenshot‑Reason‑Act Loop** used by many AI agents that control computers. Each loop lets the agent observe, plan, and execute, just like a chef follows a recipe step by step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
