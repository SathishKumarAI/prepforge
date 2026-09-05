---
qid: ing_992c94e541__eli5__local
question: 'Explain: ​ Online evaluations — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 222
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:40:30-05:00'
sources: []
---

Imagine you’re baking a cake and want to taste it while it’s still rising so you can tweak the recipe on the fly. **Online evaluation** is that “taste‑while‑baking” for AI tools built with LangChain. Instead of running a whole batch of data through the model, you let the chain process one piece at a time and immediately check how well it did—like checking the cake’s texture after each spoonful.

You set up an **evaluation prompt** (the question you ask the model) and a **metric function** (a rule that says “this answer is good if it contains X words, Y facts, or follows style Z”). After each turn, LangChain runs the metric on the output, gives you a score, and can even adjust the next step. It’s real‑time feedback, so your AI learns and improves while you’re still working, just as a baker refines a recipe by tasting along the way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
