---
qid: ing_7e42661d3d__eli5__local
question: 'Explain: F6: Holdout set leakage into training or prompts'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 186
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:56:58-05:00'
sources: []
---

Imagine you’re baking a cake and want to test if the recipe really works. You keep a secret batch of flour (the *hold‑out set*) that nobody touches until the final taste test. If, during mixing, someone sneaks in a spoonful of that secret flour, the cake will taste better than it should because it already knows part of the answer. In AI, the hold‑out set is data we reserve to see how well our model really performs after training. *Leakage* happens when pieces of this reserved data accidentally slip into the training process or even appear in prompts that the model sees while learning. It’s like letting the cake “cheat” by using secret ingredients—so the final score (accuracy) is overly optimistic and not trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
