---
qid: ing_55f515d028__eli5__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 204
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:57-05:00'
sources: []
---

**Pattern: “Database per Service”**

Imagine each micro‑service is a small kitchen that prepares its own dish—no sharing of ingredients or utensils with other kitchens. In this way, every kitchen owns all the supplies it needs (its database) and can change recipes without waiting for anyone else.

*Unavoidable terms:*  
- **Micro‑service** – a tiny, self‑contained program that does one job.  
- **Database** – the place where data is stored, like a pantry.  

When each service has its own database, it can grow, scale, and be updated independently. Other services only talk to it through well‑defined menus (APIs), so changes inside don’t break the rest of the system. This keeps services loosely coupled, easier to maintain, and resilient if one kitchen fails or needs a new recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
