---
qid: ing_471c037d3e__eli5__local
question: 'Explain: Use environment variables — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 206
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:52-05:00'
sources: []
---

Think of a Docker container as a tiny, self‑contained kitchen.  
The **environment variable** is like the recipe card you slip into the fridge: it tells the chef (the container) which ingredients to use and how much, but it doesn’t bake the food itself.  

When you build an image, you write the recipe in the Dockerfile. That’s the “default” card everyone sees.  
At runtime, you can hand a different card—an environment variable—to change the flavor without touching the kitchen layout. This lets you run the same container in many places (dev, test, prod) while keeping secrets (API keys, passwords) out of the image and your version control.

**Key take‑away:** Use `ENV` or `--env-file` to keep configuration separate from code; it keeps containers portable, secure, and easy to tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
