---
qid: ing_9d5b19f1fd__eli5__local
question: 'Explain: Resulting context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 225
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:57-05:00'
sources: []
---

Imagine each service is a separate kitchen in a large restaurant.  
Each kitchen has its own pantry stocked only with the ingredients it needs—no one else shares or borrows from it. This keeps recipes (code) simple and prevents a spillover of spices (data) that could ruin another dish.

In software, “database per service” means every micro‑service owns its own database.  
*Service* is a small, independent program that does one thing well.  
*Database* stores the data it needs to work.  

Because each kitchen keeps its pantry private, a change in one recipe (schema) doesn’t affect another. It also lets each service scale, upgrade, or even replace its database without touching the rest of the system. The trade‑off is that if two services need to share information, they must do so through well‑defined messages instead of direct table access—just like chefs sharing a recipe card rather than borrowing ingredients from another kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
