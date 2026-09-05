---
qid: ing_458f3ea26b__eli5__local
question: 'Explain: Tool Use & API Integration — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 260
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:39-05:00'
sources: []
---

**Imagine a chef (your agent) who can cook any dish only if she has the right kitchen tools and knows how to ask the fridge (API) for ingredients.**

*Tool use* is like giving that chef a blender, whisk, or oven—software pieces that do specific jobs: a text‑to‑speech tool turns words into sound, a calculator library crunches numbers, and a language model interprets user questions. The agent learns when to pick each tool, just as the chef chooses the right utensil for each recipe step.

*API integration* is the fridge’s door that the chef opens with a key (an API key). The chef sends a simple request—“give me 200 grams of flour”—and receives the exact item back. In ML, the agent sends data to an external service (like a weather API) and uses the returned information in its next action.

Together, tool use and API calls let your agent perform complex tasks by combining built‑in abilities with fresh data from outside systems—just as a chef blends skillful techniques with pantry supplies to create a perfect meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
