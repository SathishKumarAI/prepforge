---
qid: ing_2d7b9081f4__eli5__local
question: 'Explain: Modular perception, prediction and planning, or end-to-end learned
  driving? Make the case, then tell me what you would actually build.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 247
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:47:42-05:00'
sources: []
---

Think of a driver as a chef making a meal in three stages: first they taste (perceive) the ingredients, next they guess how the flavors will mingle (predict), and finally they decide what to cook (plan).  

* **Modular perception‑prediction‑planning** is like that chef who uses separate tools—taste buds for sensing, a recipe book for predicting outcomes, and a menu planner for choosing dishes. Each part can be tweaked independently; if the taste sensor gets better, the whole system improves without re‑training everything.  

* **End‑to‑end learning** is more like a robot that learns to cook by watching countless videos of chefs: it directly maps the video stream to steering commands, with no explicit recipe or planning step.

If I were building an autonomous car today, I’d lean toward the modular approach: use proven sensors for perception, physics‑based models for short‑term prediction, and a rule‑guided planner that can be updated safely. This keeps safety, interpretability, and upgrade paths clear while still allowing learning to refine each component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
