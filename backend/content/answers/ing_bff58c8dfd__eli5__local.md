---
qid: ing_bff58c8dfd__eli5__local
question: 'Explain: Meta Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 275
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:58-05:00'
sources: []
---

**Meta‑design in a nutshell**

Think of building a recipe book that can write its own recipes.  
A *meta‑design* is the set of rules you give to that book so it knows how to create new dishes (models) that fit different tastes (tasks).  

- **Model**: A program that learns patterns from data, like a chef learning to cook.  
- **Meta‑learning** (“learn to learn”): Training the recipe book on many cooking styles so it can quickly whip up a perfect dish for a new flavor with only a few ingredients.

In FAANG interviews you’ll see questions asking how you’d set up that recipe book:  

1. *What data should you expose to the meta‑learner?* (Which recipes are “base tasks”?)  
2. *How do you measure success when the book cooks a brand‑new dish?* (Generalization metric)  
3. *Can the book keep improving as it tastes more meals?* (Continual learning loop)

So, meta‑design is the blueprint that lets a machine learn how to learn—fast, flexible, and ready for whatever new problem pops up next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
