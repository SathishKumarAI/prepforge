---
qid: ing_5644665c3f__eli5__local
question: 'Explain: Local Development — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 215
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:31-05:00'
sources: []
---

Think of your computer as a tiny kitchen where you can test recipes before sending them out to the whole town.  
In this “kitchen” (your local dev environment) you use **Supabase** – a ready‑made pantry that holds all the ingredients (a PostgreSQL database, authentication, storage).  
You write your recipe in **GraphQL**, a language that lets you ask for exactly the data you need—like ordering a specific dish with just the toppings you want.  

When you run “supabase start” it spins up a local copy of Supabase’s pantry and launches a GraphQL server on your machine. You can send queries to this server, see results instantly, and tweak your code without touching the real pantry in the cloud. Once you’re happy, you push the same code to the live Supabase instance so everyone else gets the same dish, but now served from the real kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
