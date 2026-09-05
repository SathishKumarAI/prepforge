---
qid: ing_b2fabfbee7__eli5__local
question: 'Explain: Part 2 - Register a Query — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 235
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:33-05:00'
sources: []
---

**Think of LinkedIn’s GraphQL like a restaurant kitchen that lets you order exactly the dish you want, no extras.**

When you “register a query,” it’s like writing a menu item on your table: you tell the kitchen (LinkedIn’s server) *which ingredients* (data fields) you need and *how many servings* (number of items). The kitchen then prepares just that portion—no more, no less.

1. **You send the request** – your query lists the data you want, like “name, headline, 5 most recent posts.”
2. **The server reads it** – it looks up the recipe for each field and pulls only those pieces from its pantry (databases).
3. **It returns a single package** – all requested fields come back together in one tidy JSON object.

So registering a query is simply writing down exactly what you want; GraphQL’s job is to fetch precisely that, avoiding the waste of over‑fetching or under‑fetching data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
