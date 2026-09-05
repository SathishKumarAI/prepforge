---
qid: ing_4a30d3f8f9__eli5__local
question: 'Explain: Function Calling & Tool Use — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 223
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:27-05:00'
sources: []
---

Imagine a chef (the AI) in a kitchen that has many specialized tools—blenders, ovens, spice jars—each with a clear label and recipe card. When the chef is asked to make a dish, she first reads the recipe (the user’s prompt). If she notices the recipe needs a sauce, she looks at the “Sauce Maker” tool, pulls it out, follows its instructions, and then puts the finished sauce back into the main cooking pot.  

**Function calling** is like the chef deciding which tool to use: she sends a short command (“use Sauce Maker with these ingredients”) and receives a tidy answer (the sauce). **Tool use – structured generation** means she can call many such tools in sequence, each returning a well‑formatted result that fits back into the overall dish. This keeps the cooking organized, reduces mistakes, and lets the chef focus on creativity while trusting the tools for precise tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
