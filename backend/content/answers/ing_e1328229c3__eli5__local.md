---
qid: ing_e1328229c3__eli5__local
question: 'Explain: Cost model — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 226
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:16-05:00'
sources: []
---

Imagine you’re baking a cake (your AI model) and every time you add an ingredient, you want to taste it before moving on. In “Eval‑Gated CI/CD” the kitchen has two stations: **Evaluation** (the tasting booth) and **CI/CD** (the oven that finalizes the recipe).  

The *cost model* is like a recipe card that tells you how many calories (computational resources) each ingredient uses and when you can add it to the cake. Each time you tweak something, the evaluation station runs a quick test—like tasting a spoonful—to decide if the change improves flavor. If it does, the CI/CD station locks the new version into the final batch; if not, the change is discarded.  

So, the cost model simply tracks how much “taste‑test” time and “final‑bake” effort each modification costs, letting you pay only for the improvements that actually pass the gate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
