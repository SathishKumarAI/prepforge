---
qid: ing_7fa4ac4c3f__eli5__local
question: 'Explain: Define abstract classes — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 188
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:08-05:00'
sources: []
---

Think of an **abstract class** like a recipe book that tells you *what* ingredients and steps a dish needs, but it never gives you the finished meal itself. The book is useful because it sets up a common structure—every dish must have a name, a list of ingredients, and a cooking method—but each chef (a concrete subclass) fills in the details: chooses specific ingredients, decides on seasoning, and actually cooks.

In programming, an abstract class does the same thing. It defines methods that describe behavior (like “prepare” or “serve”) and may provide some shared code, but it can’t be instantiated by itself because it’s missing concrete implementations. Subclasses inherit this skeleton and supply the specific logic. This keeps related classes organized while forcing each one to implement its own unique details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
