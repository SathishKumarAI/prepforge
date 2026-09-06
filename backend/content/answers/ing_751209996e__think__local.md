---
qid: ing_751209996e__think__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 412
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:46:36-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify what “Schema & Table Visibility” means in Supabase’s GraphQL context (permissions, role‑based access).  
- Assume the reader knows basic SQL schemas, roles, and that Supabase auto‑generates a GraphQL endpoint.  

**2️⃣ Adopt a mental model**  
- Think of *schemas* as namespaces containing tables; *visibility* is a filter applied by the GraphQL engine before exposing data.  
- Map this to Supabase’s RBAC: role → permission set → exposed objects in the GraphQL schema.  

**3️⃣ Step‑by‑step reasoning**  
1. Start with the raw database: list schemas and tables.  
2. Explain how Supabase creates a GraphQL type for each table that belongs to a visible schema.  
3. Show how row‑level security (RLS) policies determine which rows are returned.  
4. Illustrate the “visibility” flag in the Supabase dashboard/CLI: toggling it adds/removes the corresponding type from the GraphQL introspection.  

**4️⃣ Common pitfalls to avoid**  
- Mixing *database visibility* with *GraphQL schema visibility*: one is physical, the other logical.  
- Forgetting that permissions are evaluated at query time, not just at schema generation.  
- Assuming every public table becomes a GraphQL type automatically; only enabled schemas/tables appear.  

**5️⃣ Sanity‑check & verbalize**  
- Verify with an introspection query (`{ __schema { types { name } }}`) that the expected tables are present or absent after toggling visibility.  
- Explain that the effect is immediate for new queries but existing cached schemas may need a refresh.  

By following these steps, you can confidently explain how Supabase controls which database objects appear in its GraphQL API and why it matters for security and developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
