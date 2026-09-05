---
qid: ing_c248b72808__eli5__local
question: 'Explain: Add a Schema to the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 200
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:58-05:00'
sources: []
---

Imagine your database is a library and GraphQL is a smart librarian who can fetch exactly what you ask for, but only if she knows the layout of every shelf. Adding a *schema* to the API is like giving that librarian a detailed map of the library: which books are on which shelves, how they’re categorized, and what titles or authors exist. In Supabase’s GraphQL docs, you create this map by writing a schema file (a set of plain‑text rules) that describes each table, column, and relationship in your database. Once Supabase reads the schema, the GraphQL endpoint understands the structure and can translate your “give me all users with their posts” request into the right SQL behind the scenes. Think of it as giving the librarian a clear blueprint so she can serve you exactly what you need without rummaging aimlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
