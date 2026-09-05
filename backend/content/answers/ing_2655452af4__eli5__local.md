---
qid: ing_2655452af4__eli5__local
question: 'Explain: Template pattern — LLD-OOPs-Design-Patterns/DesignPatterns at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 207
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:40-05:00'
sources: []
---

Think of the Template Pattern like a recipe book that tells you *how* to cook a dish but lets you choose your own ingredients.  
The “recipe” (the abstract class) lays out the skeleton steps—heat the pan, stir, add sauce, plate—exactly in that order. Those steps are fixed; they can’t be rearranged or skipped.  
But for each step, the recipe calls a *placeholder* where you’ll fill in the details: what kind of oil to use, whether to add garlic, which garnish to top it with. Concrete subclasses (e.g., “Chicken Stir‑Fry” or “Vegetable Curry”) supply those specific ingredients and any extra steps they need.  

So, the Template Pattern gives a reliable framework while still letting you customize parts—just like following a recipe that guarantees a tasty meal no matter which flavors you pick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
