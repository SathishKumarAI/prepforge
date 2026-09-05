---
qid: ing_d7b9b3478a__eli5__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 240
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:27-05:00'
sources: []
---

Imagine you’re baking a cake. If the recipe says, “Make a cake,” you might feel overwhelmed: you need flour, eggs, sugar, oven temperature, and timing. A smart baker breaks it into smaller steps—first mix dry ingredients, then add wet ones, bake, cool, decorate. Each step is a separate prompt that builds on the previous answer, so the model can focus on one detail at a time.

**When to split prompts:**  
- The task has many distinct parts or requires complex reasoning.  
- You want the model’s output to be accurate in each sub‑step before moving on.  

**Least‑to‑most prompting** works like that baking plan: start with the simplest question (the “least” part), let the model answer it, then feed that answer into a new prompt that asks for the next layer of detail (“more”). Each step adds context and depth until you reach the final, fully fleshed‑out response. This keeps the model from getting lost in a long, confusing single request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
