---
qid: ing_64db9a2a6d__eli5__local
question: 'Explain: A global workspace in language models — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 187
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:45-05:00'
sources: []
---

Imagine a huge kitchen where many chefs (the model’s internal units) are cooking different dishes at the same time. Each chef has its own small pantry with ingredients it needs for its recipe. When a dish is ready, the chef puts it on a central counter—the **global workspace**—so everyone can see and taste it. In a language model, this counter holds a short, shared “summary” of what’s happening right now (the current context or prompt). All parts of the model read from and write to that counter, so they stay in sync, just like chefs adjusting their recipes after tasting each other’s dishes. The global workspace is simply a common memory slot where information is broadcasted; it keeps the whole system coordinated without each unit having to remember every detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
