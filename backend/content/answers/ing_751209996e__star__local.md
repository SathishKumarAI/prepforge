---
qid: ing_751209996e__star__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:54-05:00'
sources: []
---

**Situation**  
I was building a real‑time analytics dashboard for a fintech startup that used Supabase as its backend. The front‑end team requested to expose only a subset of tables (e.g., `transactions`, `users`) through GraphQL, while keeping internal audit logs hidden from the public API.

**Task**  
Configure Supabase’s GraphQL schema so that the client could query the visible tables without compromising security or performance, and ensure that any attempt to access hidden tables returned a clear error message.

**Action**  
I leveraged Supabase’s `graphql` service to create custom role‑based schemas. First, I defined two Postgres roles: `public_user` and `internal_admin`. Using SQL GRANT statements, I revoked SELECT privileges on the audit table from `public_user`. Then, in Supabase’s GraphQL settings, I mapped only the `public_user` schema to the public endpoint. I also added a middleware function that intercepts queries containing disallowed tables, logs the attempt, and throws a descriptive GraphQL error (`"Access denied: table not visible"`). Finally, I ran automated tests with pgAdmin to confirm that hidden tables were truly inaccessible via GraphQL.

**Result**  
The dashboard loaded 30% faster because only the required data was exposed. The audit table remained secure; attempts to query it returned a consistent error without leaking metadata. The engineering team praised the clear separation of concerns, and we documented the schema‑visibility pattern for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
