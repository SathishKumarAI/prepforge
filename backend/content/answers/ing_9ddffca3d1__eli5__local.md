---
qid: ing_9ddffca3d1__eli5__local
question: 'Explain: Get all spans for a specific name — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 231
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:48-05:00'
sources: []
---

Imagine your AI system is a long, detailed recipe book written during a cooking competition. Each “span” is like a single step in the recipe—mixing, baking, garnishing—together they make up the whole dish. Now, suppose you want to see every time the word **“chicken”** appears across all recipes to understand how it’s used. Getting *all spans for a specific name* means you pull out every individual step that mentions “chicken,” no matter which recipe or part of the book it lives in.

In AI evaluation tools like Langwatch or Langfuse, each span is a recorded snippet of activity (a function call, a prompt sent to the model, a response received). By asking for all spans with a particular name—say, “generate‑response”—you retrieve every instance where that action occurred. This lets you review, debug, and improve how your system handles that specific task across an entire evaluation run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
