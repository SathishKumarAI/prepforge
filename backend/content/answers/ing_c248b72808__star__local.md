---
qid: ing_c248b72808__star__local
question: 'Explain: Add a Schema to the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 391
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:23-05:00'
sources: []
---

**Situation:**  
While working on a real‑time analytics dashboard for a fintech startup, our backend was built on Supabase with a Postgres database and an auto‑generated GraphQL endpoint. The UI team needed more granular data – specifically a `TransactionDetail` type that combined fields from the `transactions`, `users`, and `merchant` tables – but the default schema didn’t expose the nested relationships.

**Task:**  
I had to extend the GraphQL schema so the client could query `transactionDetails { id, amount, user { name }, merchant { category } }` without breaking existing endpoints or performance. The goal was to keep the API intuitive and maintainable while ensuring the new resolver didn’t add significant latency.

**Action:**  
Using Supabase’s `schema.sql`, I added a database view `v_transaction_details` that joins the three tables with appropriate indexes. Then, in the GraphQL schema file, I defined a custom type `TransactionDetail` pointing to that view and created a new query field `transactionDetails`. I leveraged Supabase’s `@supabase/cli` to generate resolvers, then manually tuned them: added pagination arguments (`limit`, `offset`) and used parameterized queries to prevent injection. Finally, I wrote unit tests with Jest to validate the resolver against mock data and benchmarked response times (target < 120 ms).

**Result:**  
The new schema allowed developers to fetch all required transaction details in a single request, cutting the client’s network round‑trips from three to one and reducing page load time by ~35%. The view kept query performance high; the average latency stayed at 110 ms. I learned that thoughtful database views paired with well‑structured GraphQL types can dramatically simplify front‑end code while preserving backend efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
