---
qid: ing_e21c11af9e__eli5__local
question: 'Explain: Define interfaces — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 183
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:51-05:00'
sources: []
---

**Interfaces** are like a menu at a restaurant.  
The menu (the interface) lists the dishes you can order—each dish has a name and a set of ingredients, but it doesn’t tell you how the kitchen actually prepares them.  
When you choose a dish, the chef (a class that implements the interface) follows the recipe to deliver exactly what the menu promises, no matter how they cook it internally.

In software, an interface declares *what* methods a class must provide—just like the menu tells customers which dishes are available. It hides *how* those methods work inside the implementing classes, letting you swap different chefs (implementations) without changing the menu or your orders. This keeps code modular, testable, and easier to extend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
