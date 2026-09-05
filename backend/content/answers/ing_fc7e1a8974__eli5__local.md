---
qid: ing_fc7e1a8974__eli5__local
question: 'Explain: Running with Docker Compose — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 239
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:34-05:00'
sources: []
---

Imagine you’re baking a cake that needs several ingredients—flour, sugar, eggs, and a special frosting—all at once. Each ingredient is a separate “container” (a small, self‑contained program). Docker Compose is like the recipe card that tells every kitchen station exactly what to do: which ingredients to use, how hot the oven should be, and in what order everything goes together.

The *getzep/graphiti* project is a set of containers that build real‑time knowledge graphs (think of them as interactive maps of facts). One container pulls data from databases, another processes it into graph form, and a third serves it to your AI agent. By putting all these services in one Docker Compose file, you can start the whole system with a single command (`docker compose up`). It’s like pulling out the recipe card, grabbing each ingredient, and letting the kitchen run automatically—no need to remember which oven is for which part or whether you already mixed the frosting. The result? A ready‑to‑use graph engine that runs everywhere Docker does, from your laptop to a cloud server.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
