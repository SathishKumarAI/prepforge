---
qid: ing_751209996e__faang__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 548
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:57-05:00'
sources: []
---

**Clarify**

You’re asking how *Schema & Table Visibility* works in the context of GraphQL on Supabase.  
I’ll assume you want a concise explanation of:  

1. What “visibility” means for database objects.  
2. How Supabase exposes those objects to a GraphQL schema.  
3. The role of row‑level security (RLS) and policies.

**Approach**

1. Define the core concepts (schemas, tables, visibility).  
2. Map them to Supabase’s GraphQL layer.  
3. Show how RLS/permissions are translated into GraphQL resolvers.  
4. Wrap up with a quick example.

**Depth**

- **Schema & Table Visibility**: In PostgreSQL, each schema is a namespace; tables live inside it. Supabase can expose only the schemas/tables you grant SELECT (or other) privileges to via `GRANT`.  
- **GraphQL Generation**: The Supabase GraphQL engine introspects the database and auto‑generates types/queries/mutations for every visible table. If a table isn’t granted access, it simply won’t appear in the schema.  
- **RLS & Policies**: Row‑level security is respected automatically. A policy that restricts rows to `user_id = auth.uid()` will cause the generated GraphQL resolver to include the same filter under the hood. Thus, the client sees only authorized rows without extra code.  
- **Practical Flow**:
  ```sql
  GRANT SELECT ON TABLE public.users TO anon;
  ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
  CREATE POLICY "Allow read by owner" ON public.users USING (user_id = auth.uid());
  ```
  After re‑deploying GraphQL, the `users` type is visible to anonymous clients, but each query automatically adds `WHERE user_id = current_user`.

**Edge Cases**

- *Multiple schemas*: Ensure you don’t expose internal system schemas (`pg_catalog`).  
- *Dynamic privileges*: If a privilege changes, the GraphQL schema must be refreshed.  
- *Complex joins*: Supabase only auto‑generates simple relations; custom resolvers are needed for many-to-many.

**Optimize & Communicate**

Explain that this approach keeps the API surface minimal and secure by default—only what the database grants is exposed. Mention that developers can still manually tweak the GraphQL schema if they need more granular control, but Supabase’s out‑of‑the‑box solution aligns with FAANG standards for rapid iteration, clear boundaries, and automatic security enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
