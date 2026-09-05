---
qid: ing_8412bf72b6__eli5__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 250
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:06:13-05:00'
sources: []
---

Imagine you’re a chef who wants to cook the perfect soup for a picky diner.  
**RLHF (Reinforcement Learning from Human Feedback)** is like letting that diner taste each batch and give thumbs‑up or thumbs‑down. The chef records these signals, learns which ingredients make the dish better, and gradually adjusts the recipe.

Next comes **DPO (Direct Preference Optimization)**. Instead of asking the diner to rate every new soup, the chef now compares two candidate soups side by side and picks the one the diner prefers. This is a faster, more direct way to learn what tastes good without needing full ratings each time.

Finally, **GRPO (Gradient‑Based Reinforcement with Preference Optimisation)** treats the diner’s choices as a guide for fine‑tuning the chef’s cooking style. It uses gradient steps—tiny tweaks—to shift the recipe toward higher preference scores while staying true to the overall flavor profile.

So, the process is: collect feedback → choose better options directly → refine continuously with small guided changes—all aimed at serving the tastiest soup possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
