---
qid: ing_15095447c6__eli5__local
question: 'Explain: SQL generation & self-correction — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 250
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:42-05:00'
sources: []
---

Imagine you’re cooking a recipe that’s written in plain English—“Add two cups of flour, then stir until smooth.” A **Text‑to‑SQL agent** is like a smart sous‑chef who first translates that English instruction into the exact kitchen commands your oven understands (the SQL code). It writes a query: `SELECT * FROM recipes WHERE ingredient = 'flour' AND quantity = 2;`.

Now, if the sous‑chef notices a mistake—maybe it tried to add “sugar” instead of “flour”—it **self‑corrects**. The agent re‑examines its own SQL, spots the error, and rewrites the command before sending it to the database. Think of this as a chef tasting the dish, realizing it’s too salty, then adjusting the seasoning on the fly.

Key terms:  
- **SQL (Structured Query Language)** – the language databases use to ask for data.  
- **Agent** – an automated program that performs tasks without human intervention.  

The result is reliable, accurate database queries that fix their own mistakes before they ever reach the user.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
