---
qid: ing_a289b7cd95__eli5__local
question: 'Explain: Prompt Optimization (DSPy) — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 231
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:24-05:00'
sources: []
---

Imagine you’re a chef preparing a dish for a picky guest. The recipe is your *prompt*—the list of ingredients and steps you give to the kitchen’s AI “cook.” If you ask too loosely (“Make something tasty”), the cook might over‑season or under‑cook, giving a bland result. Prompt optimization in DSPy is like having a smart sous‑chef who tweaks the recipe automatically: it tries different ingredient amounts, cooking times, and phrasing until the dish (the AI’s answer) tastes exactly right.

In practice, you write a *PromptTemplate*—a skeleton with slots for variables. DSPy then runs small experiments, sampling different slot values, feeding each version to the model, and scoring the outputs against your quality criteria. The best‑scoring recipe is chosen, so every time you run the prompt it produces consistently high‑quality results.

So, think of DSPy as a recipe‑optimizing assistant that learns which wording or data to feed the AI so its “cooking” always hits the mark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
