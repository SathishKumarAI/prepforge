---
qid: ing_0c4b2d24bf__eli5__local
question: 'Explain: What Is GraphQL? REST vs. GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:59-05:00'
sources: []
---

Think of an API as a restaurant menu.  
With **REST** you order by picking a dish (a URL). The kitchen always gives you the whole plate—maybe too much or missing something—because each recipe is fixed: “GET /users” returns all user data, “GET /posts/5” returns one post with its comments baked in. If you want less or more, you have to ask for another dish or write extra code.

**GraphQL** is like a build‑your‑own‑meal counter. You tell the waiter exactly which ingredients you want—“give me user id, name, and only their latest post title.” The kitchen (the GraphQL server) sends back just that, no extras, no missing pieces. If later you need another detail, you add it to your request; if you change your mind, you can drop an item.

So REST is fixed menu items; GraphQL lets you pick and choose the parts of each dish on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
