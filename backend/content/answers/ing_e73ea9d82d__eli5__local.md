---
qid: ing_e73ea9d82d__eli5__local
question: 'Explain: cURL — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 250
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:47-05:00'
sources: []
---

Imagine you’re sending a letter (cURL) to a library that only knows one kind of request language—GraphQL. You write the letter in a special form: “Give me books where the author is *J.K. Rowling* and show me the title and publication year.” That’s your GraphQL query, a concise recipe for exactly what you want.

Supabase is like that library; it hosts databases and exposes them through an easy‑to‑use GraphQL endpoint. When you use cURL, you’re just dropping your letter into the mailbox:  
```
curl -X POST https://your-project.supabase.co/graphql \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"query":"{ books(author:\"J.K. Rowling\") { title published } }"}'
```
Supabase receives the letter, reads the GraphQL recipe, pulls only the requested data from its database, and sends back a tidy JSON reply. So cURL is the messenger, GraphQL is the language of the request, and Supabase is the library that answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
