---
qid: ing_ed6d148e52__eli5__local
question: 'Explain: Netflix Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 240
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:15-05:00'
sources: []
---

Think of a **Netflix custom problem** like building a personalized recipe book for each user.  
The “recipe” (the model) must decide which movies to recommend, but the ingredients are not fixed: every user has different tastes, viewing habits, and context.  

In a recent FAANG interview, the question asked you to design an algorithm that, given a stream of user actions (watch time, clicks, pauses), predicts the next movie they’ll enjoy **in real‑time** while keeping memory low.  
You’re expected to explain how to:

1. **Encode user behavior** – turn clicks and pauses into numbers (features).  
2. **Train quickly** – update a model on the fly as new data arrives (online learning).  
3. **Handle scale** – keep computation fast even when millions of users watch simultaneously.

So, imagine you’re a chef who must tweak each recipe instantly based on diners’ reactions, while serving an entire restaurant without running out of ingredients. That’s the core challenge Netflix and other FAANG companies test in their interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
