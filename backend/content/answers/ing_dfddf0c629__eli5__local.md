---
qid: ing_dfddf0c629__eli5__local
question: 'Explain: Consistency — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 196
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:07-05:00'
sources: []
---

Think of a database as a well‑organized pantry.  
When you add or remove food, the *consistency* rule says that after every change the pantry must still satisfy all its rules—no broken containers, no mismatched labels, and no missing ingredients that would spoil a recipe.

In technical terms, consistency means: **Every transaction takes the database from one valid state to another, obeying all defined constraints (like foreign keys or unique indexes).** If a rule says “every order must reference an existing customer,” a transaction that tries to insert an order for a non‑existent customer will be rolled back.

So, just as you wouldn’t leave a pantry half‑filled with mismatched items, a database never ends up in a state that violates its integrity rules. This keeps data trustworthy and ready for the next user or process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
