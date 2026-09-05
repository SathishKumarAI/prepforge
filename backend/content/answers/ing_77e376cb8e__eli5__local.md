---
qid: ing_77e376cb8e__eli5__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 235
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:46:33-05:00'
sources: []
---

Imagine you’re a chef who wants to test how good a new recipe is. Instead of just tasting it once, you set up a “taste‑testing station” that lets anyone taste the dish and give feedback on flavor, texture, and presentation. That station is like an *evaluator* for AI models.

A **custom evaluator** in Ai Evals (a platform that checks how well language models perform) works exactly like that station: you write a small piece of code that decides whether the model’s answer satisfies certain criteria—accuracy, relevance, style, etc. Then, when you run an evaluation, Ai Evals calls your code for every generated response and records the results.

Langwatch (a tool that watches language usage) and Langfuse (which manages prompts and logs) can feed data into this evaluator. Together they let you create a personalized “taste‑test” that automatically scores your model’s output without manual checking. This is how developers fine‑tune models to meet specific standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
