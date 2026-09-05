---
qid: ing_924a857303__eli5__local
question: 'Explain: Example — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 193
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:44-05:00'
sources: []
---

Imagine each machine‑learning model as a chef in a kitchen.  
Each chef needs their own pantry (database) with the exact ingredients (data) they use most often—no sharing or mixing with other chefs’ supplies.  

**Pattern: Database per service** means every ML “service” (a training job, an inference API, a feature store, etc.) owns its own database. The chef keeps all his spices in his pantry, so he can grab what he needs quickly and without waiting for others.  
If one chef’s pantry runs out of an ingredient, the other chefs aren’t affected; they keep cooking with their own stock. This isolation prevents one model’s data changes from breaking another’s predictions, just as a separate pantry keeps each chef’s recipes stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
